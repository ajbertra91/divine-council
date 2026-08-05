import { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import { CouncilRail } from '../components/CouncilRail'
import { SectionBlock } from '../components/SectionBlock'
import { Synthesis } from '../components/Synthesis'
import { Footer } from '../components/Footer'
import { sections } from '../data/council'

export function Home() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.council-section',
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-abyss">
      <Hero />
      <CouncilRail sections={sections} activeId={activeId} />
      {sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}
      <Synthesis />
      <Footer />
    </main>
  )
}
