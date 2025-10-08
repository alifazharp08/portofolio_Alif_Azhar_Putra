import type { Dict } from "@/lib/copy"

export function Work({ t }: { t: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.work.heading}</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.work.items.map((w, i) => (
          <li key={i} className="rounded-lg border border-border p-4">
            <h3 className="font-semibold">{w.title}</h3>
            <p className="text-sm text-muted-foreground">{w.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
