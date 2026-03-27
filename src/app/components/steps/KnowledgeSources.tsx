import { useState } from "react";
import { Upload, FileText, Globe, Database, Check, Plus, Trash2, ExternalLink } from "lucide-react";
import { SectionCard } from "../shared/SectionCard";

interface Source {
  id: string;
  name: string;
  type: "document" | "url" | "api";
  status: "connected" | "pending" | "error";
  lastSync?: string;
}

export function KnowledgeSources() {
  const [sources, setSources] = useState<Source[]>([
    { id: "1", name: "Help Center Articles", type: "url", status: "connected", lastSync: "2 hours ago" },
    { id: "2", name: "API Documentation v3.2", type: "document", status: "connected", lastSync: "1 day ago" },
    { id: "3", name: "Product FAQ Database", type: "api", status: "connected", lastSync: "30 min ago" },
    { id: "4", name: "Internal Wiki", type: "url", status: "pending" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const removeSource = (id: string) => {
    setSources(sources.filter((s) => s.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "document": return <FileText size={16} className="text-intake-accent" />;
      case "url": return <Globe size={16} className="text-intake-success" />;
      case "api": return <Database size={16} className="text-purple-500" />;
      default: return <FileText size={16} className="text-intake-text-dim" />;
    }
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
            Knowledge Sources
          </h3>
          <p className="font-['Inter',sans-serif] text-intake-text-muted mt-1" style={{ fontSize: 14, fontWeight: 400 }}>
            Connect and manage the data sources that power your AI agent.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-intake-accent text-white rounded-lg font-['Inter',sans-serif] text-[13px] hover:bg-intake-accent-hover transition-colors font-medium">
          <Plus size={14} />
          Add Source
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-intake-card border border-dashed border-intake-border-hover rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-intake-accent transition-colors cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-intake-panel flex items-center justify-center mb-3 group-hover:bg-[var(--color-intake-accent-bg)] transition-colors">
          <Upload size={20} className="text-intake-text-dim group-hover:text-intake-accent transition-colors" />
        </div>
        <p className="font-['Inter',sans-serif] text-white text-[14px] mb-1 font-medium">
          Drop files here or click to upload
        </p>
        <p className="font-['Inter',sans-serif] text-intake-text-dim text-[12px]">
          Supports PDF, DOCX, TXT, CSV, JSON (Max 50MB)
        </p>
      </div>

      {/* Search */}
      <SectionCard title="Connected Sources">
        <div className="flex items-center justify-between mb-4 -mt-10">
          <div /> {/* Spacer for flex-between since title is rendered by SectionCard */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sources..."
            className="bg-intake-panel border border-intake-border rounded-lg px-3 py-1.5 text-intake-text-secondary font-['Inter',sans-serif] text-[13px] outline-none w-48 focus:border-intake-accent transition-colors relative z-10"
          />
        </div>

        {/* Source List */}
        <div className="space-y-3">
          {sources.map((source) => (
            <div
              key={source.id}
              className="flex items-center justify-between bg-intake-panel border border-intake-border rounded-lg px-4 py-3 group hover:border-intake-border-hover transition-colors"
            >
              <div className="flex items-center gap-3">
                {getIcon(source.type)}
                <div>
                  <p className="font-['Inter',sans-serif] text-white text-[14px] font-medium">
                    {source.name}
                  </p>
                  {source.lastSync && (
                    <p className="font-['Inter',sans-serif] text-intake-text-dim text-[12px]">
                      Last synced: {source.lastSync}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {source.status === "connected" ? (
                  <span className="flex items-center gap-1">
                    <Check size={12} className="text-intake-success" />
                    <span className="font-['Inter',sans-serif] text-intake-success text-[12px] font-medium">
                      Connected
                    </span>
                  </span>
                ) : source.status === "pending" ? (
                  <span className="font-['Inter',sans-serif] text-intake-warning text-[12px] font-medium">
                    Pending
                  </span>
                ) : (
                  <span className="font-['Inter',sans-serif] text-intake-error text-[12px] font-medium">
                    Error
                  </span>
                )}
                <button className="text-intake-text-dim hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                  <ExternalLink size={14} />
                </button>
                <button
                  onClick={() => removeSource(source.id)}
                  className="text-intake-text-dim hover:text-intake-error opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Sync Settings */}
      <SectionCard title="Sync Settings">
        <div className="flex items-center justify-between">
          <span className="font-['Inter',sans-serif] text-intake-text-secondary text-[14px]">
            Auto-sync frequency
          </span>
          <div className="flex gap-2">
            {["1h", "6h", "12h", "24h"].map((freq) => (
              <button
                key={freq}
                className={`px-3 py-1.5 rounded-lg font-['Inter',sans-serif] text-[12px] transition-colors font-medium ${
                  freq === "6h"
                    ? "bg-intake-accent text-white"
                    : "bg-intake-panel border border-intake-border text-intake-text-muted hover:text-white"
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
