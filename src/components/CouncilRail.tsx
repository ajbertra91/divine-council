import type { Section } from '../data/council'

type CouncilRailProps = {
  sections: Section[]
  activeId: string | null
}

export function CouncilRail({ sections, activeId }: CouncilRailProps) {
  return (
    <nav
      aria-label="Council seats"
      className="fixed top-1/2 right-4 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 sm:right-6 md:flex"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
            aria-current={isActive}
          >
            <span
              className={`font-body text-[0.6rem] tracking-[0.2em] uppercase transition-all duration-500 ${
                isActive
                  ? 'text-council opacity-100'
                  : 'text-neutral-600 opacity-0 group-hover:opacity-100'
              }`}
            >
              {section.kicker.split(' ')[0]}
            </span>
            <span
              className={`h-2 w-2 rounded-full border transition-all duration-500 ${
                isActive
                  ? 'scale-125 border-council bg-council shadow-[0_0_10px_2px_rgba(111,183,255,0.8)]'
                  : 'border-neutral-600 bg-transparent group-hover:border-council-dim'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
