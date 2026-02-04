import { ReactNode } from "react";
import { cn } from "../lib/utils";
import type { WidgetCategory, WidgetSize } from "../lib/sampleData";

interface WidgetCardProps {
  title: string;
  description: string;
  category: WidgetCategory;
  size: WidgetSize;
  icon: ReactNode;
  metadata?: string[];
  cta?: string;
}

const sizeClasses: Record<WidgetSize, string> = {
  small: "col-span-1",
  wide: "col-span-1 md:col-span-2",
  tall: "col-span-1 row-span-2",
  large: "col-span-1 md:col-span-2 row-span-2",
  full: "col-span-1 md:col-span-2 xl:col-span-4",
};

const categoryStyles: Record<WidgetCategory, string> = {
  social: "bg-sky-500/10 text-sky-500",
  video: "bg-rose-500/10 text-rose-500",
  audio: "bg-emerald-500/10 text-emerald-500",
  link: "bg-violet-500/10 text-violet-500",
  text: "bg-amber-500/10 text-amber-500",
  map: "bg-indigo-500/10 text-indigo-500",
  image: "bg-fuchsia-500/10 text-fuchsia-500",
};

export function WidgetCard({
  title,
  description,
  category,
  size,
  icon,
  metadata,
  cta,
}: WidgetCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col justify-between rounded-3xl border border-current/10 bg-white/80 p-5 text-current shadow-sm",
        "transition hover:-translate-y-1 hover:shadow-md",
        sizeClasses[size]
      )}
    >
      <div>
        <div className="flex items-center gap-2 text-sm font-semibold text-current/70">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              categoryStyles[category]
            )}
          >
            {icon}
          </span>
          <span className="uppercase tracking-widest">{category}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-current/70">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-current/60">
        {metadata?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-current/10 px-2 py-1"
          >
            {item}
          </span>
        ))}
        {cta && (
          <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            {cta}
          </span>
        )}
      </div>
    </article>
  );
}
