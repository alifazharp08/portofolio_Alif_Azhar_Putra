import type { Dict } from "@/lib/copy"

export function Bio({ t }: { t: Dict }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.bio.heading}</h2>
      <p className="text-muted-foreground">{t.bio.body}</p>
    </div>
  )
}
