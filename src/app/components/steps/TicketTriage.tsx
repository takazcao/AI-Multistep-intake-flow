import { useState } from "react";
import { X, ChevronDown, Plus } from "lucide-react";

export function TicketTriage() {
  const [ruleName, setRuleName] = useState("Billing Inquiries - Tier 1");
  const [routeVia, setRouteVia] = useState("bendesk");
  const [confidence, setConfidence] = useState("medium");
  const [autonomyLevel, setAutonomyLevel] = useState("complex");

  const [keywords, setKeywords] = useState([
    { id: "1", label: "refund" },
    { id: "2", label: "invoice" },
    { id: "3", label: "payment" },
    { id: "4", label: "billing" },
    { id: "5", label: "charge" },
  ]);

  const [keywords2, setKeywords2] = useState([
    { id: "6", label: "refund" },
    { id: "7", label: "invoice" },
    { id: "8", label: "payment" },
    { id: "9", label: "billing" },
    { id: "10", label: "charge" },
  ]);

  const removeKeyword = (id: string, setFn: React.Dispatch<React.SetStateAction<{ id: string; label: string }[]>>, list: { id: string; label: string }[]) => {
    setFn(list.filter((k) => k.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3
          className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase"
          style={{ fontSize: 18, fontWeight: 500 }}
        >
          Ticket Triage Rules
        </h3>
        <p className="font-['Inter',sans-serif] text-[#9ca3af] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
          Configure how the agent categorizes and routes incoming tickets.
        </p>
      </div>

      {/* Rule Name + Route */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <div className="mb-4">
          <label
            className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase block mb-2"
            style={{ fontWeight: 500 }}
          >
            Rule Name
          </label>
          <input
            type="text"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[#3b82f6] transition-colors"
            style={{ fontWeight: 400 }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase block mb-2"
              style={{ fontWeight: 500 }}
            >
              Route Tickets Via
            </label>
            <div className="relative">
              <select
                value={routeVia}
                onChange={(e) => setRouteVia(e.target.value)}
                className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-[#3b82f6] transition-colors"
                style={{ fontWeight: 400 }}
              >
                <option value="bendesk">Bendesk</option>
                <option value="zendesk">Zendesk</option>
                <option value="slack">Slack</option>
                <option value="email">Email</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
            </div>
          </div>
          <div>
            <label
              className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase block mb-2"
              style={{ fontWeight: 500 }}
            >
              Confidence Threshold
            </label>
            <div className="relative">
              <select
                value={confidence}
                onChange={(e) => setConfidence(e.target.value)}
                className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-[#3b82f6] transition-colors"
                style={{ fontWeight: 400 }}
              >
                <option value="low">Low(30%+)</option>
                <option value="medium">Medium(50%+)</option>
                <option value="high">High(80%+)</option>
                <option value="very-high">Very High(95%+)</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Agent Autonomy Level */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
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
                      ? "border-[#3b82f6]"
                      : "border-[#4b5563] group-hover:border-[#6b7280]"
                  }`}
                >
                  {autonomyLevel === option.value && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                  )}
                </div>
              </div>
              <div
                onClick={() => setAutonomyLevel(option.value)}
                className="flex-1"
              >
                <p className="font-['Inter',sans-serif] text-white text-[14px]" style={{ fontWeight: 500 }}>
                  {option.label}
                </p>
                <p className="font-['Inter',sans-serif] text-[#6b7280] text-[13px]" style={{ fontWeight: 400 }}>
                  {option.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Match Keywords 1 */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Match Keywords and Intents
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((kw) => (
            <span
              key={kw.id}
              className="flex items-center gap-1.5 bg-[#111827] border border-[#374151] rounded-lg px-3 py-1.5 text-[#d1d5db] font-['Inter',sans-serif] text-[13px]"
              style={{ fontWeight: 400 }}
            >
              {kw.label}
              <button
                onClick={() => removeKeyword(kw.id, setKeywords, keywords)}
                className="text-[#6b7280] hover:text-white transition-colors"
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#374151] text-[#6b7280] hover:text-white hover:border-[#4b5563] transition-colors">
            <Plus size={14} />
          </button>
        </div>

        <p className="font-['Inter',sans-serif] text-[#6b7280] text-[13px]" style={{ fontWeight: 400, lineHeight: "18px" }}>
          Agent uses semantic understanding beyond exact matches.
          <br />
          Keywords help focus the classification model on relevant ticket content.
        </p>
      </div>

      {/* Match Keywords 2 */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Match Keywords and Intents
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">
          {keywords2.map((kw) => (
            <span
              key={kw.id}
              className="flex items-center gap-1.5 bg-[#111827] border border-[#374151] rounded-lg px-3 py-1.5 text-[#d1d5db] font-['Inter',sans-serif] text-[13px]"
              style={{ fontWeight: 400 }}
            >
              {kw.label}
              <button
                onClick={() => removeKeyword(kw.id, setKeywords2, keywords2)}
                className="text-[#6b7280] hover:text-white transition-colors"
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <button className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#374151] text-[#6b7280] hover:text-white hover:border-[#4b5563] transition-colors">
            <Plus size={14} />
          </button>
        </div>

        <p className="font-['Inter',sans-serif] text-[#6b7280] text-[13px]" style={{ fontWeight: 400, lineHeight: "18px" }}>
          Agent uses semantic understanding beyond exact matches.
          <br />
          Keywords help focus the classification model on relevant ticket content.
        </p>
      </div>
    </div>
  );
}
