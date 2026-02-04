import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/explore", label: "Explore" },
  { href: "/widgets", label: "Widgets" },
  { href: "/changelog", label: "Changelog" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-current/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Myfolio</p>
          <p className="mt-2 max-w-md text-sm text-current/70">
            Build a Bento-style profile that adapts to every audience with live
            widgets, drag-and-drop layout, and a powerful editor.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-current/70 md:grid-cols-3">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-current">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-current/10 py-4 text-center text-xs text-current/60">
        © 2024 Myfolio. Crafted for creators.
      </div>
    </footer>
  );
}
