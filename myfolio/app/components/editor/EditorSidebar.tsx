"use client";

import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { Plus } from "lucide-react";

const widgetLibrary = [
  { id: "twitter", title: "Twitter / X", type: "social" },
  { id: "instagram", title: "Instagram Grid", type: "social" },
  { id: "youtube", title: "YouTube Channel", type: "video" },
  { id: "podcast", title: "Podcast Episodes", type: "audio" },
  { id: "spotify", title: "Spotify Artist", type: "audio" },
  { id: "case-study", title: "Case Study", type: "link" },
  { id: "map", title: "Location Pin", type: "map" },
  { id: "quote", title: "Quote", type: "text" },
];

interface DragItem {
  id: string;
  title: string;
  type: string;
}

export function EditorSidebar() {
  const widgets = useMemo(() => widgetLibrary, []);

  return (
    <aside className="flex w-full flex-col gap-6 rounded-3xl border border-current/10 bg-white/80 p-6 lg:w-72">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-current/60">
          Widget Library
        </p>
        <h2 className="mt-2 text-xl font-semibold">Drag to add widgets</h2>
        <p className="mt-2 text-sm text-current/70">
          Mix social, content, work, audio, and text blocks to build your grid.
        </p>
      </div>
      <div className="space-y-3">
        {widgets.map((widget) => (
          <DraggableWidget key={widget.id} widget={widget} />
        ))}
      </div>
      <button className="mt-auto flex items-center justify-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm font-semibold">
        <Plus size={16} />
        New section
      </button>
    </aside>
  );
}

function DraggableWidget({ widget }: { widget: DragItem }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "WIDGET",
    item: widget,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className="flex cursor-grab items-center justify-between rounded-2xl border border-current/10 bg-white px-4 py-3 text-sm font-medium shadow-sm"
      style={{ opacity: isDragging ? 0.6 : 1 }}
    >
      <span>{widget.title}</span>
      <span className="rounded-full bg-black/10 px-2 py-1 text-xs uppercase">
        {widget.type}
      </span>
    </div>
  );
}
