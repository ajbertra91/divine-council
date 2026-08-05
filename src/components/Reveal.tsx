import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  delayMs?: number
  className?: string
}

export function Reveal({ children, delayMs = 0, className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${className} ${
        visible
          ? 'translate-y-0 opacity-100 blur-0'
          : 'translate-y-8 opacity-0 blur-[2px]'
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
