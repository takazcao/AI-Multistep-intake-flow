import React, { createContext, useContext, useState, useCallback } from "react";

export interface SubStep {
  id: string;
  label: string;
  path: string;
}

export interface Phase {
  id: string;
  number: number;
  label: string;
  subtitle: string;
}

export const PHASES: Phase[] = [
  { id: "agent-config", number: 1, label: "Agent Configuration", subtitle: "Support Specialist" },
  { id: "knowledge", number: 2, label: "Knowledge Sources", subtitle: "Help Center, API Docs" },
  { id: "response", number: 3, label: "Response Templates", subtitle: "Standard Replies & Variables" },
  { id: "integration", number: 4, label: "Integration Settings", subtitle: "Slack, Zendesk" },
  { id: "automation", number: 5, label: "Automation Rules", subtitle: "Ticket Triage" },
];

export const SUB_STEPS: SubStep[] = [
  { id: "general-settings", label: "General Settings", path: "/" },
  { id: "knowledge-sources", label: "Knowledge Sources", path: "/knowledge-sources" },
  { id: "response-templates", label: "Response Templates", path: "/response-templates" },
  { id: "tone-style", label: "Tone & Style", path: "/tone-style" },
  { id: "integration-settings", label: "Integration Settings", path: "/integration-settings" },
  { id: "ticket-triage", label: "Ticket Triage", path: "/ticket-triage" },
  { id: "review-test", label: "Review & Test", path: "/review-test" },
  { id: "deployment", label: "Deployment", path: "/deployment" },
];

// Map sub-steps to phases
export function getPhaseForStep(stepIndex: number): number {
  if (stepIndex === 0) return 0; // Agent Configuration
  if (stepIndex === 1) return 1; // Knowledge Sources
  if (stepIndex <= 3) return 2; // Response Templates (includes Tone & Style)
  if (stepIndex === 4) return 3; // Integration Settings
  if (stepIndex === 5) return 4; // Automation Rules
  if (stepIndex <= 7) return 4; // Review & Test, Deployment still in Automation phase
  return 4;
}

export function getPhaseStatus(phaseIndex: number, currentStepIndex: number): "complete" | "current" | "pending" {
  const currentPhase = getPhaseForStep(currentStepIndex);
  if (phaseIndex < currentPhase) return "complete";
  if (phaseIndex === currentPhase) return "current";
  return "pending";
}

export function getProgressPercent(currentStepIndex: number): number {
  return Math.round(((currentStepIndex + 1) / SUB_STEPS.length) * 100);
}

interface StepContextType {
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  chatMessages: ChatMessage[];
  addChatMessage: (msg: ChatMessage) => void;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  text: string;
  time?: string;
}

const StepContext = createContext<StepContextType | null>(null);

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "ai",
      text: "Hello! I'm your AI Support Specialist. I'll help you configure the intake flow. What would you like to set up first?",
      time: "9:41 AM",
    },
  ]);

  const goToNext = useCallback(() => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, SUB_STEPS.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const addChatMessage = useCallback((msg: ChatMessage) => {
    setChatMessages((prev) => [...prev, msg]);
  }, []);

  return (
    <StepContext.Provider
      value={{ currentStepIndex, setCurrentStepIndex, goToNext, goToPrevious, chatMessages, addChatMessage }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStepContext() {
  const ctx = useContext(StepContext);
  if (!ctx) throw new Error("useStepContext must be used within StepProvider");
  return ctx;
}
