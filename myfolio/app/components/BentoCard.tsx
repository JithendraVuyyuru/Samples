"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import { cn } from "../lib/utils";

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  colSpan?: 1 | 2 | 4;
  rowSpan?: 1 | 2;
  children?: ReactNode;
  className?: string;
}

const spanClasses = {
  1: "col-span-1",
  2: "col-span-1 md:col-span-2",
  4: "col-span-1 md:col-span-2 xl:col-span-4",
};

const rowClasses = {
  1: "row-span-1",
  2: "row-span-2",
};

export function BentoCard({
  title,
  description,
  icon,
  colSpan = 1,
  rowSpan = 1,
  children,
  className,
}: BentoCardProps) {
  const radius = useThemeStore((state) => state.radius);
  const pattern = useThemeStore((state) => state.pattern);
  const theme = useThemeStore((state) => state.theme);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden p-6",
        "rounded-squircle",
        spanClasses[colSpan],
        rowClasses[rowSpan],
        theme === "light"
          ? "bg-paper-card text-paper-text border border-black/5"
          : "bg-cyber-card text-cyber-text ring-1 ring-white/10",
        `pattern-${pattern}`,
        className
      )}
      style={{ borderRadius: radius }}
    >
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-tight text-current/70">
            {icon}
            <span>{title}</span>
          </div>
          {description && (
            <p className="mt-3 text-lg font-semibold tracking-tight">{description}</p>
          )}
        </div>
      </div>
      {children && <div className="relative z-10 mt-4">{children}</div>}
    </motion.div>
  );
}
