import { useState } from "react";
import { Check, Rocket, Shield, Clock, AlertCircle, Globe, Users, BarChart3 } from "lucide-react";
import { Switch } from "../ui/switch";

export function Deployment() {
  const [rolloutPercentage, setRolloutPercentage] = useState(10);
  const [environment, setEnvironment] = useState("staging");
  const [enableMonitoring, setEnableMonitoring] = useState(true);
  const [enableRollback, setEnableRollback] = useState(true);
  const [acknowledged, setAcknowledged] = useState(false);

  const checklistItems = [
    { id: "1", label: "Agent profile configured", done: true },
    { id: "2", label: "Knowledge sources connected (4/4)", done: true },
    { id: "3", label: "Response templates created (3)", done: true },
    { id: "4", label: "Brand voice configured", done: true },
    { id: "5", label: "Integrations connected (Slack, Zendesk)", done: true },
    { id: "6", label: "Automation rules defined", done: true },
    { id: "7", label: "All tests passed (4/5)", done: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase font-medium"
            style={{ fontSize: 18 }}
          >
            Deploy Agent
          </h3>
          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Finalize and deploy your AI Support Specialist to production.
          </p>
        </div>
        <button
          disabled={!acknowledged}
          className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-intake-success)] text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-[var(--color-intake-success-hover)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-semibold"
        >
          <Rocket size={16} />
          Deploy Now
        </button>
      </div>

      {/* Pre-deployment Checklist */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={16} className="text-[var(--color-intake-accent)]" />
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase font-medium"
          >
            Pre-Deployment Checklist
          </h4>
        </div>

        <div className="space-y-3">
          {checklistItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              {item.done ? (
                <div className="w-5 h-5 rounded bg-[var(--color-intake-success)]/20 flex items-center justify-center">
                  <Check size={12} className="text-[var(--color-intake-success)]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded bg-[var(--color-intake-warning)]/20 flex items-center justify-center">
                  <AlertCircle size={12} className="text-[var(--color-intake-warning)]" />
                </div>
              )}
              <span
                className={`font-['Inter',sans-serif] text-[14px] ${
                  item.done ? "text-[var(--color-intake-text-secondary)]" : "text-[var(--color-intake-warning)]"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Settings */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
        >
          Deployment Configuration
        </h4>

        <div className="space-y-5">
          {/* Environment */}
          <div>
            <label
              className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase block mb-2 font-medium"
            >
              Environment
            </label>
            <div className="flex gap-3">
              {["staging", "production"].map((env) => (
                <button
                  key={env}
                  onClick={() => setEnvironment(env)}
                  className={`flex-1 px-4 py-3 rounded-lg font-['Inter',sans-serif] text-[14px] transition-all font-medium ${
                    environment === env
                      ? "bg-[var(--color-intake-accent)]/20 text-[var(--color-intake-accent)] border border-[var(--color-intake-accent)]/40"
                      : "bg-[var(--color-intake-panel)] text-[var(--color-intake-text-muted)] border border-[var(--color-intake-border)] hover:border-[var(--color-intake-border-hover)]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {env === "staging" ? <Clock size={16} /> : <Globe size={16} />}
                    <span className="capitalize">{env}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Rollout Percentage */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="rollout-percentage"
                className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase font-medium"
              >
                Gradual Rollout
              </label>
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-accent)] text-[14px] font-semibold">
                {rolloutPercentage}%
              </span>
            </div>
            <input
              id="rollout-percentage"
              type="range"
              min="0"
              max="100"
              step="5"
              value={rolloutPercentage}
              onChange={(e) => setRolloutPercentage(Number(e.target.value))}
              className="w-full accent-[var(--color-intake-accent)] h-2 bg-[var(--color-intake-border)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[var(--color-intake-accent)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
            />
            <div className="flex justify-between mt-1">
              <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[11px]">0%</span>
              <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[11px]">100%</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 size={14} className="text-[var(--color-intake-text-dim)]" />
                <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-secondary)] text-[14px]">
                  Enable real-time monitoring
                </span>
              </div>
              <Switch
                checked={enableMonitoring}
                onCheckedChange={setEnableMonitoring}
                aria-label="Enable real-time monitoring"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[var(--color-intake-text-dim)]" />
                <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-secondary)] text-[14px]">
                  Auto-rollback on error spike
                </span>
              </div>
              <Switch
                checked={enableRollback}
                onCheckedChange={setEnableRollback}
                aria-label="Auto-rollback on error spike"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Acknowledgement */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => setAcknowledged(!acknowledged)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
              acknowledged ? "bg-[var(--color-intake-accent)] border-[var(--color-intake-accent)]" : "border-[var(--color-intake-border-hover)]"
            }`}
          >
            {acknowledged && <Check size={12} className="text-white" />}
          </div>
          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-secondary)] text-[14px]">
            I acknowledge that this AI agent will interact with customers in {environment === "production" ? "production" : "staging"} environment. I have reviewed the configuration, tested the responses, and confirmed that the agent behaves as expected.
          </p>
        </label>
      </div>
    </div>
  );
}
