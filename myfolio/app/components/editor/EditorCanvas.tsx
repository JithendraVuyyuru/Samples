"use client";

import { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { LayoutGrid } from "lucide-react";
import { useEditorStore, type WidgetSizeOption } from "../../store/useEditorStore";
import { EditorWidgetCard } from "./EditorWidgetCard";
import { cn } from "../../lib/utils";

interface DragItem {
  id: string;
  title: string;
  type: string;
}

const sizeClasses: Record<WidgetSizeOption, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-1 md:col-span-2 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x2": "col-span-1 md:col-span-2 row-span-2",
};

export function EditorCanvas() {
  const widgets = useEditorStore((state) => state.widgets);
  const addWidget = useEditorStore((state) => state.addWidget);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "WIDGET",
    drop: (item: DragItem) => {
      addWidget({
        id: `${item.id}-${Date.now()}`,
        title: item.title,
        type: item.type,
        size: "2x1",
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  
    const dropTargetRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
          if (dropTargetRef.current) {
                  dropRef(dropTargetRef);
                }
        }, [dropRef]);

  return (
    <section className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-current/60">
            Live Preview
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Drag & drop builder</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm">
          <LayoutGrid size={16} />
          Auto-save enabled
        </div>
      </div>
      <div
        ref={dropTargetRef}
        className={cn(
          "grid min-h-[520px] grid-cols-1 gap-5 rounded-3xl border border-dashed border-current/20 bg-white/80 p-6 md:grid-cols-2 xl:grid-cols-4",
          isOver && "border-black/50 bg-white"
        )}
      >
        {widgets.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center gap-3 text-center text-sm text-current/60">
            <LayoutGrid size={32} />
            <p>Drop widgets here to build your Bento layout.</p>
          </div>
        ) : (
          widgets.map((widget) => (
            <div key={widget.id} className={sizeClasses[widget.size]}>
              <EditorWidgetCard widget={widget} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
