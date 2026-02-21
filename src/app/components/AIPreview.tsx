import { useState } from "react";
import { X, Send, Plus, RefreshCw, Sparkles, LayoutGrid } from "lucide-react";
import { useStepContext, SUB_STEPS } from "./StepContext";

export function AIPreview() {
  const { currentStepIndex, goToNext, chatMessages, addChatMessage } = useStepContext();
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
    <div className="flex flex-col h-full bg-[#1a1d26] border-l border-[#374151] shrink-0" style={{ width: 300 }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#374151]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
          <span
            className="font-['Inter',sans-serif] text-white text-[14px]"
            style={{ fontWeight: 500 }}
          >
            Support Specialist (Preview)
          </span>
        </div>
        <button className="text-[#9ca3af] hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {chatMessages.map((msg) => (
          <div key={msg.id}>
            {msg.time && msg.role === "user" && (
              <div className="text-center mb-2">
                <span className="font-['Inter',sans-serif] text-[#6b7280] text-[11px]" style={{ fontWeight: 500 }}>
                  {msg.time}
                </span>
              </div>
            )}
            {msg.role === "user" ? (
              <div className="flex justify-end">
                <div className="bg-[#3b82f6] text-white px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[220px]">
                  <p className="font-['Inter',sans-serif] text-[13px]" style={{ fontWeight: 400, lineHeight: "18px" }}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[10px]" style={{ fontWeight: 700 }}>AI</span>
                </div>
                <div className="bg-[#1f2937] text-[#d1d5db] px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[220px]">
                  <p className="font-['Inter',sans-serif] text-[13px]" style={{ fontWeight: 400, lineHeight: "18px" }}>
                    {msg.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center shrink-0">
              <span className="text-white text-[10px]" style={{ fontWeight: 700 }}>AI</span>
            </div>
            <div className="bg-[#1f2937] px-4 py-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#6b7280] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-[#6b7280] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-[#6b7280] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-2 flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-[#9ca3af] hover:text-white transition-colors">
          <Sparkles size={13} />
          <span className="font-['Inter',sans-serif] text-[12px]" style={{ fontWeight: 500 }}>
            How do I upgrade my plan
          </span>
        </button>
      </div>
      <div className="px-4 pb-2 flex items-center gap-3">
        <button className="flex items-center gap-1.5 text-[#9ca3af] hover:text-white transition-colors">
          <LayoutGrid size={13} />
          <span className="font-['Inter',sans-serif] text-[12px]" style={{ fontWeight: 500 }}>
            Summarize
          </span>
        </button>
      </div>

      {/* Input */}
      <div className="px-4 pb-3">
        <div className="bg-[#1f2937] border border-[#374151] rounded-xl flex items-center px-3 py-2">
          <button className="text-[#6b7280] hover:text-white transition-colors mr-2">
            <Plus size={16} />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder='Try: "Typing your text to this box"'
            className="flex-1 bg-transparent text-[#d1d5db] text-[13px] font-['Inter',sans-serif] outline-none placeholder:text-[#4b5563]"
            style={{ fontWeight: 400 }}
          />
          <button
            onClick={handleSend}
            className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors ml-2"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Next Step */}
      <div className="border-t border-[#374151] px-5 py-4">
        {nextStep ? (
          <button
            onClick={goToNext}
            className="flex items-center justify-between w-full group"
          >
            <span
              className="font-['JetBrains_Mono',monospace] text-[#9ca3af] group-hover:text-white text-[13px] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Next &gt;
            </span>
            <span
              className="font-['JetBrains_Mono',monospace] text-white text-[12px] tracking-[0.6px] uppercase"
              style={{ fontWeight: 500 }}
            >
              {nextStep.label}
            </span>
          </button>
        ) : (
          <span
            className="font-['JetBrains_Mono',monospace] text-[#10b981] text-[12px] tracking-[0.6px] uppercase block text-center"
            style={{ fontWeight: 500 }}
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