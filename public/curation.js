/* Question bank curation.
   DUPLICATE_IDS: questions retired because another question already tests the same point (kept by id so saved history stays valid).
   EXTRA_ITEMS: new questions added so the five 50-question exams plus the 100-question final are all unique. */
(function(){
  const L = 'ABCDEFGH';
  const q = (type, c, prompt, opts, correct, rationale) => ({
    type, c, prompt, options: opts.map((o, i) => [L[i], o]), correct: correct.split(''), rationale
  });
  const mc = (...a) => q('mc', ...a);

  window.DUPLICATE_IDS = [
    't1::6',   // early sign of compartment syndrome (same as t1::0)
    't2::8',   // partial-thickness burn description (same as burn case)
    't3::7',   // fever in neutropenia (same as febrile neutropenia case)
    't4::6',   // post-tonsillectomy bleeding signs (same as tonsillectomy case)
    't4::11',  // AOM antibiotic teaching (same as AOM interventions SATA)
    'e2s2::10',// stop oxytocin for tachysystole (same as oxytocin case)
    'e2s3::3', // boggy fundus -> massage (same as hemorrhage case)
    'e2s4::15',// safe sleep ABCs (covered in Exam 1 injury prevention)
    'e2s4::18',// abuse actions SATA (same as Exam 1 mandated reporting SATA)
    'e5s2::4', // suction before feeds (same as RSV case)
    'e5s2::17',// finish strep antibiotics (same as rheumatic fever prevention)
    'e5s3::17',// nursery delegation (same as Exam 1 nursery delegation)
    'e5s4::12',// IDM hypoglycemia (same as Exam 6 IDM question)
    'e6s1::17',// varicella precautions (same as e6s1::0)
    'e6s2::14',// Reye syndrome/aspirin (same as Exam 5 flu question)
    'e6s2::18',// meningitis droplet precautions (same as e6s2::0)
    'e6s3::6', // NAS environment (same as NAS case SATA)
    'e6s3::8', // jaundice timing (same as Exam 1 jaundice case)
    'e6s4::18' // pyloric stenosis lab (same as e6s4::2)
  ];

  window.EXTRA_ITEMS = [
    { unit:'t1', item: mc('Scoliosis', 'An adolescent is fitted with a brace for scoliosis. Which teaching is correct?',
      ['Wear the brace only at night','Wear the brace for most of the day (often 18–23 hours) with a snug T-shirt underneath','Remove the brace whenever it feels uncomfortable','Avoid all physical activity while wearing the brace'], 'B',
      'Bracing works only if it is worn as prescribed, usually most of the day. A T-shirt protects the skin, and the teen checks for redness or breakdown. Exercise is encouraged, and the brace may come off for sports and bathing as the provider allows.') },
    { unit:'t3', item: mc('Lymphoma', 'Which finding is most typical of Hodgkin lymphoma in an adolescent?',
      ['Painful, red lymph nodes with a sore throat','Painless, firm, enlarged lymph nodes in the neck, sometimes with fever, night sweats and weight loss','Joint pain with morning stiffness','A painless abdominal mass'], 'B',
      'Hodgkin lymphoma usually presents with painless cervical lymph node enlargement. Fever, drenching night sweats and weight loss ("B symptoms") suggest more advanced disease. A painless abdominal mass suggests Wilms tumor.') },
    { unit:'t4', item: mc('Amblyopia', 'A child is diagnosed with amblyopia ("lazy eye"). Which treatment does the nurse expect to teach?',
      ['Patch the weaker eye','Patch the stronger eye for several hours a day (or use atropine drops in it) as prescribed','Wait until the child outgrows it','Use eye drops in the weaker eye only'], 'B',
      'Covering or blurring the stronger eye forces the brain to use the weaker eye. Treatment works best when started early in childhood.') },
    { unit:'e2s1', item: mc('Pregnancy hormones', 'Which effect of progesterone explains why constipation is common in pregnancy?',
      ['It increases stomach acid','It relaxes smooth muscle, slowing GI movement','It raises blood glucose','It causes the uterus to contract'], 'B',
      'Progesterone maintains the uterine lining and relaxes smooth muscle (including the uterus and the GI tract), slowing digestion and contributing to constipation and heartburn.') },
    { unit:'e2s1', item: mc('Multifetal pregnancy', 'A client is pregnant with twins. Which complication is she at increased risk for?',
      ['Post-term pregnancy','Preterm labor, preeclampsia and anemia','Smaller blood volume increase','Fewer prenatal visits needed'], 'B',
      'Multiple gestation raises the risk of preterm labor, preeclampsia, gestational diabetes, anemia and postpartum hemorrhage, so prenatal visits and monitoring are more frequent.') },
    { unit:'e2s2', item: mc('Leopold maneuvers', 'What is the main purpose of Leopold maneuvers?',
      ['To measure cervical dilation','To determine fetal presentation and position and find the best place to listen to the fetal heart','To estimate the amount of amniotic fluid','To start labor'], 'B',
      'Leopold maneuvers are four abdominal palpations that identify which fetal part is in the fundus and which is over the pelvis, and where the fetal back lies. Fetal heart tones are best heard over the fetal back.') },
    { unit:'e2s3', item: mc('Perineal care', 'Which teaching is correct for perineal care after a vaginal birth?',
      ['Wipe from back to front','Use the peri bottle with warm water and pat dry from front to back after each void','Apply heat for the first 24 hours','Use tampons for lochia'], 'B',
      'Front-to-back cleansing lowers infection risk. Ice packs are used in the first 24 hours for swelling, then sitz baths or warm packs for comfort. Tampons are avoided until the provider approves.') },
    { unit:'e5s2', item: mc('Allergic rhinitis', 'Which medication is most effective for long-term control of allergic rhinitis in a school-age child?',
      ['A first-generation antihistamine such as diphenhydramine every night','An intranasal corticosteroid used daily','An oral decongestant every day for months','An antibiotic'], 'B',
      'Intranasal steroids reduce nasal inflammation and work best with daily use. Non-sedating antihistamines can be added. First-generation antihistamines cause drowsiness that can affect school performance.') },
    { unit:'e5s2', item: mc('Common cold', 'The parent of an 18-month-old with a cold asks what to give. What is the best advice?',
      ['Over-the-counter cough and cold medicine','Saline nose drops with gentle bulb suction, fluids, and a cool-mist humidifier','Leftover antibiotics','Honey-and-aspirin syrup'], 'B',
      'Colds are viral, so antibiotics don’t help. OTC cough and cold medicines are not recommended for young children because of the risk of serious side effects. Saline, suction, fluids and humidity ease symptoms.') },
    { unit:'e5s2', item: mc('Pneumonia', 'Which findings suggest bacterial pneumonia in a child?',
      ['Gradual low-grade fever with a barky cough','Sudden high fever, cough, fast breathing, and crackles or decreased breath sounds over one area of the lung','Wheezing that improves completely with albuterol','Clear nasal discharge and sneezing only'], 'B',
      'Bacterial pneumonia often begins abruptly with high fever, tachypnea and localized lung findings. A chest x-ray confirms it, and antibiotics treat it.') },
    { unit:'e5s3', item: mc('Newborn screening', 'When should a newborn’s hearing screening be completed?',
      ['At the 6-month visit','Before discharge from the hospital (or by 1 month of age)','Only if the parents notice a problem','When the child starts talking'], 'B',
      'Hearing is screened before discharge (by 1 month at the latest), with diagnosis by 3 months and early intervention by 6 months (the "1-3-6" goals), because early hearing affects language development.') },
    { unit:'e5s4', item: mc('Type 2 diabetes', 'An adolescent with obesity is diagnosed with type 2 diabetes. The A1c is 7.8%, and there are no ketones. Which treatment is usually started first?',
      ['Insulin pump','Metformin along with healthy eating and physical activity changes','A very-low-calorie diet only','No treatment until symptoms appear'], 'B',
      'For youth with type 2 diabetes who are not in DKA and have only mild hyperglycemia, metformin plus lifestyle changes is first-line. Insulin is used when glucose is very high or ketoacidosis is present.') },
    { unit:'e6s1', item: mc('Giardiasis', 'After a camping trip, a child develops foul-smelling, greasy diarrhea, bloating and gas. The child drank stream water. Which infection is most likely?',
      ['Pinworms','Giardiasis','Lyme disease','Rotavirus'], 'B',
      'Giardia is a parasite spread through contaminated water and poor hand hygiene. It is diagnosed with stool testing, and prevention includes treating or boiling water and good handwashing.') },
    { unit:'e6s2', item: mc('Hydrocephalus', 'Which finding in a 3-month-old should the nurse report as a possible sign of hydrocephalus?',
      ['Head circumference that is rising faster than expected on the growth chart, with a bulging fontanel','A closed posterior fontanel','A head circumference that stays on the 50th percentile','A flat anterior fontanel when upright'], 'A',
      'In infants, open sutures let the head enlarge as cerebrospinal fluid builds up. Head circumference crossing percentiles, a tense or bulging fontanel, and "sunset" eyes are classic signs.') },
    { unit:'e6s4', item: mc('Omphalocele', 'A newborn has an omphalocele. Why does the nurse assess carefully for other problems?',
      ['Omphalocele is often associated with other anomalies, such as heart defects and chromosomal conditions','Omphalocele always causes jaundice','Omphalocele is caused by infection','It never needs surgery'], 'A',
      'Unlike gastroschisis, an omphalocele is covered by a sac at the umbilicus and is often linked to other congenital anomalies. The sac is protected with a sterile, moist covering until repair.') },
    { unit:'e6s4', item: mc('Epispadias', 'In epispadias, where is the urethral opening located?',
      ['On the underside (ventral surface) of the penis','On the top (dorsal surface) of the penis','At the normal tip of the penis','In the perineum only'], 'B',
      'Epispadias is a dorsal urethral opening and is often associated with bladder exstrophy. Hypospadias is a ventral (underside) opening. Both are repaired surgically, and circumcision is delayed.') }
  ];
})();
