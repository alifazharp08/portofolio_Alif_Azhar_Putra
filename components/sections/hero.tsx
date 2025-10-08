import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Dict, Lang } from "@/lib/copy"

export function Hero({ t, lang }: { t: Dict; lang: Lang }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{t.hero.kicker}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-balance">{t.hero.title}</h1>
          <p className="text-pretty text-muted-foreground">{t.hero.subtitle}</p>
          <div className="flex gap-3 pt-2">
            <Button asChild size="lg">
              <a href={t.hero.hireHref} aria-label={t.hero.hireCta}>
                {t.hero.hireCta}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={t.hero.cvHref} aria-label={t.hero.cvCta}>
                {t.hero.cvCta}
              </a>
            </Button>
          </div>
        </div>

        <div className="justify-self-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-1 ring-border">
            <Image src="/images/alif-portrait.png" alt={t.images.portraitAlt} fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </div>
  )
}
