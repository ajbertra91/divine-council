import type { Section } from '../data/council'
import { Reveal } from './Reveal'
import { ManuscriptCompare } from './ManuscriptCompare'
import { toRoman } from './roman'

// These two source images are already dark/low-contrast. Standard banner
// darkening (filter + vignette) crushes them to near-black. Lighter treatment
// for these two only — keeps them legible without changing the other 6.
const DARK_SOURCE_SECTIONS = new Set(['genesis-3', 'watchers'])

export function SectionBlock({ section }: { section: Section }) {
  const isDarkSource = DARK_SOURCE_SECTIONS.has(section.id)
  return (
    <section
      id={section.id}
      data-seat={section.id}
      className="council-section relative mx-auto max-w-3xl px-6 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-council/10 blur-3xl"
      />

      {section.image && (
        <Reveal className="relative left-1/2 -mb-8 h-[42vh] w-screen -translate-x-1/2 sm:h-[56vh]">
          <img
            src={`${import.meta.env.BASE_URL}${section.image.src.replace(/^\//, '')}`}
            alt={section.image.alt}
            className={
              isDarkSource
                ? 'h-full w-full object-cover [filter:grayscale(0.35)_brightness(0.95)_contrast(1.15)_saturate(0.75)]'
                : 'h-full w-full object-cover [filter:grayscale(0.35)_brightness(0.55)_contrast(1.1)_saturate(0.75)]'
            }
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-abyss via-transparent to-abyss"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: isDarkSource
                ? 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(2,2,4,0) 0%, rgba(2,2,4,0.55) 100%)'
                : 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(2,2,4,0) 0%, rgba(2,2,4,0.85) 100%)',
            }}
          />
        </Reveal>
      )}

      <Reveal>
        <p className="font-body text-xs tracking-[0.4em] text-council-dim uppercase">
          {toRoman(section.seat)} &nbsp;·&nbsp; {section.kicker}
        </p>
        <h2 className="mt-4 text-glow font-display text-4xl font-medium text-neutral-50 sm:text-5xl">
          {section.title}
        </h2>
      </Reveal>

      <div className="mt-8 space-y-5">
        {section.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delayMs={100 + i * 100}>
            <p className="font-body text-base leading-relaxed text-neutral-300 sm:text-lg">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>

      {section.quotes && (
        <div className="mt-10 space-y-8 border-l border-council-dim pl-6">
          {section.quotes.map((quote, i) => (
            <Reveal key={i} delayMs={200 + i * 150}>
              <blockquote>
                {quote.hebrew && (
                  <p
                    dir="rtl"
                    lang="he"
                    className="mb-3 font-hebrew text-xl leading-loose text-council sm:text-2xl"
                  >
                    {quote.hebrew}
                  </p>
                )}
                <p className="font-display text-lg italic leading-relaxed text-neutral-200 sm:text-xl">
                  "{quote.translation}"
                </p>
                <cite className="mt-2 block font-body text-xs tracking-[0.2em] text-neutral-600 uppercase not-italic">
                  {quote.citation}
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      )}

      {section.manuscripts && (
        <ManuscriptCompare witnesses={section.manuscripts} />
      )}

      {section.list && (
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          {section.list.map((item, i) => (
            <Reveal key={item.label} delayMs={150 + i * 100}>
              <div className="border-t border-neutral-800 pt-4">
                <dt className="font-display text-lg text-ember">
                  {item.label}
                </dt>
                <dd className="mt-1 font-body text-sm leading-relaxed text-neutral-400">
                  {item.text}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      )}
    </section>
  )
}
