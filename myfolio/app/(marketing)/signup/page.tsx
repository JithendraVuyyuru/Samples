import Link from "next/link";
import { MarketingFooter } from "../../components/MarketingFooter";
import { MarketingNav } from "../../components/MarketingNav";

export const metadata = {
  title: "Sign up",
  description: "Create your Myfolio account to launch a Bento profile.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto w-full max-w-md px-6 pb-20 pt-16">
        <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
          <h1 className="text-2xl font-semibold">Create your profile</h1>
          <p className="mt-2 text-sm text-current/60">
            Launch your Bento profile with a custom username and live widgets.
          </p>
          <form className="mt-6 space-y-4">
            <label className="block text-sm font-semibold">
              Name
              <input
                type="text"
                placeholder="Ava Lynx"
                className="mt-2 w-full rounded-2xl border border-current/20 px-4 py-3 text-sm"
              />
            </label>
            <label className="block text-sm font-semibold">
              Email
              <input
                type="email"
                placeholder="you@studio.com"
                className="mt-2 w-full rounded-2xl border border-current/20 px-4 py-3 text-sm"
              />
            </label>
            <label className="block text-sm font-semibold">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-current/20 px-4 py-3 text-sm"
              />
            </label>
            <button className="w-full rounded-full bg-black px-4 py-3 text-sm font-semibold text-white">
              Create account
            </button>
          </form>
          <p className="mt-4 text-sm text-current/60">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-current">
              Log in
            </Link>
          </p>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
