import { MarketingFooter } from "../../components/MarketingFooter";
import { MarketingNav } from "../../components/MarketingNav";
import { SectionHeading } from "../../components/SectionHeading";

export const metadata = {
  title: "Changelog",
  description: "Product updates and releases for Myfolio.",
};

const releases = [
  {
    version: "v1.4",
    date: "Aug 2024",
    highlights: [
      "New widget sizing controls and auto-layout suggestions.",
      "Analytics dashboard with exportable reports.",
      "Improved Google Maps embed performance.",
    ],
  },
  {
    version: "v1.3",
    date: "Jul 2024",
    highlights: [
      "Profile privacy controls and public gallery filters.",
      "Spotify and YouTube API enhancements.",
      "New pattern background presets.",
    ],
  },
  {
    version: "v1.2",
    date: "Jun 2024",
    highlights: [
      "Drag-and-drop editor launch.",
      "Widget library refresh with music + map cards.",
      "Realtime preview with auto-save.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto w-full max-w-5xl space-y-10 px-6 pb-20 pt-12">
        <SectionHeading
          label="Changelog"
          title="Ship faster with weekly releases"
          description="Track every product update, new widget, and platform improvement."
        />
        <div className="space-y-6">
          {releases.map((release) => (
            <article
              key={release.version}
              className="rounded-3xl border border-current/10 bg-white/80 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{release.version}</h3>
                <span className="text-sm text-current/60">{release.date}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-current/70">
                {release.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
