import { create } from "zustand";

export type ThemeMode = "light" | "dark";
export type PatternMode = "noise" | "grid" | "dot";

interface ThemeState {
  theme: ThemeMode;
  spacing: number;
  radius: number;
  pattern: PatternMode;
  setTheme: (theme: ThemeMode) => void;
  setSpacing: (spacing: number) => void;
  setRadius: (radius: number) => void;
  setPattern: (pattern: PatternMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  spacing: 24,
  radius: 32,
  pattern: "noise",
  setTheme: (theme) => set({ theme }),
  setSpacing: (spacing) => set({ spacing }),
  setRadius: (radius) => set({ radius }),
  setPattern: (pattern) => set({ pattern }),
}));
