import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { FormField } from "../shared/FormField";
import { SectionCard } from "../shared/SectionCard";
import { Switch } from "../ui/switch";

export function GeneralSettings() {
  const [agentName, setAgentName] = useState("Support Specialist");
  const [agentRole, setAgentRole] = useState("customer-support");
  const [language, setLanguage] = useState("english");
  const [timezone, setTimezone] = useState("utc-8");
  const [greeting, setGreeting] = useState(
    "Hello! I'm your AI Support Specialist. How can I help you today?"
  );
  const [enableFallback, setEnableFallback] = useState(true);
  const [maxConversationLength, setMaxConversationLength] = useState("25");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            General Settings
          </h3>
          <p className="font-['Inter',sans-serif] text-intake-text-muted mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Configure your AI agent's core identity and behavior.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-intake-border text-intake-text-muted rounded-lg font-['Inter',sans-serif] text-[13px] hover:text-white hover:border-intake-border-hover transition-colors" style={{ fontWeight: 500 }}>
            Reset
          </button>
          <button className="px-4 py-2 bg-intake-accent text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-intake-accent-hover transition-colors" style={{ fontWeight: 500 }}>
            Save Settings
          </button>
        </div>
      </div>

      {/* Agent Identity */}
      <SectionCard>
        <div className="grid grid-cols-2 gap-6">
          <FormField id="agent-name" label="Agent Name">
            <input
              id="agent-name"
              type="text"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-intake-accent transition-colors"
              style={{ fontWeight: 400 }}
            />
          </FormField>
          
          <FormField id="agent-role" label="Agent Role">
            <div className="relative">
              <select
                id="agent-role"
                value={agentRole}
                onChange={(e) => setAgentRole(e.target.value)}
                className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-intake-accent transition-colors"
                style={{ fontWeight: 400 }}
              >
                <option value="customer-support">Customer Support</option>
                <option value="sales">Sales Assistant</option>
                <option value="technical">Technical Support</option>
                <option value="onboarding">Onboarding Specialist</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-intake-text-dim pointer-events-none" />
            </div>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <FormField id="primary-language" label="Primary Language">
            <div className="relative">
              <select
                id="primary-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-intake-accent transition-colors"
                style={{ fontWeight: 400 }}
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-intake-text-dim pointer-events-none" />
            </div>
          </FormField>
          
          <FormField id="timezone" label="Timezone">
            <div className="relative">
              <select
                id="timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-intake-accent transition-colors"
                style={{ fontWeight: 400 }}
              >
                <option value="utc-8">PST (UTC-8)</option>
                <option value="utc-5">EST (UTC-5)</option>
                <option value="utc+0">GMT (UTC+0)</option>
                <option value="utc+1">CET (UTC+1)</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-intake-text-dim pointer-events-none" />
            </div>
          </FormField>
        </div>
      </SectionCard>

      {/* Welcome Message */}
      <SectionCard>
        <FormField id="default-greeting" label="Default Greeting Message">
          <textarea
            id="default-greeting"
            value={greeting}
            onChange={(e) => setGreeting(e.target.value)}
            rows={3}
            className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-3 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-intake-accent transition-colors resize-none"
            style={{ fontWeight: 400, lineHeight: "20px" }}
          />
        </FormField>
      </SectionCard>

      {/* Behavior Settings */}
      <SectionCard title="Behavior Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label htmlFor="enable-fallback" className="font-['Inter',sans-serif] text-intake-text-secondary text-[14px] cursor-pointer" style={{ fontWeight: 400 }}>
                Enable human handoff fallback
              </label>
              <Info size={14} className="text-intake-text-dim" />
            </div>
            <Switch
              id="enable-fallback"
              checked={enableFallback}
              onCheckedChange={setEnableFallback}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="max-turns" className="font-['Inter',sans-serif] text-intake-text-secondary text-[14px]" style={{ fontWeight: 400 }}>
              Max conversation turns
            </label>
            <input
              id="max-turns"
              type="number"
              value={maxConversationLength}
              onChange={(e) => setMaxConversationLength(e.target.value)}
              className="w-20 bg-intake-panel border border-intake-border rounded-lg px-3 py-1.5 text-white font-['Inter',sans-serif] text-[14px] outline-none text-center focus:border-intake-accent transition-colors"
              style={{ fontWeight: 400 }}
            />
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

