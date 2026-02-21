import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-['JetBrains_Mono',monospace] text-intake-text-muted text-[12px] tracking-[0.6px] uppercase block mb-2"
        style={{ fontWeight: 500 }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
