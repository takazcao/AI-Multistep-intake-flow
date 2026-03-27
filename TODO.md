# Project To-Do List

> Design Intake Flow — Pre-GitHub Cleanup & Improvements
> Last updated: 2026-03-26

---

## Phase 1 — Critical Fixes _(Do before first `git push`)_

- [x] **#1** Delete `src/imports/` directory — 108KB of unused Figma export files, not referenced anywhere
- [x] **#2** Fix typo `"Bendesk"` → `"Zendesk"` in `src/app/components/steps/TicketTriage.tsx` line 78
- [x] **#3** Remove duplicate "Match Keywords and Intents" section in `TicketTriage.tsx` lines 171–243 (copy-paste error, uses two separate state arrays `keywords` / `keywords2`)
- [x] **#4** Add `tsconfig.json` to project root (missing, needed for GitHub clarity)

---

## Phase 2 — Code Quality

- [x] **#5** Remove 43 unused shadcn/ui components from `src/app/components/ui/` (only `switch.tsx` was actually used)
- [ ] **#6** Replace 40+ hardcoded hex colors (e.g. `#3b82f6`, `#111827`) with CSS custom property variables already defined in `src/styles/theme.css`
- [x] **#7** Standardize all toggle switches to use the existing `Switch` component — replaced hand-rolled toggles in `Deployment.tsx` and `IntegrationSettings.tsx`
- [ ] **#12** Replace `style={{}}` inline style objects with Tailwind utility classes across all step components

---

## Phase 3 — Accessibility

- [ ] **#8** Add missing `htmlFor` attributes on form labels across all step components
- [ ] **#9** Add `aria-label` to all icon-only buttons (Close, Send, Plus)
- [ ] **#10** Add `aria-current="step"` to the active step item in `Sidebar.tsx`
- [ ] **#11** Add `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` to progress bars in `TopStepper.tsx`

---

## Phase 4 — UX & Logic

- [ ] **#13** Lift form state to layout level so data persists when navigating between steps (currently each step uses isolated `useState`)
- [ ] **#14** Add form validation using React Hook Form (already installed) — required fields, error messages, block "Next" on invalid
- [ ] **#15** Fix "Run All Tests" button in `ReviewAndTest.tsx` — after running, state doesn't reset so tests can't be re-run
- [ ] **#16** Fix rapid-click race condition on Send button in `AIPreview.tsx` — disable button while response is pending
- [ ] **#17** Remove or implement confidence threshold percentages in `TicketTriage.tsx` — labels say `"Low (30%+)"` etc. but no actual logic behind them

---

## Phase 5 — GitHub Presentation

- [ ] **#18** Update `README.md` with: project description, tech stack, local setup steps (`npm install`, `npm run dev`), and project structure overview

---

## Notes

- **Phases 3 and 4** are longer and touch many files — tackle one task at a time and confirm before starting each.
- **Phase 4 #13** (form state persistence) is the most complex task — may need its own planning session.
- Security status is **OK** — no exposed secrets, `.gitignore` is properly configured.
