"use client";

import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

export function ThemeProvider() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
  }, [theme]);

  return null;
}
