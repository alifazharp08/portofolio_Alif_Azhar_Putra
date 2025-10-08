import type { Dict } from "@/lib/copy"

export function Expertise({ t }: { t: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.expertise.heading}</h2>
      <ul className="flex flex-wrap gap-3">
        {t.expertise.items.map((s, i) => (
          <li key={i} className="rounded-full border border-border px-4 py-2 text-sm">
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}
