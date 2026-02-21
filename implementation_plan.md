# Design AI Intake Flow — Improvement Plan

This is a Figma-to-React export for configuring AI support agents through an 8-step wizard. The code is functional but has typical Figma-export issues: hardcoded values, repeated patterns, no animations, and missing accessibility. This plan improves code quality, UX, and visual polish.

## User Review Required

> [!IMPORTANT]
> The `src/imports/` directory contains a **74KB raw Figma export** (`ResponseTemplatesConfigurationPage.tsx` — 1960 lines) with inline SVG paths and hardcoded layouts. It is **not referenced or used** by the app. I plan to delete it to clean up the codebase. Let me know if you want to keep it as reference.

> [!NOTE]
> The `src/app/components/ui/` directory has **48 shadcn/ui components**, but most are unused by the current steps. I will leave them in place since they form a reusable component library for future development.

---

## Proposed Changes

### 1. Shared Reusable Components

Create two shared components that replace heavily duplicated patterns across all 8 step files.

#### [NEW] [FormField.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/shared/FormField.tsx)

A `<FormField>` component that wraps the repeated label + input/select/textarea pattern. Every step file repeats this pattern 3-8 times with the same class strings:

```diff
-<label className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase block mb-2" style={{ fontWeight: 500 }}>
-  Agent Name
-</label>
-<input className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#3b82f6] transition-colors" ... />
+<FormField label="Agent Name">
+  <input value={...} onChange={...} />
+</FormField>
```

#### [NEW] [SectionCard.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/shared/SectionCard.tsx)

A `<SectionCard>` component for the repeated dark card wrapper:
```diff
-<div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
+<SectionCard title="Optional Title">
```

---

### 2. Step Transition Animations

#### [MODIFY] [Layout.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/Layout.tsx)

Add CSS-based fade+slide transition when switching between steps using `framer-motion` (already installed as `motion` package):

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentStepIndex}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.25 }}
  >
    <StepComponent />
  </motion.div>
</AnimatePresence>
```

---

### 3. AI Chat Panel Improvements

#### [MODIFY] [AIPreview.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/AIPreview.tsx)

- Add `useRef` + auto-scroll to bottom when new messages arrive
- Animate new messages with a subtle fade-in using `motion`
- Add a pulsing glow effect to the AI avatar
- Improve the typing indicator dots animation

---

### 4. Theme CSS Custom Properties

#### [MODIFY] [theme.css](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/styles/theme.css)

Add dark-mode-specific custom properties for the intake flow's color system, so hardcoded hex values throughout components can reference them:

```css
:root {
  /* Intake flow specific tokens */
  --intake-bg: #2d3544;
  --intake-panel: #111827;
  --intake-card: #1f2937;
  --intake-sidebar: #1a1d26;
  --intake-border: #374151;
  --intake-border-hover: #4b5563;
  --intake-text-primary: #ffffff;
  --intake-text-secondary: #d1d5db;
  --intake-text-muted: #9ca3af;
  --intake-text-dim: #6b7280;
  --intake-accent: #3b82f6;
  --intake-accent-hover: #2563eb;
  --intake-success: #10b981;
  --intake-warning: #f59e0b;
  --intake-error: #ef4444;
}
```

Then update components to use `var(--intake-accent)` instead of `#3b82f6`, etc.

---

### 5. Accessibility Improvements

#### [MODIFY] All step files in `src/app/components/steps/`

- Add `htmlFor` + matching `id` to all `<label>` + `<input>/<select>/<textarea>` pairs
- Add `aria-label` to icon-only buttons (Close, Send, Plus, etc.)
- Add `role="progressbar"` with `aria-valuenow` to progress bars

#### [MODIFY] [Sidebar.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/Sidebar.tsx)

- Add `aria-current="step"` to the active sidebar step
- Add `aria-disabled="true"` to future steps

#### [MODIFY] [TopStepper.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/TopStepper.tsx)

- Add `role="navigation"` and proper `aria-label`

---

### 6. Visual Polish

#### [MODIFY] [Sidebar.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/Sidebar.tsx)

- Add a gradient left-border accent to the active step
- Add smooth hover states with subtle background highlight
- Animate the progress bar fill with a subtle gradient shimmer

#### [MODIFY] [GeneralSettings.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/app/components/steps/GeneralSettings.tsx)

- Replace the custom toggle switch with the existing shadcn `Switch` component from `ui/switch.tsx`
- Wire up Save/Reset buttons with `sonner` toast notifications (already installed)

---

### 7. Cleanup

#### [DELETE] [ResponseTemplatesConfigurationPage.tsx](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/imports/ResponseTemplatesConfigurationPage.tsx)
#### [DELETE] [svg-ehtrewwycx.ts](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/imports/svg-ehtrewwycx.ts)
#### [DELETE] [svg-itxu2hlyg.ts](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/imports/svg-itxu2hlyg.ts)
#### [DELETE] [svg-jmi3ds4up9.ts](file:///d:/001_Takazcao/002_Front%20End/007_%20Design%20intake%20flow/src/imports/svg-jmi3ds4up9.ts)

Remove the unused 74KB Figma raw export and its SVG data files.

---

## Verification Plan

### Browser Testing
1. Run `npm run dev` to start the Vite dev server
2. Open the app in browser and verify:
   - Step transitions animate smoothly (fade+slide) when clicking Next/Previous or sidebar steps
   - AI chat auto-scrolls and new messages fade in
   - Progress bar animates with gradient
   - Sidebar hover effects work
   - Save buttons show toast notifications
3. Navigate through all 8 steps confirming no visual regressions

### Build Verification
- Run `npm run build` to verify no TypeScript or build errors after all changes
