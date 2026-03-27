import { X, Check, ArrowRight, Clock } from "lucide-react";
import { PHASES, getPhaseStatus, useStepContext } from "./StepContext";

export function TopStepper() {
  const { currentStepIndex } = useStepContext();

  return (
    <div className="flex items-stretch w-full border-b border-[var(--color-intake-border)] shrink-0" style={{ height: 80 }}>
      {/* Close Button */}
      <div className="flex items-center justify-center border-r border-[var(--color-intake-border)] shrink-0" style={{ width: 80 }}>
        <button aria-label="Close" className="text-[var(--color-intake-text-muted)] hover:text-white transition-colors p-2">
          <X size={18} />
        </button>
      </div>

      {/* Phase Steps */}
      {PHASES.map((phase, idx) => {
        const status = getPhaseStatus(idx, currentStepIndex);
        const isLast = idx === PHASES.length - 1;

        return (
          <div
            key={phase.id}
            className={`flex-1 flex flex-col justify-center px-6 py-4 relative ${
              !isLast ? "border-r border-[var(--color-intake-border)]" : ""
            } ${status === "current" ? "bg-[var(--color-intake-active)]" : ""} ${status === "pending" ? "opacity-40" : status === "complete" ? "opacity-60" : ""}`}
          >
            {status === "current" && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-intake-accent)]" />
            )}

            <div className="flex items-center justify-between mb-1">
              <span
                className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.6px] uppercase font-medium"
                style={{
                  color: status === "current" ? "var(--color-intake-accent)" : "var(--color-intake-text-muted)",
                }}
              >
                {phase.number}. {phase.label}
              </span>

              {status === "complete" && (
                <span className="flex items-center gap-1">
                  <Check size={12} className="text-[var(--color-intake-success)]" />
                  <span className="font-['Inter',sans-serif] text-[12px] tracking-[0.6px] text-[var(--color-intake-success)] font-bold">
                    COMPLETE
                  </span>
                </span>
              )}
              {status === "current" && (
                <span className="flex items-center gap-1">
                  <ArrowRight size={12} className="text-[var(--color-intake-accent)]" />
                  <span className="font-['Inter',sans-serif] text-[12px] tracking-[0.6px] text-[var(--color-intake-accent)] font-bold">
                    CURRENT
                  </span>
                </span>
              )}
              {status === "pending" && (
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-[var(--color-intake-text-dim)]" />
                  <span className="font-['Inter',sans-serif] text-[12px] tracking-[0.6px] text-[var(--color-intake-text-dim)] font-bold">
                    PENDING
                  </span>
                </span>
              )}
            </div>

            <span
              className="font-['Inter',sans-serif] text-[14px]"
              style={{
                color: status === "current" ? "var(--color-intake-text-primary)" : "var(--color-intake-text-secondary)",
                fontWeight: status === "current" ? 500 : 400,
              }}
            >
              {phase.subtitle}
            </span>
          </div>
        );
      })}
    </div>
  );
}
