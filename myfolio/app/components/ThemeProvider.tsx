"use client";

import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

export function ThemeProvider() {
  const theme = useThemeStore((state) => state.theme);
  const accent = useThemeStore((state) => state.accent);

  useEffect(() => {
    const root = document.documentElement;
    const accentMap: Record<string, string> = {
      indigo: "#6366f1",
      emerald: "#10b981",
      rose: "#f43f5e",
    };
    root.dataset.theme = theme;
    root.style.setProperty(
      "--accent-color",
      accentMap[accent] ?? accentMap.indigo
    );
  }, [theme, accent]);

  return null;
}
