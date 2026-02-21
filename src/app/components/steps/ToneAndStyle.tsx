import { useState } from "react";
import { MessageSquare, Lightbulb } from "lucide-react";

interface TraitOption {
  id: string;
  label: string;
  emoji: string;
  active: boolean;
}

export function ToneAndStyle() {
  const [formality, setFormality] = useState(65);
  const [responseLength, setResponseLength] = useState(50);
  const [empathy, setEmpathy] = useState(75);

  const [traits, setTraits] = useState<TraitOption[]>([
    { id: "professional", label: "Professional", emoji: "\u{1F454}", active: true },
    { id: "friendly", label: "Friendly", emoji: "\u{1F44B}", active: true },
    { id: "helpful", label: "Helpful", emoji: "\u{2705}", active: true },
    { id: "direct", label: "Direct", emoji: "\u{1F3AF}", active: false },
    { id: "enthusiastic", label: "Enthusiastic", emoji: "\u{1F31F}", active: false },
    { id: "technical", label: "Technical", emoji: "\u{1F527}", active: false },
  ]);

  const toggleTrait = (id: string) => {
    setTraits(traits.map((t) => (t.id === id ? { ...t, active: !t.active } : t)));
  };

  const getFormalityLabel = () => {
    if (formality < 33) return "Casual";
    if (formality < 66) return "Professional";
    return "Formal";
  };

  const getResponseLengthLabel = () => {
    if (responseLength < 33) return "Concise";
    if (responseLength < 66) return "Balanced";
    return "Detailed";
  };

  const getEmpathyLabel = () => {
    if (empathy < 33) return "Low";
    if (empathy < 66) return "Medium";
    return "High";
  };

  const getEmpathyColor = () => {
    if (empathy < 33) return "#ef4444";
    if (empathy < 66) return "#f59e0b";
    return "#10b981";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            Brand Voice Configuration
          </h3>
          <p className="font-['Inter',sans-serif] text-[#9ca3af] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Fine-tune how your AI represents your brand in conversation.
          </p>
        </div>
        <button className="px-4 py-2 border border-[#374151] text-[#9ca3af] rounded-lg font-['Inter',sans-serif] text-[13px] hover:text-white hover:border-[#4b5563] transition-colors" style={{ fontWeight: 500 }}>
          Reset to Default
        </button>
      </div>

      {/* Formality + Response Length */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4
              className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase"
              style={{ fontWeight: 500 }}
            >
              Formality Level
            </h4>
            <span
              className="px-2 py-0.5 rounded text-[12px] font-['Inter',sans-serif] bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/30"
              style={{ fontWeight: 500 }}
            >
              {getFormalityLabel()}
            </span>
          </div>

          <div className="mb-3">
            <div className="flex justify-between mb-2">
              <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Casual</span>
              <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Balanced</span>
              <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Formal</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={formality}
                onChange={(e) => setFormality(Number(e.target.value))}
                className="w-full accent-[#3b82f6] h-2 bg-[#374151] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#3b82f6] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>
          </div>

          <p className="font-['Inter',sans-serif] text-[#6b7280] text-[12px] mt-4" style={{ fontWeight: 400, lineHeight: "16px" }}>
            Determines how professional or relaxed the AI's language is.
          </p>
        </div>

        <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4
              className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase"
              style={{ fontWeight: 500 }}
            >
              Response Length
            </h4>
            <span
              className="px-2 py-0.5 rounded text-[12px] font-['Inter',sans-serif] bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30"
              style={{ fontWeight: 500 }}
            >
              {getResponseLengthLabel()}
            </span>
          </div>

          <div className="mb-3">
            <div className="flex justify-between mb-2">
              <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Concise</span>
              <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Balanced</span>
              <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Detailed</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={responseLength}
                onChange={(e) => setResponseLength(Number(e.target.value))}
                className="w-full accent-[#3b82f6] h-2 bg-[#374151] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#3b82f6] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>
          </div>

          <p className="font-['Inter',sans-serif] text-[#6b7280] text-[12px] mt-4" style={{ fontWeight: 400, lineHeight: "16px" }}>
            Adjusts the verbosity of the AI's answers.
          </p>
        </div>
      </div>

      {/* Empathy Level */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase"
            style={{ fontWeight: 500 }}
          >
            Empathy Level
          </h4>
          <span
            className="px-2 py-0.5 rounded text-[12px] font-['Inter',sans-serif]"
            style={{
              fontWeight: 500,
              color: getEmpathyColor(),
              backgroundColor: `${getEmpathyColor()}20`,
              border: `1px solid ${getEmpathyColor()}30`,
            }}
          >
            {getEmpathyLabel()}
          </span>
        </div>

        <div className="mb-3">
          <div className="flex justify-between mb-2">
            <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Analytical</span>
            <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Neutral</span>
            <span className="font-['JetBrains_Mono',monospace] text-[#6b7280] text-[11px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>Empathetic</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={empathy}
            onChange={(e) => setEmpathy(Number(e.target.value))}
            className="w-full accent-[#3b82f6] h-2 bg-[#374151] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#3b82f6] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
          />
        </div>

        <div className="mt-4 bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 flex items-start gap-2">
          <Lightbulb size={14} className="text-[#f59e0b] mt-0.5 shrink-0" />
          <p className="font-['Inter',sans-serif] text-[#9ca3af] text-[13px]" style={{ fontWeight: 400, lineHeight: "18px" }}>
            High empathy ensures the AI acknowledges user frustration and uses apologetic language when appropriate.
          </p>
        </div>
      </div>

      {/* Personality Traits */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Personality Traits
        </h4>

        <div className="flex flex-wrap gap-3">
          {traits.map((trait) => (
            <button
              key={trait.id}
              onClick={() => toggleTrait(trait.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-['Inter',sans-serif] text-[13px] transition-all ${
                trait.active
                  ? "bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/40"
                  : "bg-[#111827] text-[#9ca3af] border border-[#374151] hover:border-[#4b5563]"
              }`}
              style={{ fontWeight: 500 }}
            >
              <span>{trait.emoji}</span>
              {trait.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
