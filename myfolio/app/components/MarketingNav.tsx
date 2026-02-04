import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/explore", label: "Explore" },
  { href: "/widgets", label: "Widgets" },
  { href: "/changelog", label: "Changelog" },
];

export function MarketingNav({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6",
        className
      )}
    >
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
          <Sparkles size={18} />
        </span>
        Myfolio
      </Link>
      <div className="hidden items-center gap-6 text-sm font-medium text-current/70 md:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-current">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="rounded-full border border-current/20 px-4 py-2 text-sm font-semibold"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
