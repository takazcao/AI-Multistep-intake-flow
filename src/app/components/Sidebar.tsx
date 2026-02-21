import { Check, ChevronLeft } from "lucide-react";
import { SUB_STEPS, getProgressPercent, useStepContext } from "./StepContext";

interface SidebarConfig {
  title: string;
  description: string;
}

const STEP_CONFIGS: Record<number, SidebarConfig> = {
  0: { title: "Agent Setup", description: "Configure your AI agent's core identity, role, and primary capabilities." },
  1: { title: "Knowledge Base", description: "Connect and manage data sources that power your AI agent's responses." },
  2: { title: "Configure Responses", description: "Define how the AI agent constructs answers using templates and dynamic variables." },
  3: { title: "Configure Personality", description: "Define the tone, style, and empathy level of your AI agent." },
  4: { title: "Setup Integrations", description: "Connect external services and configure communication channels." },
  5: { title: "Setup Ticket Triage", description: "Specify how agent should categorize and route incoming support tickets." },
  6: { title: "Review & Test", description: "Validate your configuration and test the AI agent before deployment." },
  7: { title: "Deploy Agent", description: "Finalize settings and deploy your AI agent to production." },
};

export function Sidebar() {
  const { currentStepIndex, setCurrentStepIndex, goToPrevious } = useStepContext();
  const config = STEP_CONFIGS[currentStepIndex];
  const progress = getProgressPercent(currentStepIndex);

  return (
    <div className="flex flex-col h-full bg-[#1a1d26] border-r border-[#374151] shrink-0" style={{ width: 280 }}>
      {/* Header */}
      <div className="p-8 pb-0">
        <h2
          className="font-['Inter',sans-serif] text-white mb-2"
          style={{ fontSize: 20, fontWeight: 600, lineHeight: "28px" }}
        >
          {config.title}
        </h2>
        <p
          className="font-['Inter',sans-serif] text-[#9ca3af]"
          style={{ fontSize: 14, fontWeight: 400, lineHeight: "20px" }}
        >
          {config.description}
        </p>
      </div>

      {/* Sub-steps */}
      <div className="flex-1 px-8 pt-6 relative">
        {/* Vertical line */}
        <div
          className="absolute bg-[#374151]"
          style={{ left: 47, top: 40, bottom: 16, width: 2 }}
        />

        <div className="flex flex-col gap-6">
          {SUB_STEPS.map((step, idx) => {
            const isComplete = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            const isFuture = idx > currentStepIndex;

            return (
              <button
                key={step.id}
                onClick={() => idx <= currentStepIndex && setCurrentStepIndex(idx)}
                className={`flex items-center gap-4 relative z-10 text-left ${
                  isFuture ? "opacity-50 cursor-default" : "cursor-pointer"
                }`}
              >
                {/* Step indicator */}
                {isComplete ? (
                  <div className="w-8 h-8 rounded-full bg-[rgba(16,185,129,0.2)] border border-[#10b981] flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#10b981]" />
                  </div>
                ) : isCurrent ? (
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0 shadow-[0_10px_15px_-3px_rgba(59,130,246,0.3)]">
                    <span
                      className="font-['Inter',sans-serif] text-white text-[12px]"
                      style={{ fontWeight: 700 }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#1f2937] border border-[#4b5563] flex items-center justify-center shrink-0">
                    <span
                      className="font-['Inter',sans-serif] text-[#9ca3af] text-[12px]"
                      style={{ fontWeight: 500 }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                )}

                {/* Step label */}
                <span
                  className={`font-['JetBrains_Mono',monospace] text-[14px] tracking-[0.35px] uppercase ${
                    isCurrent ? "text-white" : "text-[#9ca3af]"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress */}
      <div className="px-8 pb-4">
        <div className="w-full h-[6px] bg-[#374151] rounded-full mb-2">
          <div
            className="h-full bg-[#3b82f6] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.6px] text-[#9ca3af] uppercase"
          style={{ fontWeight: 500 }}
        >
          {progress}% Completed
        </span>
      </div>

      {/* Previous button */}
      <div className="border-t border-[#374151] bg-[#1a1d26] px-6 py-5">
        {currentStepIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors"
          >
            <ChevronLeft size={14} />
            <span className="font-['Inter',sans-serif] text-[14px]" style={{ fontWeight: 500 }}>
              Previous: {SUB_STEPS[currentStepIndex - 1]?.label}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
