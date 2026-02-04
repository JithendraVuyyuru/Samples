import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MarketingFooter } from "../../components/MarketingFooter";
import { MarketingNav } from "../../components/MarketingNav";
import { SectionHeading } from "../../components/SectionHeading";
import { exploreProfiles } from "../../lib/sampleData";

export const metadata = {
  title: "Explore Profiles",
  description: "Discover public Bento profiles and inspire your own layout.",
};

export default function ExplorePage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20 pt-12">
        <SectionHeading
          label="Explore"
          title="Gallery of public Bento profiles"
          description="Browse the most-loved creators on Myfolio and fork their layout directly into your editor."
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
                  <span key={stat} className="rounded-full border border-current/10 px-2 py-1">
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
      <MarketingFooter />
    </main>
  );
}
