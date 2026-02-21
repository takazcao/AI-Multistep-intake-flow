import { useState } from "react";
import { X, ChevronDown, Check, Sparkles, Bold, Italic, Code, Link } from "lucide-react";
import { SectionCard } from "../shared/SectionCard";
import { FormField } from "../shared/FormField";

export function ResponseTemplates() {
  const [templateName, setTemplateName] = useState("Subscription Inquiry Response");
  const [category, setCategory] = useState("billing");
  const [requireConfidence, setRequireConfidence] = useState(true);
  const [responseBody, setResponseBody] = useState(
    `Hello {{user.first_name}},\nI see you're asking about your subscription status. According to our records, your current plan is {{user.plan_name}} and it is set to renew on {{user.renewal_date}}.\nYou can manage your subscription directly here: {{link.billing_portal}}\n\nIs there anything else I can help you with regarding your account?`
  );

  const [conditions, setConditions] = useState([
    { id: "1", label: "intent: subscription_status" },
    { id: "2", label: 'keyword: "renew"' },
  ]);

  const removeCondition = (id: string) => {
    setConditions(conditions.filter((c) => c.id !== id));
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
            Create Template
          </h3>
          <p className="font-['Inter',sans-serif] text-intake-text-muted mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Define a structured response pattern for specific user intents.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-intake-border text-intake-text-muted rounded-lg font-['Inter',sans-serif] text-[13px] hover:text-white hover:border-intake-border-hover transition-colors" style={{ fontWeight: 500 }}>
            Reset
          </button>
          <button className="px-4 py-2 bg-intake-accent text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-intake-accent-hover transition-colors" style={{ fontWeight: 500 }}>
            Save Template
          </button>
        </div>
      </div>

      {/* Template Name + Category */}
      <SectionCard>
        <div className="grid grid-cols-2 gap-6">
          <FormField id="template-name" label="Template Name">
            <input
              id="template-name"
              type="text"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none focus:border-intake-accent transition-colors"
              style={{ fontWeight: 400 }}
            />
          </FormField>
          
          <FormField id="template-category" label="Category">
            <div className="relative">
              <select
                id="template-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 text-white font-['Inter',sans-serif] text-[14px] outline-none appearance-none focus:border-intake-accent transition-colors"
                style={{ fontWeight: 400 }}
              >
                <option value="billing">Billing & Subscriptions</option>
                <option value="technical">Technical Support</option>
                <option value="general">General Inquiry</option>
                <option value="onboarding">Onboarding</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-intake-text-dim pointer-events-none" />
            </div>
          </FormField>
        </div>
      </SectionCard>

      {/* Trigger Conditions */}
      <SectionCard title="Trigger Conditions">
        <p className="font-['Inter',sans-serif] text-intake-text-dim text-[13px] mb-4 -mt-3" style={{ fontWeight: 400 }}>
          Select intents or keywords that should trigger this response template.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {conditions.map((cond) => (
            <span
              key={cond.id}
              className="flex items-center gap-1.5 bg-intake-panel border border-intake-border rounded-lg px-3 py-1.5 text-intake-text-secondary font-['Inter',sans-serif] text-[13px]"
              style={{ fontWeight: 400 }}
            >
              {cond.label}
              <button
                onClick={() => removeCondition(cond.id)}
                className="text-intake-text-dim hover:text-white transition-colors"
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <button className="flex items-center gap-1 text-intake-text-dim hover:text-white font-['Inter',sans-serif] text-[13px] transition-colors px-2" style={{ fontWeight: 500 }}>
            + Add Condition
          </button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <div
            onClick={() => setRequireConfidence(!requireConfidence)}
            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
              requireConfidence ? "bg-intake-accent border-intake-accent" : "border-intake-border-hover bg-transparent"
            }`}
          >
            {requireConfidence && <Check size={10} className="text-white" />}
          </div>
          <span className="font-['Inter',sans-serif] text-intake-text-secondary text-[14px]" style={{ fontWeight: 400 }}>
            Require confidence &gt; 80%
          </span>
        </label>
      </SectionCard>

      {/* Response Body */}
      <SectionCard>
        <div className="flex items-center justify-between mb-3">
          <h4
            className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase"
            style={{ fontWeight: 500 }}
          >
            Response Body
          </h4>
          <button className="flex items-center gap-1.5 text-intake-success font-['Inter',sans-serif] text-[13px] hover:text-[#34d399] transition-colors" style={{ fontWeight: 500 }}>
            <Sparkles size={14} />
            Generate with AI
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1 bg-intake-panel border border-intake-border rounded-t-lg px-3 py-2 border-b-0">
          <button className="p-1.5 text-intake-text-muted hover:text-white rounded transition-colors">
            <Bold size={14} />
          </button>
          <button className="p-1.5 text-intake-text-muted hover:text-white rounded transition-colors">
            <Italic size={14} />
          </button>
          <button className="p-1.5 text-intake-text-muted hover:text-white rounded transition-colors">
            <Code size={14} />
          </button>
          <button className="p-1.5 text-intake-text-muted hover:text-white rounded transition-colors">
            <Link size={14} />
          </button>
          <div className="w-px h-4 bg-intake-border mx-1" />
          <button className="flex items-center gap-1 text-intake-accent font-['Inter',sans-serif] text-[12px] px-2 py-1 rounded hover:bg-[#1e3a5f] transition-colors" style={{ fontWeight: 500 }}>
            {"{{}"} Insert Variable
          </button>
        </div>

        {/* Text Area */}
        <textarea
          value={responseBody}
          onChange={(e) => setResponseBody(e.target.value)}
          rows={8}
          className="w-full bg-intake-panel border border-intake-border rounded-b-lg px-4 py-3 text-intake-text-secondary font-mono text-[13px] outline-none focus:border-intake-accent transition-colors resize-none"
          style={{ fontWeight: 400, lineHeight: "20px" }}
        />

        {/* Info */}
        <div className="mt-3 bg-intake-panel border border-intake-border rounded-lg px-4 py-2.5 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-intake-accent flex items-center justify-center shrink-0">
            <span className="text-white text-[10px]" style={{ fontWeight: 700 }}>i</span>
          </div>
          <p className="font-['Inter',sans-serif] text-intake-text-muted text-[12px]" style={{ fontWeight: 400 }}>
            Variables like <code className="text-intake-accent bg-[#1e3a5f] px-1 rounded">{"{{user.first_name}}"}</code> will be dynamically replaced with real data during the conversation.
          </p>
        </div>
      </SectionCard>
    </div>
  );
}

