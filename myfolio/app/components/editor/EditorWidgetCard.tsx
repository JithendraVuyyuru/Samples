"use client";

import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { useEditorStore, type EditorWidget, type WidgetSizeOption } from "../../store/useEditorStore";
import { cn } from "../../lib/utils";

const sizeOptions: WidgetSizeOption[] = ["1x1", "2x1", "1x2", "2x2"];

export function EditorWidgetCard({ widget }: { widget: EditorWidget }) {
  const moveWidget = useEditorStore((state) => state.moveWidget);
  const updateWidgetSize = useEditorStore((state) => state.updateWidgetSize);
  const removeWidget = useEditorStore((state) => state.removeWidget);

  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-current/10 bg-white p-4 shadow-sm">
      <div>
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-current/50">
          <span>{widget.type}</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-current/20 p-1"
              onClick={() => moveWidget(widget.id, "up")}
              aria-label="Move widget up"
            >
              <ChevronUp size={14} />
            </button>
            <button
              type="button"
              className="rounded-full border border-current/20 p-1"
              onClick={() => moveWidget(widget.id, "down")}
              aria-label="Move widget down"
            >
              <ChevronDown size={14} />
            </button>
            <button
              type="button"
              className="rounded-full border border-current/20 p-1"
              onClick={() => removeWidget(widget.id)}
              aria-label="Remove widget"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold">{widget.title}</h3>
        <p className="mt-2 text-sm text-current/60">
          Adjust size, reorder, and preview changes instantly.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {sizeOptions.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => updateWidgetSize(widget.id, size)}
            className={cn(
              "rounded-full border border-current/20 px-3 py-1 text-xs font-semibold",
              widget.size === size && "bg-black text-white"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </article>
  );
}
