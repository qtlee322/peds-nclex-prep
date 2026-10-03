# NCLEX Prep (Pediatrics & Maternity)

NCLEX-style practice tests built from course objectives: Test 1 (genetics & newborn, professional nursing, growth & development, the hospitalized child), Test 2 (pregnancy, labor & birth, postpartum, family & community health), Test 3 (antepartum and labor complications, reproductive health, STIs, contraception), Test 4 (pediatric musculoskeletal, integumentary, hematology/oncology, ENT & eye), Test 5 (cardiac, respiratory, normal newborn, endocrine) and Test 6 (infectious disease, neuro, high-risk newborn, GI/GU).

- **Practice Tests:** six fixed 50-question tests (Tests 1–6) and a 100-question cumulative final; no question appears in more than one test (extra questions are available in Quiz Mode)
- **Quiz Mode:** one question at a time, shuffled, instant feedback, and a saved "Review missed" list
- **Hosting:** Firebase Hosting (`public/`)
- **Sign-in:** Google, via Firebase Authentication
- **Sync:** answers, submissions and score history saved to Firestore at `users/{uid}`; works signed-out with on-device storage

## Deploy

Every push to `main` deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
GitHub signs in to Google with Workload Identity Federation — no keys or passwords are stored in the repo or in GitHub secrets.

Live site: https://pediatric-nclex-prep.web.app

Manual deploy (optional): `firebase deploy`
