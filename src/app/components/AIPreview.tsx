import { useState, useEffect, useRef } from "react";
import { X, Send, Plus, RefreshCw, Sparkles, LayoutGrid } from "lucide-react";
import { useStepContext, SUB_STEPS } from "./StepContext";

export function AIPreview() {
  const { currentStepIndex, goToNext, chatMessages, addChatMessage } = useStepContext();
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const nextStep = currentStepIndex < SUB_STEPS.length - 1 ? SUB_STEPS[currentStepIndex + 1] : null;

  const handleSend = () => {
    if (!inputValue.trim()) return;

    addChatMessage({
      id: Date.now().toString(),
      role: "user",
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    });
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      addChatMessage({
        id: (Date.now() + 1).toString(),
        role: "ai",
        text: getAIResponse(currentStepIndex, inputValue.trim()),
        time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-[var(--color-intake-sidebar)] border-l border-[var(--color-intake-border)] shrink-0" style={{ width: 300 }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-intake-border)]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-intake-success)] animate-pulse" />
          <span
            className="font-['Inter',sans-serif] text-white text-[14px] font-medium"
          >
            Support Specialist (Preview)
          </span>
        </div>
        <button aria-label="Close preview" className="text-[var(--color-intake-text-muted)] hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {chatMessages.map((msg) => (
          <div key={msg.id}>
            {msg.time && msg.role === "user" && (
              <div className="text-center mb-2">
                <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[11px] font-medium">
                  {msg.time}
                </span>
              </div>
            )}
            {msg.role === "user" ? (
              <div className="flex justify-end">
                <div className="bg-[var(--color-intake-accent)] text-white px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[220px]">
                  <p className="font-['Inter',sans-serif] text-[13px] leading-normal">
                    {msg.text}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-intake-accent)] to-[var(--color-intake-accent)] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[10px] font-bold">AI</span>
                </div>
                <div className="bg-[var(--color-intake-card)] text-[var(--color-intake-text-secondary)] px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[220px]">
                  <p className="font-['Inter',sans-serif] text-[13px] leading-normal">
                    {msg.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-intake-accent)] to-[var(--color-intake-accent)] flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-bold">AI</span>
            </div>
            <div className="bg-[var(--color-intake-card)] px-4 py-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[var(--color-intake-text-dim)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-[var(--color-intake-text-dim)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-[var(--color-intake-text-dim)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-2 flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-[var(--color-intake-text-muted)] hover:text-white transition-colors">
          <Sparkles size={13} />
          <span className="font-['Inter',sans-serif] text-[12px] font-medium">
            How do I upgrade my plan
          </span>
        </button>
      </div>
      <div className="px-4 pb-2 flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-[var(--color-intake-text-muted)] hover:text-white transition-colors">
          <LayoutGrid size={13} />
          <span className="font-['Inter',sans-serif] text-[12px] font-medium">
            Summarize
          </span>
        </button>
      </div>

      {/* Input */}
      <div className="px-4 pb-3">
        <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl flex items-center px-3 py-2">
          <button aria-label="Attach file" className="text-[var(--color-intake-text-dim)] hover:text-white transition-colors mr-2">
            <Plus size={16} />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder='Try: "Typing your text to this box"'
            className="flex-1 bg-transparent text-[var(--color-intake-text-secondary)] text-[13px] font-['Inter',sans-serif] outline-none placeholder:text-[var(--color-intake-border-hover)]"
          />
          <button
            onClick={handleSend}
            disabled={isTyping}
            aria-label="Send message"
            className="text-[var(--color-intake-accent)] hover:text-[var(--color-intake-accent)] transition-colors ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Next Step */}
      <div className="border-t border-[var(--color-intake-border)] px-5 py-4">
        {nextStep ? (
          <button
            onClick={goToNext}
            className="flex items-center justify-between w-full group"
          >
            <span
              className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] group-hover:text-white text-[13px] transition-colors font-medium"
            >
              Next &gt;
            </span>
            <span
              className="font-['JetBrains_Mono',monospace] text-white text-[12px] tracking-[0.6px] uppercase font-medium"
            >
              {nextStep.label}
            </span>
          </button>
        ) : (
          <span
            className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-success)] text-[12px] tracking-[0.6px] uppercase block text-center font-medium"
          >
            Setup Complete
          </span>
        )}
      </div>
    </div>
  );
}

function getAIResponse(stepIndex: number, userInput: string): string {
  const responses: Record<number, string> = {
    0: "I've noted your agent preferences. The Support Specialist profile is ideal for handling customer inquiries. You can customize the agent name and description to match your brand.",
    1: "Great question! I can help you connect your knowledge base. Currently, I can pull from your Help Center articles, API documentation, and FAQ pages to provide accurate responses.",
    2: "I see you're asking about your subscription status. According to our records, your current plan is Pro Plan and it is set to renew on Oct 24, 2023. Is there anything else I can help you with regarding your account?",
    3: "I understand your frustration. Let me look into your renewal date and billing cycle. I'll make sure to address your concerns with the empathy settings we've configured.",
    4: "The integration with Slack and Zendesk is set up. I can now receive tickets from both channels and route them based on the priority rules you've defined.",
    5: "Based on the triage rules, this billing inquiry will be routed to Tier 1 support via Bendesk with medium confidence threshold. The keywords match our billing category.",
    6: "All test scenarios have passed! The agent correctly handles billing inquiries, subscription questions, and escalation cases. Ready for deployment when you are.",
    7: "Deployment checklist is complete. The agent will be available across all configured channels. I recommend a gradual rollout starting with 10% of incoming tickets.",
  };
  return responses[stepIndex] || "I understand. Let me help you with that configuration. Could you provide more details?";
}
