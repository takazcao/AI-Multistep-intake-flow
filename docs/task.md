# Design AI Intake Flow — Improvement Tasks

## Phase 1: Code Quality & Architecture
- [ ] Extract repeated Tailwind class patterns into reusable utility classes/components
- [ ] Replace hardcoded hex colors (`#3b82f6`, `#111827`, etc.) with CSS custom properties
- [ ] Clean up unused `src/imports/` directory (74KB Figma raw export not referenced by app)
- [ ] Add proper `htmlFor`/`id` attributes to all label+input pairs for accessibility

## Phase 2: UX & Animations
- [ ] Add smooth step transition animations (fade/slide) when navigating between steps
- [ ] Add auto-scroll chat to bottom in AIPreview when new messages arrive
- [ ] Improve AI chat typing indicator with smoother animation
- [ ] Add keyboard navigation support (Enter to submit chat, Escape for modals)

## Phase 3: Component Improvements
- [/] Create shared `FormField` component for consistent label + input/select patterns
- [/] Create shared `SectionCard` component for the repeated card pattern
- [ ] Improve the custom toggle switch to use the existing shadcn Switch component
- [ ] Add `Save` and `Reset` button functionality with toast notifications

## Phase 4: Visual Polish
- [ ] Add subtle hover/focus states to sidebar step items
- [ ] Add gradient accent line to active sidebar step
- [ ] Improve the progress bar with animated gradient
- [ ] Add a pulsing glow effect to the AI avatar in the chat panel
