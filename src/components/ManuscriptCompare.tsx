import type { ManuscriptWitness } from '../data/council'
import { Reveal } from './Reveal'

export function ManuscriptCompare({
  witnesses,
}: {
  witnesses: ManuscriptWitness[]
}) {
  return (
    <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
      {witnesses.map((witness, i) => (
        <Reveal key={witness.source} delayMs={i * 150}>
          <div className="h-full bg-abyss p-6">
            <p className="font-body text-[0.65rem] tracking-[0.25em] text-ember uppercase">
              {witness.source}
            </p>
            <p
              dir="rtl"
              lang="he"
              className="mt-4 font-hebrew text-xl leading-relaxed text-council"
            >
              {witness.reading}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {witness.note}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
