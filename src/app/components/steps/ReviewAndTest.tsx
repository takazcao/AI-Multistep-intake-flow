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
    setTestCases((prev) => prev.map((tc) => ({ ...tc, status: "pending" as const, confidence: undefined })));
    setTimeout(() => {
      setTestCases((prev) =>
        prev.map((tc) => ({ ...tc, status: "passed" as const, confidence: 88 }))
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
            className="font-['JetBrains_Mono',monospace] text-white tracking-[0.45px] uppercase font-medium"
            style={{ fontSize: 18 }}
          >
            Review & Test
          </h3>
          <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Validate your AI agent configuration with test scenarios.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-[var(--color-intake-border)] text-[var(--color-intake-text-muted)] rounded-lg font-['Inter',sans-serif] text-[13px] hover:text-white hover:border-[var(--color-intake-border-hover)] transition-colors font-medium">
            <RotateCcw size={14} />
            Reset All
          </button>
          <button
            onClick={runTests}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-intake-accent)] text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-[var(--color-intake-accent-hover)] transition-colors disabled:opacity-50 font-medium"
          >
            <Play size={14} />
            {isRunning ? "Running..." : "Run All Tests"}
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 size={20} className="text-[var(--color-intake-success)]" />
            <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-success)] text-[24px] font-semibold">
              {passedCount}
            </span>
          </div>
          <p className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase font-medium">
            Tests Passed
          </p>
        </div>
        <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <XCircle size={20} className="text-[var(--color-intake-error)]" />
            <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-error)] text-[24px] font-semibold">
              {failedCount}
            </span>
          </div>
          <p className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase font-medium">
            Tests Failed
          </p>
        </div>
        <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle size={20} className="text-[var(--color-intake-warning)]" />
            <span className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-warning)] text-[24px] font-semibold">
              {pendingCount}
            </span>
          </div>
          <p className="font-['JetBrains_Mono',monospace] text-[var(--color-intake-text-muted)] text-[12px] tracking-[0.6px] uppercase font-medium">
            Pending
          </p>
        </div>
      </div>

      {/* Test Cases */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
        >
          Test Scenarios
        </h4>

        <div className="space-y-3">
          {testCases.map((tc) => (
            <div
              key={tc.id}
              className={`bg-[var(--color-intake-panel)] border rounded-lg px-5 py-4 ${
                tc.status === "passed"
                  ? "border-[var(--color-intake-success)]/30"
                  : tc.status === "failed"
                  ? "border-[var(--color-intake-error)]/30"
                  : "border-[var(--color-intake-border)]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {tc.status === "passed" ? (
                    <div className="w-6 h-6 rounded-full bg-[var(--color-intake-success)]/20 flex items-center justify-center">
                      <Check size={12} className="text-[var(--color-intake-success)]" />
                    </div>
                  ) : tc.status === "failed" ? (
                    <div className="w-6 h-6 rounded-full bg-[var(--color-intake-error)]/20 flex items-center justify-center">
                      <X size={12} className="text-[var(--color-intake-error)]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[var(--color-intake-warning)]/20 flex items-center justify-center">
                      <AlertTriangle size={10} className="text-[var(--color-intake-warning)]" />
                    </div>
                  )}
                  <span className="font-['Inter',sans-serif] text-white text-[14px] font-medium">
                    {tc.name}
                  </span>
                </div>
                {tc.confidence !== undefined && (
                  <span
                    className={`font-['JetBrains_Mono',monospace] text-[12px] px-2 py-0.5 rounded font-medium ${
                      tc.confidence >= 80
                        ? "bg-[var(--color-intake-success)]/20 text-[var(--color-intake-success)]"
                        : tc.confidence >= 50
                        ? "bg-[var(--color-intake-warning)]/20 text-[var(--color-intake-warning)]"
                        : "bg-[var(--color-intake-error)]/20 text-[var(--color-intake-error)]"
                    }`}
                  >
                    {tc.confidence}% confidence
                  </span>
                )}
              </div>
              <p className="font-['Inter',sans-serif] text-[var(--color-intake-text-muted)] text-[13px] ml-9">
                "{tc.input}"
              </p>
              <div className="flex items-center gap-2 ml-9 mt-1.5">
                <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[12px]">
                  Expected:
                </span>
                <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-secondary)] text-[12px] font-medium">
                  {tc.expectedCategory}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration Summary */}
      <div className="bg-[var(--color-intake-card)] border border-[var(--color-intake-border)] rounded-xl p-6">
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4 font-medium"
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
            <div key={item.label} className="flex items-center justify-between bg-[var(--color-intake-panel)] border border-[var(--color-intake-border)] rounded-lg px-4 py-3">
              <span className="font-['Inter',sans-serif] text-[var(--color-intake-text-dim)] text-[13px]">
                {item.label}
              </span>
              <span className="font-['Inter',sans-serif] text-white text-[13px] font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
