# Design AI Intake Flow

A multi-step wizard UI for configuring an AI support agent — from identity and knowledge sources through to deployment. Built as a React/Next.js single-page application.

## Tech Stack

- **React 19** with **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** with CSS custom properties for theming
- **Radix UI** primitives (Switch component)
- **React Hook Form** (installed, ready for future validation)
- **Lucide React** for icons

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── steps/              # One component per wizard step
│   │   │   ├── GeneralSettings.tsx
│   │   │   ├── KnowledgeSources.tsx
│   │   │   ├── ResponseTemplates.tsx
│   │   │   ├── ToneAndStyle.tsx
│   │   │   ├── IntegrationSettings.tsx
│   │   │   ├── TicketTriage.tsx
│   │   │   ├── ReviewAndTest.tsx
│   │   │   └── Deployment.tsx
│   │   ├── shared/             # Reusable form primitives
│   │   │   ├── FormField.tsx
│   │   │   └── SectionCard.tsx
│   │   ├── ui/
│   │   │   └── switch.tsx      # Radix UI Switch wrapper
│   │   ├── AIPreview.tsx       # Right-panel AI chat preview
│   │   ├── Layout.tsx          # Root layout (TopStepper + Sidebar + content + AIPreview)
│   │   ├── Sidebar.tsx         # Left navigation with progress bar
│   │   ├── StepContext.tsx     # Global step state and chat messages
│   │   └── TopStepper.tsx      # Phase progress header
│   └── App.tsx
└── styles/
    └── theme.css               # CSS custom properties (intake flow color tokens)
```

## Wizard Steps

| #   | Step                 | Description                                                 |
| --- | -------------------- | ----------------------------------------------------------- |
| 1   | General Settings     | Agent name, role, language, greeting, fallback behaviour    |
| 2   | Knowledge Sources    | Connect documents, URLs, and APIs                           |
| 3   | Response Templates   | Define structured reply patterns with variable substitution |
| 4   | Tone & Style         | Formality, response length, empathy sliders                 |
| 5   | Integration Settings | Slack, Zendesk, Intercom, Freshdesk webhooks                |
| 6   | Ticket Triage        | Routing rules, confidence threshold, autonomy level         |
| 7   | Review & Test        | Run test scenarios against the configuration                |
| 8   | Deployment           | Environment selection, rollout percentage, deploy           |

## Original Design

Figma source: [Design AI Intake Flow](https://www.figma.com/design/NJoaCbLC67A1TdtF10qHjT/Design-AI-Intake-Flow)
