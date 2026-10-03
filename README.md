# NCLEX Prep (Pediatrics & Maternity)

NCLEX-style practice sets built from course objectives: pediatric body systems (musculoskeletal, integumentary, hematology/immunology/oncology, ENT & eye), Exam 1 (genetics & newborn, professional nursing, growth & development, the hospitalized child), Exam 2 (pregnancy, labor & birth, postpartum, family & community health), Exam 5 (cardiac, respiratory, normal newborn, endocrine) and Exam 6 (infectious disease, neuro/neuromuscular, high-risk newborn, GI/GU).

- **Practice Tests:** five fixed 50-question exams (Peds Systems, Exam 1, 2, 5, 6) and a 100-question cumulative final; all 350 questions are unique (no question appears in more than one test)
- **Quiz Mode:** one question at a time, shuffled, instant feedback, and a saved "Review missed" list
- **Hosting:** Firebase Hosting (`public/`)
- **Sign-in:** Google, via Firebase Authentication
- **Sync:** answers, submissions and score history saved to Firestore at `users/{uid}`; works signed-out with on-device storage

## Deploy

Every push to `main` deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
GitHub signs in to Google with Workload Identity Federation — no keys or passwords are stored in the repo or in GitHub secrets.

Live site: https://pediatric-nclex-prep.web.app

Manual deploy (optional): `firebase deploy`
