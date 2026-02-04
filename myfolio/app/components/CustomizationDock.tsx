"use client";

import { Paintbrush, Sun, Moon, Grid2X2, Waves, Dot } from "lucide-react";
import {
  useThemeStore,
  type PatternMode,
  type AccentColor,
} from "../store/useThemeStore";
import { cn } from "../lib/utils";

const patterns: { key: PatternMode; label: string; icon: JSX.Element }[] = [
  { key: "noise", label: "Noise", icon: <Waves size={16} /> },
  { key: "grid", label: "Grid", icon: <Grid2X2 size={16} /> },
  { key: "dot", label: "Dot", icon: <Dot size={16} /> },
];

const accents: { key: AccentColor; label: string }[] = [
  { key: "indigo", label: "Indigo" },
  { key: "emerald", label: "Emerald" },
  { key: "rose", label: "Rose" },
];

export function CustomizationDock() {
  const theme = useThemeStore((state) => state.theme);
  const spacing = useThemeStore((state) => state.spacing);
  const radius = useThemeStore((state) => state.radius);
  const pattern = useThemeStore((state) => state.pattern);
  const accent = useThemeStore((state) => state.accent);
  const setTheme = useThemeStore((state) => state.setTheme);
  const setSpacing = useThemeStore((state) => state.setSpacing);
  const setRadius = useThemeStore((state) => state.setRadius);
  const setPattern = useThemeStore((state) => state.setPattern);
  const setAccent = useThemeStore((state) => state.setAccent);

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 px-6">
      <div
        className={cn(
          "pointer-events-auto flex flex-wrap items-center justify-between gap-6 rounded-full",
          "border border-black/10 px-6 py-4 shadow-xl backdrop-blur",
          theme === "dark"
            ? "border-white/10 bg-black/70 text-white"
            : "bg-white/70 text-black"
        )}
      >
        <div className="flex items-center gap-3">
          <Paintbrush size={18} />
          <div>
            <p className="text-sm font-semibold">Theme</p>
            <div className="mt-2 flex gap-2">
              <button
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white/10 text-white"
                )}
                onClick={() => setTheme("light")}
              >
                <Sun size={14} />
                Light
              </button>
              <button
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                  theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black/10 text-black"
                )}
                onClick={() => setTheme("dark")}
              >
                <Moon size={14} />
                Dark
              </button>
            </div>
          </div>
        </div>

        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <p className="text-sm font-semibold">Grid Spacing</p>
          <input
            type="range"
            min={16}
            max={40}
            value={spacing}
            onChange={(event) => setSpacing(Number(event.target.value))}
            className={cn(
              "w-full",
              theme === "dark" ? "accent-white" : "accent-black"
            )}
            style={{ accentColor: "var(--accent-color)" }}
          />
        </div>

        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <p className="text-sm font-semibold">Corner Radius</p>
          <input
            type="range"
            min={0}
            max={48}
            value={radius}
            onChange={(event) => setRadius(Number(event.target.value))}
            className={cn(
              "w-full",
              theme === "dark" ? "accent-white" : "accent-black"
            )}
            style={{ accentColor: "var(--accent-color)" }}
          />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Accent</p>
          <div className="flex gap-2">
            {accents.map((item) => (
              <button
                key={item.key}
                className={cn(
                  "flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 text-xs font-semibold",
                  theme === "dark" && "border-white/10",
                  accent === item.key
                    ? "accent-pill"
                    : theme === "dark"
                    ? "text-white"
                    : "text-black"
                )}
                onClick={() => setAccent(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Pattern</p>
          <div className="flex gap-2">
            {patterns.map((item) => (
              <button
                key={item.key}
                className={cn(
                  "flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 text-xs font-semibold",
                  theme === "dark" && "border-white/10",
                  pattern === item.key
                    ? theme === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : theme === "dark"
                    ? "text-white"
                    : "text-black"
                )}
                onClick={() => setPattern(item.key)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
