"use client";

import { ReactNode } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { cn } from "../lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  const spacing = useThemeStore((state) => state.spacing);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
        "auto-rows-[140px]",
        className
      )}
      style={{ gap: spacing }}
    >
      {children}
    </div>
  );
}
