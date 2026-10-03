// Firebase: Google sign-in + Firestore sync of answers, submissions and score history.
// Config is served automatically by Firebase Hosting at /__/firebase/init.json.
const V = '12.19.0';
const authEl = document.getElementById('auth');
let fb;
try {
  fb = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`)
  ]);
} catch (e) {
  authEl.innerHTML = '<span class="sync">Saved on this device</span>';
  throw e;
}
const [{ initializeApp }, { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged },
       { getFirestore, doc, getDoc, setDoc, serverTimestamp }] = fb;

let config;
try {
  const res = await fetch('/__/firebase/init.json');
  if (!res.ok) throw new Error('No Firebase config (not on Firebase Hosting)');
  config = await res.json();
} catch (e) {
  authEl.innerHTML = '<span class="sync">Saved on this device</span>';
  throw e;
}

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

let user = null;
let timer = null;

function setStatus(text) {
  const el = authEl.querySelector('.sync');
  if (el) el.textContent = text;
}

window.cloudSave = (state) => {
  if (!user) return;
  setStatus('Saving…');
  clearTimeout(timer);
  timer = setTimeout(async () => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        answers: state.answers, locked: state.locked, attempts: state.attempts, missed: state.missed || {}, orders: state.orders || {}, qlog: state.qlog || {},
        updatedAt: serverTimestamp()
      });
      setStatus('Synced');
    } catch (e) { console.error(e); setStatus('Sync failed'); }
  }, 800);
};

function renderSignedOut() {
  authEl.innerHTML = '<span class="sync">Progress saved on this device</span><button class="signin">Sign in to sync</button>';
  authEl.querySelector('button').onclick = async () => {
    try { await signInWithPopup(auth, provider); }
    catch (e) {
      if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
        await signInWithRedirect(auth, provider);
      } else { console.error(e); }
    }
  };
}

function renderSignedIn(u) {
  const photo = u.photoURL ? `<img src="${u.photoURL}" alt="" referrerpolicy="no-referrer">` : '';
  authEl.innerHTML = `${photo}<span class="sync">Syncing…</span><button>Sign out</button>`;
  authEl.querySelector('button').onclick = () => signOut(auth);
}

function mergeLogs(a = {}, b = {}) {
  const out = {};
  for (const id of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const seen = new Set(), list = [];
    for (const r of [...(a[id] || []), ...(b[id] || [])]) { const k = r.at + ':' + r.ok; if (!seen.has(k)) { seen.add(k); list.push(r); } }
    out[id] = list.sort((x, y) => x.at - y.at).slice(-10);
  }
  return out;
}

onAuthStateChanged(auth, async (u) => {
  user = u;
  if (!u) { renderSignedOut(); return; }
  renderSignedIn(u);
  try {
    const ref = doc(db, 'users', u.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      // Merge: cloud wins for answers/locks, attempt histories are combined.
      const cloud = snap.data();
      const local = window.getLocalState();
      const attempts = { ...(cloud.attempts || {}) };
      for (const [id, list] of Object.entries(local.attempts || {})) {
        const seen = new Set((attempts[id] || []).map(a => a.at));
        attempts[id] = [...(attempts[id] || []), ...list.filter(a => !seen.has(a.at))].sort((a, b) => a.at - b.at);
      }
      window.applyCloudState({ answers: cloud.answers, locked: cloud.locked, attempts, missed: { ...(local.missed || {}), ...(cloud.missed || {}) }, orders: cloud.orders || local.orders, qlog: mergeLogs(cloud.qlog, local.qlog) });
      window.cloudSave(window.getLocalState());
    } else {
      window.cloudSave(window.getLocalState()); // first sign-in: upload this device's progress
    }
    setStatus('Synced');
  } catch (e) { console.error(e); setStatus('Sync failed'); }
});
