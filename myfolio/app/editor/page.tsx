"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Link from "next/link";
import { CustomizationDock } from "../components/CustomizationDock";
import { MarketingNav } from "../components/MarketingNav";
import { EditorCanvas } from "../components/editor/EditorCanvas";
import { EditorSidebar } from "../components/editor/EditorSidebar";

export default function EditorPage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <DndProvider backend={HTML5Backend}>
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-24 pt-6 lg:flex-row">
          <EditorCanvas />
          <EditorSidebar />
        </section>
      </DndProvider>
      <section className="mx-auto w-full max-w-6xl px-6 pb-32">
        <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
          <h2 className="text-xl font-semibold">Theme & layout controls</h2>
          <p className="mt-2 text-sm text-current/60">
            Use the floating dock to adjust spacing, radius, and patterns. Auto-save
            keeps every layout change synced instantly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-current/20 px-3 py-1">
              Light / Dark themes
            </span>
            <span className="rounded-full border border-current/20 px-3 py-1">
              Grid spacing
            </span>
            <span className="rounded-full border border-current/20 px-3 py-1">
              Corner radius
            </span>
            <span className="rounded-full border border-current/20 px-3 py-1">
              Pattern backgrounds
            </span>
          </div>
          <Link
            href="/changelog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          >
            View editor updates
          </Link>
        </div>
      </section>
      <CustomizationDock />
    </main>
  );
}
