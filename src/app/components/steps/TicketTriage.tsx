import { useState } from "react";
import { X, ChevronDown, Plus } from "lucide-react";

export function TicketTriage() {
  const [ruleName, setRuleName] = useState("Billing Inquiries - Tier 1");
  const [routeVia, setRouteVia] = useState("zendesk");
  const [confidence, setConfidence] = useState("medium");
  const [autonomyLevel, setAutonomyLevel] = useState("complex");

  const [keywords, setKeywords] = useState([
    { id: "1", label: "refund" },
    { id: "2", label: "invoice" },
    { id: "3", label: "payment" },
    { id: "4", label: "billing" },
    { id: "5", label: "charge" },
  ]);

  const removeKeyword = (id: string) => {
    setKeywords(keywords.filter((k) => k.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3
          className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase font-medium"
          style={{ fontSize: 18 }}
        >
          Ticket Triage Rules
        </h3>
        <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
          Configure how the agent categorizes and routes incoming tickets.
        </p>
      </div>

      {/* Rule Name + Route */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <div className="mb-4">
          <label
            htmlFor="rule-name"
            className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase block mb-2 font-medium"
          >
            Rule Name
          </label>
          <input
            id="rule-name"
            type="text"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            className="w-full bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[var(--color-intake-accent)] transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="route-via"
              className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase block mb-2 font-medium"
            >
              Route Tickets Via
            </label>
            <div className="relative">
              <select
                id="route-via"
                value={routeVia}
                onChange={(e) => setRouteVia(e.target.value)}
                className="w-full bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-[var(--color-intake-accent)] transition-colors"
              >
                <option value="zendesk">Zendesk</option>
                <option value="slack">Slack</option>
                <option value="email">Email</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-intake-text-dim)] pointer-events-none" />
            </div>
          </div>
          <div>
            <label
              htmlFor="confidence-threshold"
              className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase block mb-2 font-medium"
            >
              Confidence Threshold
            </label>
            <div className="relative">
              <select
                id="confidence-threshold"
                value={confidence}
                onChange={(e) => setConfidence(e.target.value)}
                className="w-full bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-[var(--color-intake-accent)] transition-colors"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="very-high">Very High</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-intake-text-dim)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Agent Autonomy Level */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
        >
          Agent Autonomy Level
        </h4>

        <div className="space-y-4">
          {[
            {
              value: "review",
              label: "Review each decision",
              description: "Agent suggests, you approve before routing.",
            },
            {
              value: "auto-route",
              label: "Auto-route if confident",
              description: "Agent routes when above threshold, flags uncertain cases",
            },
            {
              value: "complex",
              label: "Complex Tasks",
              description: "Agent routes when above threshold, flags uncertain cases",
            },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div className="mt-0.5">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    autonomyLevel === option.value
                      ? "border-[var(--color-intake-accent)]"
                      : "border-[var(--color-intake-border-hover)] group-hover:border-[var(--color-intake-text-dim)]"
                  }`}
                >
                  {autonomyLevel === option.value && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-intake-accent)]" />
                  )}
                </div>
              </div>
              <div
                onClick={() => setAutonomyLevel(option.value)}
                className="flex-1"
              >
                <p className="font-['Inter',sans-serif] text-white text-[14px] font-medium">
                  {option.label}
                </p>
                <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[13px]">
                  {option.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Match Keywords and Intents */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
        >
          Match Keywords and Intents
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((kw) => (
            <span
              key={kw.id}
              className="flex items-center gap-1.5 bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-3 py-1.5 text-[var(--color-intake-text-secondary)] font-['Inter',sans-serif] text-[13px]"
            >
              {kw.label}
              <button
                onClick={() => removeKeyword(kw.id)}
                className="text-[var(--color-intake-text-dim)] hover:text-white transition-colors"
                aria-label={`Remove keyword ${kw.label}`}
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--color-intake-border)] text-[var(--color-intake-text-dim)] hover:text-white hover:border-[var(--color-intake-border-hover)] transition-colors"
            aria-label="Add keyword"
          >
            <Plus size={14} />
          </button>
        </div>

        <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[13px]">
          Agent uses semantic understanding beyond exact matches.
          <br />
          Keywords help focus the classification model on relevant ticket content.
        </p>
      </div>
    </div>
  );
}
