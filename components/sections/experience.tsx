import type { Dict } from "@/lib/copy"

export function Experience({ t }: { t: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.experience.heading}</h2>
      <ul className="space-y-4">
        {t.experience.items.map((e, i) => (
          <li key={i} className="rounded-lg border border-border p-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold">{e.role}</h3>
              <span className="text-xs text-muted-foreground">{e.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{e.company}</p>
            {e.desc ? <p className="text-sm mt-2">{e.desc}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
