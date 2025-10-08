export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Select Language</h1>
        <div className="flex items-center justify-center gap-4">
          <a href="/en" className="underline underline-offset-4">
            English
          </a>
          <a href="/id" className="underline underline-offset-4">
            Bahasa Indonesia
          </a>
        </div>
      </div>
    </main>
  )
}
