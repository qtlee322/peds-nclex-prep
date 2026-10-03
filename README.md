# Pediatric NCLEX Prep

Five pediatric NCLEX practice sets (musculoskeletal, integumentary, hematology/immunology/oncology, ENT & eye, plus a combined 50-item exam) with multiple-choice and select-all-that-apply questions and rationales.

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
