import Link from "next/link";
import { MarketingFooter } from "../../components/MarketingFooter";
import { MarketingNav } from "../../components/MarketingNav";

export const metadata = {
  title: "Login",
  description: "Log in to manage your Myfolio profile.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <MarketingNav />
      <section className="mx-auto w-full max-w-md px-6 pb-20 pt-16">
        <div className="rounded-3xl border border-current/10 bg-white/80 p-6">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-current/60">
            Log in to manage your profile, analytics, and widgets.
          </p>
          <form className="mt-6 space-y-4">
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
              Log in
            </button>
          </form>
          <p className="mt-4 text-sm text-current/60">
            New here?{" "}
            <Link href="/signup" className="font-semibold text-current">
              Create an account
            </Link>
          </p>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
