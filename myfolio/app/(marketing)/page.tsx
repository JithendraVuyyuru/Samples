import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { BentoGrid } from "../components/BentoGrid";
import { BentoCard } from "../components/BentoCard";
import { CustomizationDock } from "../components/CustomizationDock";
import { MarketingFooter } from "../components/MarketingFooter";
import { MarketingNav } from "../components/MarketingNav";
import { SectionHeading } from "../components/SectionHeading";
import { WidgetCard } from "../components/WidgetCard";
import { exploreProfiles, marketingStats, widgetShowcase } from "../lib/sampleData";

const previewCards = [
  {
    title: "Social",
    description: "Let’s connect across the creative web.",
    colSpan: 2 as const,
    rowSpan: 1 as const,
    content: (
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
        <span className="rounded-full border border-current/10 px-3 py-1">
          Twitter
        </span>
        <span className="rounded-full border border-current/10 px-3 py-1">
          LinkedIn
        </span>
        <span className="rounded-full border border-current/10 px-3 py-1">
          Dribbble
        </span>
      </div>
    ),
  },
  {
    title: "Maps",
    description: "Based in Reykjavík, open worldwide.",
    colSpan: 1 as const,
    rowSpan: 2 as const,
    content: (
      <div className="mt-6 rounded-2xl border border-current/10 p-4 text-sm">
        <p className="font-semibold">Current focus</p>
        <p className="mt-2 text-sm text-current/70">
          Building atmospheric web experiences for creative teams.
        </p>
      </div>
    ),
  },
  {
    title: "Project",
    description: "Myfolio Studio UI Kit",
    colSpan: 1 as const,
    rowSpan: 1 as const,
    content: (
      <p className="mt-4 text-sm text-current/70">
        12 components, 3 themes, and motion-first layouts.
      </p>
    ),
  },
  {
    title: "Spotify",
    description: "Synthwave Sessions",
    colSpan: 2 as const,
    rowSpan: 1 as const,
    content: (
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-semibold">Now playing</span>
        <span className="text-current/70">42 min left</span>
      </div>
    ),
  },
  {
    title: "Github",
    description: "Open-source Bento tools",
    colSpan: 1 as const,
    rowSpan: 1 as const,
    content: (
      <ul className="mt-4 space-y-2 text-sm text-current/80">
        <li>• bento-grid-motion</li>
        <li>• theme-dock-kit</li>
        <li>• glassy-grid</li>
      </ul>
    ),
  },
  {
    title: "Studio",
    description: "Available for Q3 collaborations.",
    colSpan: 4 as const,
    rowSpan: 1 as const,
    content: (
      <div className="mt-6 flex flex-col gap-2 text-sm text-current/80 md:flex-row md:items-center md:justify-between">
        <span>Brand systems • Web motion • Design direction</span>
        <button className="rounded-full border border-current/20 px-4 py-2 text-xs font-semibold uppercase tracking-tight">
          Request deck
        </button>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-current/60">
              Bento profile builder
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Launch a Bento.me-style profile in minutes.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-current/70">
              Myfolio is a full-featured profile builder with drag-and-drop
              layouts, live widgets, and a powerful editor for creators,
              founders, and studios.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Start building
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/editor"
                className="flex items-center gap-2 rounded-full border border-current/20 px-5 py-3 text-sm font-semibold"
              >
                Launch editor
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-current/10 bg-white/80 p-6 shadow-sm">
            <p className="text-sm font-semibold">Live profile preview</p>
            <BentoGrid className="mt-4">
              {previewCards.map((card) => (
                <BentoCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  colSpan={card.colSpan}
                  rowSpan={card.rowSpan}
                >
                  {card.content}
                </BentoCard>
              ))}
            </BentoGrid>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-current/10 bg-white/70 p-6 md:grid-cols-4">
          {marketingStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm text-current/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20">
        <SectionHeading
          label="Widgets"
          title="Every widget you need to build your story"
          description="Connect social profiles, content feeds, music, maps, and custom text blocks. Each widget supports sizing, custom actions, and themed styling."
          action={
            <Link
              href="/widgets"
              className="rounded-full border border-current/20 px-4 py-2 text-sm font-semibold"
            >
              View all widgets
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {widgetShowcase.map((widget) => (
            <WidgetCard key={widget.id} {...widget} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20">
        <SectionHeading
          label="Explore"
          title="Discover public Bento profiles"
          description="Browse trending creators and studios to get inspired, then fork their layout into your own profile."
          action={
            <Link
              href="/explore"
              className="rounded-full border border-current/20 px-4 py-2 text-sm font-semibold"
            >
              Browse gallery
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {exploreProfiles.map((profile) => (
            <article
              key={profile.id}
              className="rounded-3xl border border-current/10 bg-white/80 p-5 shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-black via-slate-600 to-slate-300" />
              <h3 className="mt-4 text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-current/60">{profile.role}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-current/60">
                {profile.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-current/10 px-2 py-1"
                  >
                    {stat}
                  </span>
                ))}
              </div>
              <Link
                href={`/${profile.id}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              >
                View profile
                <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-28">
        <SectionHeading
          label="Launch"
          title="Shipping-ready infrastructure"
          description="Myfolio ships with Next.js 14 App Router, Prisma + PostgreSQL, NextAuth, and API integrations so you can scale without rewrites."
          action={
            <Link
              href="/signup"
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              Create your profile
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
            <h3 className="text-lg font-semibold">Editor + Analytics</h3>
            <p className="mt-2 text-sm text-current/70">
              Auto-save, live preview, and analytics dashboards are built-in so
              you can iterate in real time.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-current/70">
              <li>• Section management + drag & drop grid.</li>
              <li>• Theme, spacing, radius, and pattern controls.</li>
              <li>• Export your profile JSON and share links instantly.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
            <h3 className="text-lg font-semibold">Integrations</h3>
            <p className="mt-2 text-sm text-current/70">
              Plug into the latest APIs for social, music, video, and link
              previews.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-current/70">
              <li>• Twitter/X, Instagram, GitHub, LinkedIn.</li>
              <li>• YouTube Data API + Spotify Web API.</li>
              <li>• Open Graph previews + Google Maps API.</li>
            </ul>
          </div>
        </div>
      </section>
      <CustomizationDock />
      <MarketingFooter />
    </main>
  );
}
