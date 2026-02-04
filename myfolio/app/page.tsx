"use client";

import { BentoGrid } from "./components/BentoGrid";
import { BentoCard } from "./components/BentoCard";
import { CustomizationDock } from "./components/CustomizationDock";
import { Github, MapPin, Music2, Sparkles, Users } from "lucide-react";

const cards = [
  {
    title: "Social",
    description: "Let’s connect across the creative web.",
    icon: <Users size={16} />,
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
    title: "Map",
    description: "Based in Reykjavík, open worldwide.",
    icon: <MapPin size={16} />,
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
    icon: <Sparkles size={16} />,
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
    icon: <Music2 size={16} />,
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
    icon: <Github size={16} />,
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
    icon: <Sparkles size={16} />,
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
    <main className="min-h-screen px-6 pb-32 pt-16">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-current/60">
            Myfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            A Bento.me-inspired space for your story.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-current/70">
            Curate your highlights, shuffle your layout, and switch visual
            atmospheres instantly with the customization dock.
          </p>
        </header>
        <BentoGrid>
          {cards.map((card) => (
            <BentoCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              colSpan={card.colSpan}
              rowSpan={card.rowSpan}
            >
              {card.content}
            </BentoCard>
          ))}
        </BentoGrid>
      </section>
      <CustomizationDock />
    </main>
  );
}
