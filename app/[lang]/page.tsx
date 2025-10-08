import type { Metadata } from "next"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/sections/hero"
import { Bio } from "@/components/sections/bio"
import { Work } from "@/components/sections/work"
import { Certificates } from "@/components/sections/certificates"
import { Expertise } from "@/components/sections/expertise"
import { Experience } from "@/components/sections/experience"
import { getDict, type Lang } from "@/lib/copy"

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }]
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang }
}): Promise<Metadata> {
  const t = getDict(params.lang)
  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
      },
    },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const t = getDict(params.lang)
  return (
    <main>
      <Header lang={params.lang} t={t} />
      <section id="home" aria-label={t.nav.home}>
        <Hero lang={params.lang} t={t} />
      </section>
      <section id="bio" aria-label={t.nav.bio} className="scroll-mt-24">
        <Bio t={t} />
      </section>
      <section id="work" aria-label={t.nav.work} className="scroll-mt-24">
        <Work t={t} />
      </section>
      <section id="certificates" aria-label={t.nav.certificates} className="scroll-mt-24">
        <Certificates t={t} />
      </section>
      <section id="expertise" aria-label={t.nav.expertise} className="scroll-mt-24">
        <Expertise t={t} />
      </section>
      <section id="experience" aria-label={t.nav.experience} className="scroll-mt-24">
        <Experience t={t} />
      </section>
    </main>
  )
}
