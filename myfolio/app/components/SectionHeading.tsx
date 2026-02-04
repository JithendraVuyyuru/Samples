import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3 md:flex-row md:items-end md:justify-between", className)}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-current/60">
          {label}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base text-current/70">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
