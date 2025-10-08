"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useMemo } from "react"
import type { Dict, Lang } from "@/lib/copy"

export function Header({ lang, t }: { lang: Lang; t: Dict }) {
  const items = useMemo(
    () => [
      { href: "#home", label: t.nav.home },
      { href: "#bio", label: t.nav.bio },
      { href: "#work", label: t.nav.work },
      { href: "#certificates", label: t.nav.certificates },
      { href: "#expertise", label: t.nav.expertise },
      { href: "#experience", label: t.nav.experience },
    ],
    [t],
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Left: Name/position */}
        <Link href={`/${lang}`} className="font-bold text-lg tracking-tight">
          Alif Azhar Putra S.T
        </Link>

        {/* Right: Nav */}
        <nav aria-label={t.a11y.primaryNav}>
          <ul className="hidden md:flex items-center gap-6 font-bold">
            {items.map((it) => (
              <li key={it.href}>
                <a href={it.href} className={cn("hover:underline underline-offset-4")}>
                  {it.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              {/* Language switcher - links statically to other locale root */}
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Link
                  href="/id"
                  aria-label="Bahasa Indonesia"
                  className={cn(lang === "id" && "underline underline-offset-4")}
                >
                  ID
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/en" aria-label="English" className={cn(lang === "en" && "underline underline-offset-4")}>
                  EN
                </Link>
              </div>
            </li>
          </ul>

          {/* Mobile simple nav */}
          <details className="md:hidden">
            <summary className="cursor-pointer font-bold">{t.nav.menu}</summary>
            <ul className="mt-2 space-y-2">
              {items.map((it) => (
                <li key={it.href}>
                  <a href={it.href} className="block py-1">
                    {it.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Link
                    href="/id"
                    aria-label="Bahasa Indonesia"
                    className={cn(lang === "id" && "underline underline-offset-4")}
                  >
                    ID
                  </Link>
                  <span aria-hidden="true">/</span>
                  <Link href="/en" aria-label="English" className={cn(lang === "en" && "underline underline-offset-4")}>
                    EN
                  </Link>
                </div>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
  )
}
