import Image from "next/image";
import Link from "next/link";

import { mainNav } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="gold-accent-line w-full" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/scisa-logo.png"
                alt="KNUST SCISA"
                width={48}
                height={48}
                className="rounded-full bg-white p-0.5"
              />
              <div>
                <p className="font-semibold text-white">SCISA Senate</p>
                <p className="text-sm text-white/70">
                  Science Students&apos; Association of KNUST
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              The official legislative and governance portal of the Senate —
              transparency, representation, and institutional integrity for all
              science students.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--institutional-gold)]">
              Quick Links
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--institutional-gold)]">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Kwame Nkrumah University of Science and Technology</li>
              <li>Faculty of Physical &amp; Computational Sciences</li>
              <li>senate@scisa.knust.edu.gh</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} SCISA Senate, KNUST. All rights reserved.</p>
          <p>Official Legislative Portal — Built for transparency &amp; governance</p>
        </div>
      </div>
    </footer>
  );
}
