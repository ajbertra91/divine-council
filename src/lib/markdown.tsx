import type { ReactNode } from 'react'

type Block =
  | { type: 'heading'; level: number; text: string }
  | { type: 'hr' }
  | { type: 'paragraph'; text: string }
  | { type: 'blockquote'; lines: string[] }
  | { type: 'list'; ordered: boolean; items: string[] }

const INLINE_PATTERN =
  /\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let key = 0

  for (const match of text.matchAll(INLINE_PATTERN)) {
    const index = match.index
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }

    const [full, bold, italic, code, linkText, linkHref] = match
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>)
    } else if (code !== undefined) {
      nodes.push(
        <code key={key++} className="rounded bg-neutral-900 px-1.5 py-0.5 font-hebrew text-[0.9em] text-council">
          {code}
        </code>,
      )
    } else if (linkText !== undefined) {
      nodes.push(
        <a
          key={key++}
          href={linkHref}
          target="_blank"
          rel="noreferrer"
          className="text-council underline decoration-council-dim underline-offset-4 hover:text-neutral-100"
        >
          {linkText}
        </a>,
      )
    } else if (italic !== undefined) {
      nodes.push(<em key={key++}>{italic}</em>)
    } else {
      nodes.push(full)
    }

    lastIndex = index + full.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export function parseMarkdown(source: string): Block[] {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const raw = lines[i]
    const line = raw.trim()

    if (line === '') {
      i++
      continue
    }

    const headingMatch = /^(#{1,6})\s+(.*)$/.exec(line)
    if (headingMatch) {
      blocks.push({ type: 'heading', level: headingMatch[1].length, text: headingMatch[2] })
      i++
      continue
    }

    if (line === '---') {
      blocks.push({ type: 'hr' })
      i++
      continue
    }

    if (line.startsWith('>')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''))
        i++
      }
      blocks.push({ type: 'blockquote', lines: quoteLines })
      continue
    }

    const bulletMatch = /^[-*]\s+(.*)$/.exec(line)
    if (bulletMatch) {
      const items: string[] = [bulletMatch[1]]
      i++
      while (i < lines.length) {
        const next = /^[-*]\s+(.*)$/.exec(lines[i].trim())
        if (!next) break
        items.push(next[1])
        i++
      }
      blocks.push({ type: 'list', ordered: false, items })
      continue
    }

    const orderedMatch = /^\d+\.\s+(.*)$/.exec(line)
    if (orderedMatch) {
      const items: string[] = [orderedMatch[1]]
      i++
      while (i < lines.length) {
        const next = /^\d+\.\s+(.*)$/.exec(lines[i].trim())
        if (!next) break
        items.push(next[1])
        i++
      }
      blocks.push({ type: 'list', ordered: true, items })
      continue
    }

    const paragraphLines: string[] = [line]
    i++
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,6})\s+/.test(lines[i].trim()) &&
      lines[i].trim() !== '---' &&
      !lines[i].trim().startsWith('>') &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      paragraphLines.push(lines[i].trim())
      i++
    }
    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') })
  }

  return blocks
}

export function MarkdownDocument({ source }: { source: string }) {
  const blocks = parseMarkdown(source)

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            if (block.level === 1) {
              return (
                <h1
                  key={i}
                  className="text-glow pt-4 font-display text-4xl font-medium text-neutral-50 sm:text-5xl"
                >
                  {renderInline(block.text)}
                </h1>
              )
            }
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  className="pt-10 font-display text-2xl font-medium text-neutral-50 sm:text-3xl"
                >
                  {renderInline(block.text)}
                </h2>
              )
            }
            return (
              <h3
                key={i}
                className="pt-4 font-display text-xl text-council sm:text-2xl"
              >
                {renderInline(block.text)}
              </h3>
            )
          }
          case 'hr':
            return <hr key={i} className="border-neutral-800" />
          case 'paragraph':
            return (
              <p
                key={i}
                className="font-body text-sm leading-relaxed text-neutral-300 sm:text-base"
              >
                {renderInline(block.text)}
              </p>
            )
          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="space-y-2 border-l border-council-dim pl-5"
              >
                {block.lines.map((line, j) => (
                  <p
                    key={j}
                    className="font-hebrew text-base leading-loose text-neutral-200"
                  >
                    {renderInline(line)}
                  </p>
                ))}
              </blockquote>
            )
          case 'list': {
            const Tag = block.ordered ? 'ol' : 'ul'
            return (
              <Tag
                key={i}
                className={`space-y-2 pl-5 font-body text-sm leading-relaxed text-neutral-300 sm:text-base ${
                  block.ordered ? 'list-decimal' : 'list-disc'
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="marker:text-council-dim">
                    {renderInline(item)}
                  </li>
                ))}
              </Tag>
            )
          }
          default:
            return null
        }
      })}
    </div>
  )
}
