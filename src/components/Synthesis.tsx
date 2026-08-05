import { synthesis } from '../data/council'
import { Reveal } from './Reveal'

export function Synthesis() {
  return (
    <section
      id="synthesis"
      data-seat="synthesis"
      className="council-section relative border-t border-neutral-800 bg-gradient-to-b from-abyss to-[#050810] px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-body text-xs tracking-[0.4em] text-council-dim uppercase">
            Synthesis
          </p>
          <h2 className="text-glow mt-4 font-display text-4xl font-medium text-neutral-50 sm:text-5xl">
            Shared Motifs
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-neutral-400">
            Two thousand years, four language families, one recurring shape.
            Mainstream scholarship treats this constellation not as
            coincidence, but as evidence of direct inheritance.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-10">
          {synthesis.map((motif, i) => (
            <Reveal key={motif.label} delayMs={i * 120}>
              <li className="flex gap-6">
                <span className="font-display text-2xl text-council-dim">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl text-neutral-100">
                    {motif.label}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-neutral-400">
                    {motif.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
