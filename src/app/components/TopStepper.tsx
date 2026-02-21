import { X, Check, ArrowRight, Clock } from "lucide-react";
import { PHASES, getPhaseStatus, useStepContext } from "./StepContext";

export function TopStepper() {
  const { currentStepIndex } = useStepContext();

  return (
    <div className="flex items-stretch w-full border-b border-[#374151] shrink-0" style={{ height: 80 }}>
      {/* Close Button */}
      <div className="flex items-center justify-center border-r border-[#374151] shrink-0" style={{ width: 80 }}>
        <button className="text-[#9ca3af] hover:text-white transition-colors p-2">
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
              !isLast ? "border-r border-[#374151]" : ""
            } ${status === "current" ? "bg-[#232732]" : ""} ${status === "pending" ? "opacity-40" : status === "complete" ? "opacity-60" : ""}`}
          >
            {status === "current" && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#3b82f6]" />
            )}

            <div className="flex items-center justify-between mb-1">
              <span
                className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.6px] uppercase"
                style={{
                  color: status === "current" ? "#3b82f6" : "#9ca3af",
                  fontWeight: 500,
                }}
              >
                {phase.number}. {phase.label}
              </span>

              {status === "complete" && (
                <span className="flex items-center gap-1">
                  <Check size={12} className="text-[#10b981]" />
                  <span className="font-['Inter',sans-serif] text-[12px] tracking-[0.6px] text-[#10b981]" style={{ fontWeight: 700 }}>
                    COMPLETE
                  </span>
                </span>
              )}
              {status === "current" && (
                <span className="flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#3b82f6]" />
                  <span className="font-['Inter',sans-serif] text-[12px] tracking-[0.6px] text-[#3b82f6]" style={{ fontWeight: 700 }}>
                    CURRENT
                  </span>
                </span>
              )}
              {status === "pending" && (
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-[#6b7280]" />
                  <span className="font-['Inter',sans-serif] text-[12px] tracking-[0.6px] text-[#6b7280]" style={{ fontWeight: 700 }}>
                    PENDING
                  </span>
                </span>
              )}
            </div>

            <span
              className="font-['Inter',sans-serif] text-[14px]"
              style={{
                color: status === "current" ? "#ffffff" : "#d1d5db",
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
