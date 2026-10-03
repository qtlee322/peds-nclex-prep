# NCLEX Prep (Pediatrics & Maternity)

NCLEX-style practice sets built from course objectives: pediatric body systems (musculoskeletal, integumentary, hematology/immunology/oncology, ENT & eye), Exam 1 (genetics & newborn, professional nursing, growth & development, the hospitalized child) and Exam 2 (pregnancy, labor & birth, postpartum, family & community health).

- **Practice Tests:** full tests with scoring, rationales and attempt history
- **Quiz Mode:** one question at a time, shuffled, instant feedback, and a saved "Review missed" list
- **Hosting:** Firebase Hosting (`public/`)
- **Sign-in:** Google, via Firebase Authentication
- **Sync:** answers, submissions and score history saved to Firestore at `users/{uid}`; works signed-out with on-device storage

## Deploy

Every push to `main` deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
GitHub signs in to Google with Workload Identity Federation — no keys or passwords are stored in the repo or in GitHub secrets.

Live site: https://pediatric-nclex-prep.web.app

Manual deploy (optional): `firebase deploy`
