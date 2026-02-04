"use client";

import { ReactNode, useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ProfileSectionProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function ProfileSection({
  title,
  description,
  icon,
  children,
  defaultOpen = true,
}: ProfileSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const sectionId = useId();

  return (
    <section className="rounded-3xl border border-current/10 bg-white/70">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={sectionId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
            {icon}
          </span>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-current/60">{description}</p>
          </div>
        </div>
        <ChevronDown
          className={cn("transition", isOpen && "rotate-180")}
          size={18}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={sectionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
