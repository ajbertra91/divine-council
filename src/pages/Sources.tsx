import research from '../../research/divine-council-theology.md?raw'
import { MarkdownDocument } from '../lib/markdown'

export function Sources() {
  return (
    <main className="bg-abyss">
      <div className="rim-light pointer-events-none fixed inset-0" />
      <header className="relative mx-auto max-w-3xl px-6 pt-16">
        <a
          href={import.meta.env.BASE_URL}
          className="font-body text-xs tracking-[0.3em] text-council-dim uppercase transition-colors hover:text-council"
        >
          ← Return to the Council
        </a>
      </header>

      <article className="relative mx-auto max-w-3xl px-6 pb-32">
        <MarkdownDocument source={research} />
      </article>

      <footer className="border-t border-neutral-900 px-6 py-16 text-center">
        <a
          href={import.meta.env.BASE_URL}
          className="font-body text-xs tracking-[0.3em] text-council-dim uppercase transition-colors hover:text-council"
        >
          ← Return to the Council
        </a>
      </footer>
    </main>
  )
}
