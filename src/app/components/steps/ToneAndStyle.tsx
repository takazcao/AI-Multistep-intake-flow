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
    if (empathy < 33) return "var(--color-intake-error)";
    if (empathy < 66) return "var(--color-intake-warning)";
    return "var(--color-intake-success)";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase font-medium"
            style={{ fontSize: 18 }}
          >
            Brand Voice Configuration
          </h3>
          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Fine-tune how your AI represents your brand in conversation.
          </p>
        </div>
        <button className="px-4 py-2 border border-[var(--color-intake-border)] text-[var(--color-intake-text-muted)] rounded-lg font-['Inter',sans-serif] text-[13px] hover:text-white hover:border-[var(--color-intake-border-hover)] transition-colors font-medium">
          Reset to Default
        </button>
      </div>

      {/* Formality + Response Length */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4
              className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase font-medium"
            >
              Formality Level
            </h4>
            <span
              className="px-2 py-0.5 rounded text-[12px] font-['Inter',sans-serif] bg-[var(--color-intake-accent)]/20 text-[var(--color-intake-accent)] border border-[var(--color-intake-accent)]/30 font-medium"
            >
              {getFormalityLabel()}
            </span>
          </div>

          <div className="mb-3">
            <div className="flex justify-between mb-2">
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Casual</span>
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Balanced</span>
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Formal</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={formality}
                onChange={(e) => setFormality(Number(e.target.value))}
                className="w-full accent-[var(--color-intake-accent)] h-2 bg-[var(--color-intake-border)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[var(--color-intake-accent)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>
          </div>

          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[12px] mt-4">
            Determines how professional or relaxed the AI's language is.
          </p>
        </div>

        <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h4
              className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase font-medium"
            >
              Response Length
            </h4>
            <span
              className="px-2 py-0.5 rounded text-[12px] font-['Inter',sans-serif] bg-[var(--color-intake-success)]/20 text-[var(--color-intake-success)] border border-[var(--color-intake-success)]/30 font-medium"
            >
              {getResponseLengthLabel()}
            </span>
          </div>

          <div className="mb-3">
            <div className="flex justify-between mb-2">
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Concise</span>
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Balanced</span>
              <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Detailed</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={responseLength}
                onChange={(e) => setResponseLength(Number(e.target.value))}
                className="w-full accent-[var(--color-intake-accent)] h-2 bg-[var(--color-intake-border)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[var(--color-intake-accent)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>
          </div>

          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[12px] mt-4">
            Adjusts the verbosity of the AI's answers.
          </p>
        </div>
      </div>

      {/* Empathy Level */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase font-medium"
          >
            Empathy Level
          </h4>
          <span
            className="px-2 py-0.5 rounded text-[12px] font-['Inter',sans-serif] font-medium"
            style={{
              color: getEmpathyColor(),
              backgroundColor: `color-mix(in srgb, ${getEmpathyColor()} 20%, transparent)`,
              border: `1px solid color-mix(in srgb, ${getEmpathyColor()} 30%, transparent)`,
            }}
          >
            {getEmpathyLabel()}
          </span>
        </div>

        <div className="mb-3">
          <div className="flex justify-between mb-2">
            <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Analytical</span>
            <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Neutral</span>
            <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-dim)] text-[11px] tracking-[0.6px] uppercase font-medium">Empathetic</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={empathy}
            onChange={(e) => setEmpathy(Number(e.target.value))}
            className="w-full accent-[var(--color-intake-accent)] h-2 bg-[var(--color-intake-border)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[var(--color-intake-accent)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
          />
        </div>

        <div className="mt-4 bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-3 flex items-start gap-2">
          <Lightbulb size={14} className="text-[var(--color-intake-warning)] mt-0.5 shrink-0" />
          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] text-[13px]">
            High empathy ensures the AI acknowledges user frustration and uses apologetic language when appropriate.
          </p>
        </div>
      </div>

      {/* Personality Traits */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
        >
          Personality Traits
        </h4>

        <div className="flex flex-wrap gap-3">
          {traits.map((trait) => (
            <button
              key={trait.id}
              onClick={() => toggleTrait(trait.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-['Inter',sans-serif] text-[13px] transition-all font-medium ${
                trait.active
                  ? "bg-[var(--color-intake-accent)]/20 text-[var(--color-intake-accent)] border border-[var(--color-intake-accent)]/40"
                  : "bg-[var(--color-intake-panel)] text-[var(--color-intake-text-muted)] border border-[var(--color-intake-border)] hover:border-[var(--color-intake-border-hover)]"
              }`}
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
