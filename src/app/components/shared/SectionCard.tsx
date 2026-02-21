import React from "react";

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
}

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="bg-intake-card border border-intake-border rounded-xl p-6">
      {title && (
        <h4
          className="font-['JetBrains_Mono',monospace] text-white text-[14px] tracking-[0.6px] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          {title}
        </h4>
      )}
      {children}
    </div>
  );
}
