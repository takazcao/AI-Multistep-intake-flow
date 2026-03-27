import { useState } from "react";
import { Check, ExternalLink, AlertCircle, Zap } from "lucide-react";
import { Switch } from "../ui/switch";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  connected: boolean;
  color: string;
}

export function IntegrationSettings() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    { id: "slack", name: "Slack", description: "Receive and respond to messages in Slack channels", icon: "#", connected: true, color: "#E01E5A" },
    { id: "zendesk", name: "Zendesk", description: "Manage support tickets from Zendesk", icon: "Z", connected: true, color: "#03363D" },
    { id: "intercom", name: "Intercom", description: "Chat with customers via Intercom Messenger", icon: "I", connected: false, color: "#286EFA" },
    { id: "freshdesk", name: "Freshdesk", description: "Process tickets from Freshdesk helpdesk", icon: "F", connected: false, color: "#2BB673" },
  ]);

  const [webhookUrl, setWebhookUrl] = useState("https://api.yourcompany.com/webhooks/ai-agent");
  const [apiKey, setApiKey] = useState("\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
  const [notifyOnError, setNotifyOnError] = useState(true);
  const [retryFailed, setRetryFailed] = useState(true);

  const toggleConnection = (id: string) => {
    setIntegrations(
      integrations.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i))
    );
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
            Integration Settings
          </h3>
          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Connect external services and configure communication channels.
          </p>
        </div>
        <button className="px-4 py-2 bg-[var(--color-intake-accent)] text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-[var(--color-intake-accent-hover)] transition-colors font-medium">
          Save Configuration
        </button>
      </div>

      {/* Channel Integrations */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
        >
          Channel Integrations
        </h4>

        <div className="space-y-3">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex items-center justify-between bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-5 py-4 hover:border-[var(--color-intake-border-hover)] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-[16px]"
                  style={{ backgroundColor: integration.color, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}
                >
                  {integration.icon}
                </div>
                <div>
                  <p className="font-['Inter',sans-serif] text-white text-[14px] font-medium">
                    {integration.name}
                  </p>
                  <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[12px]">
                    {integration.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {integration.connected && (
                  <span className="flex items-center gap-1">
                    <Check size={12} className="text-[var(--color-intake-success)]" />
                    <span className="font-['Inter',sans-serif] text-[var(--color-intake-success)] text-[12px] font-medium">
                      Connected
                    </span>
                  </span>
                )}
                <button
                  onClick={() => toggleConnection(integration.id)}
                  className={`px-3 py-1.5 rounded-lg font-['Inter',sans-serif] text-[12px] transition-colors font-medium ${
                    integration.connected
                      ? "bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] text-[var(--color-intake-text-muted)] hover:text-white"
                      : "bg-[var(--color-intake-accent)] text-white hover:bg-[var(--color-intake-accent-hover)]"
                  }`}
                >
                  {integration.connected ? "Disconnect" : "Connect"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Webhook Configuration */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={16} className="text-[var(--color-intake-warning)]" />
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase font-medium"
          >
            Webhook Configuration
          </h4>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="webhook-url"
              className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase block mb-2 font-medium"
            >
              Webhook URL
            </label>
            <div className="flex gap-2">
              <input
                id="webhook-url"
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="flex-1 bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[var(--color-intake-accent)] transition-colors"
              />
              <button aria-label="Open webhook URL" className="px-3 py-2 bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg text-[var(--color-intake-text-muted)] hover:text-white transition-colors">
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="api-key"
              className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase block mb-2 font-medium"
            >
              API Key
            </label>
            <input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-[var(--color-intake-accent)] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Error Handling */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle size={16} className="text-[var(--color-intake-error)]" />
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase font-medium"
          >
            Error Handling
          </h4>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-secondary)] text-[14px]">
              Notify on integration errors
            </span>
            <Switch
              checked={notifyOnError}
              onCheckedChange={setNotifyOnError}
              aria-label="Notify on integration errors"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-secondary)] text-[14px]">
              Auto-retry failed messages
            </span>
            <Switch
              checked={retryFailed}
              onCheckedChange={setRetryFailed}
              aria-label="Auto-retry failed messages"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
