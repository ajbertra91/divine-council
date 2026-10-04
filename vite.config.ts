import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const site = 'https://ajbertra91.github.io/divine-council/'
const sourcesTitle = 'Sources and Research | The Divine Council'
const sourcesDescription =
  'Research notes and primary sources for divine council theology: Psalm 82, Deuteronomy 32, Ugaritic texts, and Second Temple literature.'

// GitHub Pages serves static files only. Emit a /sources/ page with its own
// head tags so crawlers see unique metadata without running JavaScript.
const sourcesPage = (): Plugin => ({
  name: 'sources-page',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const page = bundle['index.html']
    if (page?.type !== 'asset') return
    const html = String(page.source)
      .replace(/<title>.*?<\/title>/, `<title>${sourcesTitle}</title>`)
      .replace(
        /(<meta name="description" content=")[^"]*"/,
        `$1${sourcesDescription}"`,
      )
      .replace(
        /(<meta (?:property|name)="(?:og|twitter):title" content=")[^"]*"/g,
        `$1${sourcesTitle}"`,
      )
      .replace(
        /(<meta (?:property|name)="(?:og|twitter):description" content=")[^"]*"/g,
        `$1${sourcesDescription}"`,
      )
      .replace(
        /(<link rel="canonical" href=")[^"]*"/,
        `$1${site}sources"`,
      )
      .replace(
        /(<meta property="og:url" content=")[^"]*"/,
        `$1${site}sources"`,
      )
    this.emitFile({ type: 'asset', fileName: 'sources/index.html', source: html })
  },
})

const base = '/divine-council/'

export default defineConfig({
  base,
  plugins: [
    react(),
    sourcesPage(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'The Divine Council',
        short_name: 'Divine Council',
        description:
          'The heavenly assembly motif across the Hebrew Bible, Second Temple literature, and Mesopotamian texts.',
        start_url: base,
        scope: base,
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#111111',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
