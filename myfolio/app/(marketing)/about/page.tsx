import Link from "next/link";
import { MarketingFooter } from "../../components/MarketingFooter";
import { MarketingNav } from "../../components/MarketingNav";
import { SectionHeading } from "../../components/SectionHeading";

export const metadata = {
  title: "About Myfolio",
  description: "Learn about the team behind the Myfolio Bento profile builder.",
};

const values = [
  {
    title: "Creator-first",
    description: "Everything we build is optimized for creators, studios, and founders.",
  },
  {
    title: "Performance obsessed",
    description: "Ship profiles that load in under three seconds with built-in SEO.",
  },
  {
    title: "Modular widgets",
    description: "Mix and match widgets across social, work, and content feeds.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto w-full max-w-5xl space-y-10 px-6 pb-20 pt-12">
        <SectionHeading
          label="About"
          title="We help creators launch dynamic profiles"
          description="Myfolio is a Bento.me-inspired profile builder designed for modern storytelling. Our platform gives you the tools to create, customize, and scale your digital presence in minutes."
        />
        <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
          <p className="text-sm text-current/70">
            Founded by designers and engineers, Myfolio combines modular widgets,
            a drag-and-drop editor, and powerful integrations so every profile
            feels uniquely yours.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-current/10 bg-white p-4">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-current/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/signup"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Join Myfolio
          </Link>
          <Link
            href="/explore"
            className="rounded-full border border-current/20 px-5 py-3 text-sm font-semibold"
          >
            Explore profiles
          </Link>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
