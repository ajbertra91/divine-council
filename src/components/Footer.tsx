export function Footer() {
  return (
    <footer className="border-t border-neutral-900 px-6 py-16 text-center">
      <p className="mx-auto max-w-md font-body text-xs leading-relaxed text-neutral-600">
        Primary texts via Sefaria and the Dead Sea Scrolls critical editions.
        Scholarship drawn principally from Michael Heiser, Amar Annus, E.
        Theodore Mullen, and Frank Moore Cross. Full citations and sources on
        the{' '}
        <a
          href={`${import.meta.env.BASE_URL}sources`}
          className="text-council-dim underline decoration-council-dim underline-offset-4 transition-colors hover:text-council"
        >
          sources page
        </a>
        .
      </p>
    </footer>
  )
}
