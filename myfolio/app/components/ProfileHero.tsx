import { Sparkles } from "lucide-react";

export function ProfileHero() {
  return (
    <section className="grid gap-6 rounded-3xl border border-current/10 bg-gradient-to-br from-black via-slate-900 to-slate-700 p-6 text-white lg:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          <Sparkles size={14} />
          Featured
        </div>
        <h2 className="mt-4 text-3xl font-semibold">
          Highlight what matters most right now.
        </h2>
        <p className="mt-3 text-sm text-white/70">
          Pin your best widgets, stories, or collaborations to the top of your
          profile with a hero spotlight.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs">
            Featured Case Study
          </span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs">
            Latest Video
          </span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs">
            Bookings Open
          </span>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
        <p className="text-sm text-white/70">Large format showcase</p>
        <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent" />
        <p className="mt-4 text-xs text-white/60">
          Embed a hero video, carousel, or launch banner.
        </p>
      </div>
    </section>
  );
}
