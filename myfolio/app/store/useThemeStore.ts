import { create } from "zustand";

export type ThemeMode = "light" | "dark";
export type PatternMode = "noise" | "grid" | "dot";
export type AccentColor = "indigo" | "emerald" | "rose";

interface ThemeState {
  theme: ThemeMode;
  spacing: number;
  radius: number;
  pattern: PatternMode;
  accent: AccentColor;
  setTheme: (theme: ThemeMode) => void;
  setSpacing: (spacing: number) => void;
  setRadius: (radius: number) => void;
  setPattern: (pattern: PatternMode) => void;
  setAccent: (accent: AccentColor) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  spacing: 24,
  radius: 32,
  pattern: "noise",
  accent: "indigo",
  setTheme: (theme) => set({ theme }),
  setSpacing: (spacing) => set({ spacing }),
  setRadius: (radius) => set({ radius }),
  setPattern: (pattern) => set({ pattern }),
  setAccent: (accent) => set({ accent }),
}));
