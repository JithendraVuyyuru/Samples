import { notFound } from "next/navigation";
import { MarketingNav } from "../components/MarketingNav";
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileHero } from "../components/ProfileHero";
import { ProfileSection } from "../components/ProfileSection";
import { QRCodePanel } from "../components/QRCodePanel";
import { WidgetCard } from "../components/WidgetCard";
import { profileSections, profileWidgets } from "../lib/sampleData";

const demoProfiles = ["lynx", "teo", "kira", "imani"];

interface ProfilePageProps {
  params: { username: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;
  if (!demoProfiles.includes(username)) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <MarketingNav className="bg-transparent" />
      <section className="mx-auto w-full max-w-6xl space-y-8 px-6 pb-20 pt-6">
        <ProfileHeader
          name="Ava Lynx"
          handle={username}
          bio="Designing immersive product experiences. Helping teams ship with clarity, warmth, and momentum."
        />
        <ProfileHero />
        <div className="grid gap-6 lg:grid-cols-[2.2fr_1fr]">
          <div className="space-y-6">
            {profileSections.map((section) => (
              <ProfileSection
                key={section.id}
                title={section.label}
                description={section.description}
                icon={section.icon}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {profileWidgets
                    .filter((widget) => {
                      if (section.id === "social") {
                        return widget.category === "social";
                      }
                      if (section.id === "content") {
                        return widget.category === "video";
                      }
                      if (section.id === "work") {
                        return widget.category === "link" || widget.category === "image";
                      }
                      if (section.id === "music") {
                        return widget.category === "audio";
                      }
                      if (section.id === "maps") {
                        return widget.category === "map";
                      }
                      return widget.category === "text";
                    })
                    .map((widget) => (
                      <WidgetCard key={widget.id} {...widget} />
                    ))}
                </div>
              </ProfileSection>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
              <h3 className="text-lg font-semibold">Profile settings</h3>
              <ul className="mt-4 space-y-3 text-sm text-current/70">
                <li>• Custom username: /{username}</li>
                <li>• Visibility: Public</li>
                <li>• Auto-save enabled</li>
                <li>• Export JSON ready</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
              <h3 className="text-lg font-semibold">Analytics</h3>
              <p className="mt-2 text-sm text-current/60">
                Views, clicks, and engagement from the last 30 days.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Profile views</span>
                  <span className="font-semibold">12.4k</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Widget clicks</span>
                  <span className="font-semibold">3.2k</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Conversion rate</span>
                  <span className="font-semibold">4.8%</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
              <h3 className="text-lg font-semibold">Share profile</h3>
              <p className="mt-2 text-sm text-current/60">
                Scan or share your QR code instantly.
              </p>
              <div className="mt-4 flex items-center justify-center rounded-2xl border border-current/10 bg-white p-4">
                <QRCodePanel value={`https://myfolio.com/${username}`} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
