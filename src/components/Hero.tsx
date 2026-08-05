export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-abyss px-6 text-center">
      <div className="rim-light pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[70vh] w-[1px] -translate-x-1/2"
        style={{
          background:
            'linear-gradient(to bottom, rgba(111,183,255,0.7), transparent)',
        }}
      />

      <p className="mb-6 font-body text-xs tracking-[0.5em] text-council/70 uppercase">
        עֲדַת אֵל &nbsp;·&nbsp; ba‘ădat ’ēl
      </p>

      <h1 className="text-glow font-display text-5xl font-medium tracking-wide text-neutral-50 sm:text-7xl md:text-8xl">
        The Divine Council
      </h1>

      <p className="mt-8 max-w-xl font-display text-lg italic text-neutral-400 sm:text-xl">
        "God stands in the divine assembly, pronouncing judgment among the
        divine beings."
      </p>
      <p className="mt-2 font-body text-xs tracking-[0.3em] text-neutral-600 uppercase">
        Psalm 82:1
      </p>

      <div className="mt-20 flex flex-col items-center gap-3 text-neutral-500">
        <span className="font-body text-[0.65rem] tracking-[0.4em] uppercase">
          Descend
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-council to-transparent" />
      </div>
    </section>
  )
}
