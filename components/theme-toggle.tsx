"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const modes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      aria-label="Theme preference"
      className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-1"
      role="group"
    >
      {modes.map((mode) => {
        const Icon = mode.icon;
        const active = theme === mode.value;

        return (
          <button
            aria-pressed={active}
            className={[
              "inline-flex h-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition",
              active
                ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
              compact ? "w-9 px-0" : "",
            ].join(" ")}
            key={mode.value}
            onClick={() => setTheme(mode.value)}
            title={`${mode.label} theme`}
            type="button"
          >
            <Icon aria-hidden="true" size={16} />
            {!compact ? <span className="ml-2 hidden sm:inline">{mode.label}</span> : null}
            <span className="sr-only">{mode.label} theme</span>
          </button>
        );
      })}
    </div>
  );
}
