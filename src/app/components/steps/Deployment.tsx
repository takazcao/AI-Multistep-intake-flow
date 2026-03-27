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
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            Deploy Agent
          </h3>
          <p className="font-['Inter',sans-serif] text-[#9ca3af] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Finalize and deploy your AI Support Specialist to production.
          </p>
        </div>
        <button
          disabled={!acknowledged}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#10b981] text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-[#059669] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ fontWeight: 600 }}
        >
          <Rocket size={16} />
          Deploy Now
        </button>
      </div>

      {/* Pre-deployment Checklist */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={16} className="text-[#3b82f6]" />
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase"
            style={{ fontWeight: 500 }}
          >
            Pre-Deployment Checklist
          </h4>
        </div>

        <div className="space-y-3">
          {checklistItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              {item.done ? (
                <div className="w-5 h-5 rounded bg-[#10b981]/20 flex items-center justify-center">
                  <Check size={12} className="text-[#10b981]" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded bg-[#f59e0b]/20 flex items-center justify-center">
                  <AlertCircle size={12} className="text-[#f59e0b]" />
                </div>
              )}
              <span
                className={`font-['Inter',sans-serif] text-[14px] ${
                  item.done ? "text-[#d1d5db]" : "text-[#f59e0b]"
                }`}
                style={{ fontWeight: 400 }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Settings */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Deployment Configuration
        </h4>

        <div className="space-y-5">
          {/* Environment */}
          <div>
            <label
              className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase block mb-2"
              style={{ fontWeight: 500 }}
            >
              Environment
            </label>
            <div className="flex gap-3">
              {["staging", "production"].map((env) => (
                <button
                  key={env}
                  onClick={() => setEnvironment(env)}
                  className={`flex-1 px-4 py-3 rounded-lg font-['Inter',sans-serif] text-[14px] transition-all ${
                    environment === env
                      ? "bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/40"
                      : "bg-[#111827] text-[#9ca3af] border border-[#374151] hover:border-[#4b5563]"
                  }`}
                  style={{ fontWeight: 500 }}
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
                className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase"
                style={{ fontWeight: 500 }}
              >
                Gradual Rollout
              </label>
              <span className="font-['JetBrains_Mono',monospace] text-[#3b82f6] text-[14px]" style={{ fontWeight: 600 }}>
                {rolloutPercentage}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={rolloutPercentage}
              onChange={(e) => setRolloutPercentage(Number(e.target.value))}
              className="w-full accent-[#3b82f6] h-2 bg-[#374151] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#3b82f6] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
            />
            <div className="flex justify-between mt-1">
              <span className="font-['Inter',sans-serif] text-[#6b7280] text-[11px]" style={{ fontWeight: 400 }}>0%</span>
              <span className="font-['Inter',sans-serif] text-[#6b7280] text-[11px]" style={{ fontWeight: 400 }}>100%</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 size={14} className="text-[#6b7280]" />
                <span className="font-['Inter',sans-serif] text-[#d1d5db] text-[14px]" style={{ fontWeight: 400 }}>
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
                <Users size={14} className="text-[#6b7280]" />
                <span className="font-['Inter',sans-serif] text-[#d1d5db] text-[14px]" style={{ fontWeight: 400 }}>
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
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => setAcknowledged(!acknowledged)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
              acknowledged ? "bg-[#3b82f6] border-[#3b82f6]" : "border-[#4b5563]"
            }`}
          >
            {acknowledged && <Check size={12} className="text-white" />}
          </div>
          <p className="font-['Inter',sans-serif] text-[#d1d5db] text-[14px]" style={{ fontWeight: 400, lineHeight: "20px" }}>
            I acknowledge that this AI agent will interact with customers in {environment === "production" ? "production" : "staging"} environment. I have reviewed the configuration, tested the responses, and confirmed that the agent behaves as expected.
          </p>
        </label>
      </div>
    </div>
  );
}
