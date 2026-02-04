import { create } from "zustand";

export type WidgetSizeOption = "1x1" | "2x1" | "1x2" | "2x2";

export interface EditorWidget {
  id: string;
  title: string;
  type: string;
  size: WidgetSizeOption;
}

interface EditorState {
  widgets: EditorWidget[];
  addWidget: (widget: EditorWidget) => void;
  moveWidget: (id: string, direction: "up" | "down") => void;
  updateWidgetSize: (id: string, size: WidgetSizeOption) => void;
  removeWidget: (id: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  widgets: [
    { id: "w1", title: "Twitter Profile", type: "social", size: "2x1" },
    { id: "w2", title: "YouTube Channel", type: "video", size: "2x2" },
    { id: "w3", title: "Case Study", type: "link", size: "2x1" },
    { id: "w4", title: "Spotify Artist", type: "audio", size: "1x1" },
  ],
  addWidget: (widget) =>
    set((state) => ({
      widgets: [...state.widgets, widget],
    })),
  moveWidget: (id, direction) =>
    set((state) => {
      const index = state.widgets.findIndex((widget) => widget.id === id);
      if (index === -1) {
        return state;
      }
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= state.widgets.length) {
        return state;
      }
      const updated = [...state.widgets];
      const [moved] = updated.splice(index, 1);
      updated.splice(newIndex, 0, moved);
      return { widgets: updated };
    }),
  updateWidgetSize: (id, size) =>
    set((state) => ({
      widgets: state.widgets.map((widget) =>
        widget.id === id ? { ...widget, size } : widget
      ),
    })),
  removeWidget: (id) =>
    set((state) => ({
      widgets: state.widgets.filter((widget) => widget.id !== id),
    })),
}));
