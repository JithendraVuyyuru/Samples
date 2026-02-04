import Link from "next/link";
import { MarketingFooter } from "../../components/MarketingFooter";
import { MarketingNav } from "../../components/MarketingNav";
import { SectionHeading } from "../../components/SectionHeading";
import { WidgetCard } from "../../components/WidgetCard";
import { widgetShowcase } from "../../lib/sampleData";

export const metadata = {
  title: "Widget Library",
  description: "Browse the complete Myfolio widget library.",
};

export default function WidgetsPage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20 pt-12">
        <SectionHeading
          label="Widgets"
          title="Full widget library"
          description="Every widget supports size controls, display options, and interactions so you can build the perfect Bento grid."
          action={
            <Link
              href="/editor"
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              Open editor
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {widgetShowcase.map((widget) => (
            <WidgetCard key={widget.id} {...widget} />
          ))}
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
