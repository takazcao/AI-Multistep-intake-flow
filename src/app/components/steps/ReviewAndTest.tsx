import { useState } from "react";
import { Check, X, Play, RotateCcw, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

interface TestCase {
  id: string;
  name: string;
  input: string;
  expectedCategory: string;
  status: "passed" | "failed" | "pending";
  confidence?: number;
}

export function ReviewAndTest() {
  const [testCases, setTestCases] = useState<TestCase[]>([
    {
      id: "1",
      name: "Billing Inquiry",
      input: "I want to cancel my subscription and get a refund",
      expectedCategory: "Billing & Subscriptions",
      status: "passed",
      confidence: 94,
    },
    {
      id: "2",
      name: "Technical Issue",
      input: "The dashboard is not loading properly on Chrome",
      expectedCategory: "Technical Support",
      status: "passed",
      confidence: 87,
    },
    {
      id: "3",
      name: "Account Recovery",
      input: "I forgot my password and can't access my account",
      expectedCategory: "Account Management",
      status: "passed",
      confidence: 91,
    },
    {
      id: "4",
      name: "Feature Request",
      input: "Can you add dark mode to the mobile app?",
      expectedCategory: "Product Feedback",
      status: "failed",
      confidence: 42,
    },
    {
      id: "5",
      name: "Escalation Test",
      input: "I've been waiting 3 days and nobody has responded!",
      expectedCategory: "Escalation",
      status: "pending",
    },
  ]);

  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    // Simulate running the pending test
    setTimeout(() => {
      setTestCases((prev) =>
        prev.map((tc) =>
          tc.status === "pending" ? { ...tc, status: "passed" as const, confidence: 88 } : tc
        )
      );
      setIsRunning(false);
    }, 2000);
  };

  const passedCount = testCases.filter((t) => t.status === "passed").length;
  const failedCount = testCases.filter((t) => t.status === "failed").length;
  const pendingCount = testCases.filter((t) => t.status === "pending").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            Review & Test
          </h3>
          <p className="font-['Inter',sans-serif] text-[#9ca3af] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Validate your AI agent configuration with test scenarios.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#374151] text-[#9ca3af] rounded-lg font-['Inter',sans-serif] text-[13px] hover:text-white hover:border-[#4b5563] transition-colors" style={{ fontWeight: 500 }}>
            <RotateCcw size={14} />
            Reset All
          </button>
          <button
            onClick={runTests}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6] text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-[#2563eb] transition-colors disabled:opacity-50"
            style={{ fontWeight: 500 }}
          >
            <Play size={14} />
            {isRunning ? "Running..." : "Run All Tests"}
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 size={20} className="text-[#10b981]" />
            <span className="font-['JetBrains_Mono',monospace] text-[#10b981] text-[24px]" style={{ fontWeight: 600 }}>
              {passedCount}
            </span>
          </div>
          <p className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>
            Tests Passed
          </p>
        </div>
        <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <XCircle size={20} className="text-[#ef4444]" />
            <span className="font-['JetBrains_Mono',monospace] text-[#ef4444] text-[24px]" style={{ fontWeight: 600 }}>
              {failedCount}
            </span>
          </div>
          <p className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>
            Tests Failed
          </p>
        </div>
        <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle size={20} className="text-[#f59e0b]" />
            <span className="font-['JetBrains_Mono',monospace] text-[#f59e0b] text-[24px]" style={{ fontWeight: 600 }}>
              {pendingCount}
            </span>
          </div>
          <p className="font-['JetBrains_Mono',monospace] text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase" style={{ fontWeight: 500 }}>
            Pending
          </p>
        </div>
      </div>

      {/* Test Cases */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Test Scenarios
        </h4>

        <div className="space-y-3">
          {testCases.map((tc) => (
            <div
              key={tc.id}
              className={`bg-[#111827] border rounded-lg px-5 py-4 ${
                tc.status === "passed"
                  ? "border-[#10b981]/30"
                  : tc.status === "failed"
                  ? "border-[#ef4444]/30"
                  : "border-[#374151]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {tc.status === "passed" ? (
                    <div className="w-6 h-6 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                      <Check size={12} className="text-[#10b981]" />
                    </div>
                  ) : tc.status === "failed" ? (
                    <div className="w-6 h-6 rounded-full bg-[#ef4444]/20 flex items-center justify-center">
                      <X size={12} className="text-[#ef4444]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                      <AlertTriangle size={10} className="text-[#f59e0b]" />
                    </div>
                  )}
                  <span className="font-['Inter',sans-serif] text-white text-[14px]" style={{ fontWeight: 500 }}>
                    {tc.name}
                  </span>
                </div>
                {tc.confidence !== undefined && (
                  <span
                    className={`font-['JetBrains_Mono',monospace] text-[12px] px-2 py-0.5 rounded ${
                      tc.confidence >= 80
                        ? "bg-[#10b981]/20 text-[#10b981]"
                        : tc.confidence >= 50
                        ? "bg-[#f59e0b]/20 text-[#f59e0b]"
                        : "bg-[#ef4444]/20 text-[#ef4444]"
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    {tc.confidence}% confidence
                  </span>
                )}
              </div>
              <p className="font-['Inter',sans-serif] text-[#9ca3af] text-[13px] ml-9" style={{ fontWeight: 400 }}>
                "{tc.input}"
              </p>
              <div className="flex items-center gap-2 ml-9 mt-1.5">
                <span className="font-['Inter',sans-serif] text-[#6b7280] text-[12px]" style={{ fontWeight: 400 }}>
                  Expected:
                </span>
                <span className="font-['Inter',sans-serif] text-[#d1d5db] text-[12px]" style={{ fontWeight: 500 }}>
                  {tc.expectedCategory}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration Summary */}
      <div className="bg-[#1f2937] border border-[#374151] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Configuration Summary
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Agent Type", value: "Support Specialist" },
            { label: "Knowledge Sources", value: "4 connected" },
            { label: "Response Templates", value: "3 active" },
            { label: "Tone", value: "Professional, Friendly" },
            { label: "Integrations", value: "Slack, Zendesk" },
            { label: "Autonomy Level", value: "Complex Tasks" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between bg-[#111827] border border-[#374151] rounded-lg px-4 py-3">
              <span className="font-['Inter',sans-serif] text-[#6b7280] text-[13px]" style={{ fontWeight: 400 }}>
                {item.label}
              </span>
              <span className="font-['Inter',sans-serif] text-white text-[13px]" style={{ fontWeight: 500 }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
