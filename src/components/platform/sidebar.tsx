"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Overview", href: "/dashboard" },
  { label: "Portfolio", href: "/dashboard/portfolio" },
  { label: "Strategies", href: "/dashboard/strategies" },
  { label: "Journal", href: "/dashboard/journal" },
  { label: "Execution", href: "/dashboard/execution" },
  { label: "Risk Center", href: "/dashboard/risk-center" },
  { label: "Performance", href: "/dashboard/performance" },
  { label: "Billing", href: "/dashboard/billing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Install Guide", href: "/installation" },
  { label: "Brokers", href: "/broker-compatibility" },
  { label: "Methodology", href: "/performance-methodology" },
];

export function PlatformSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-4 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
      <p className="px-2 text-xs uppercase tracking-wide text-[color:var(--terminal-muted)]">LUNAVEX Terminal</p>
      <nav className="mt-4 space-y-1 text-sm">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2 transition ${active ? "border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] text-[color:var(--terminal-text)]" : "text-[color:var(--terminal-muted)] hover:bg-[var(--terminal-surface-soft)]"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-3 text-xs text-[color:var(--terminal-muted)]">
        <p className="font-medium text-[color:var(--terminal-text)]">Compliance</p>
        <p className="mt-2">Trading involves risk. No guaranteed profits. Review risk controls before execution.</p>
      </div>
    </aside>
  );
}
