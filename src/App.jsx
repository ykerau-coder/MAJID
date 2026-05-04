import React from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import {
  HomePage, PortfolioPage, PricingPage, BookingPage,
  FaqPage, ContactPage, ReviewsPage, AboutPage,
} from './pages.jsx'
import { TweaksPanel, TweakSection, TweakRadio, useTweaks } from './tweaks/TweaksPanel.jsx'

const TWEAK_DEFAULTS = {
  accentColor: '#b85a3a',
  portfolioGrid: 'editorial',
}

const ACCENT_PRESETS = [
  { v: '#b85a3a', name: 'terracotta' },
  { v: '#1c1916', name: 'noir' },
  { v: '#9a7a4a', name: 'doré' },
  { v: '#7a8a5a', name: 'olive' },
  { v: '#8c3a4a', name: 'bordeaux' },
  { v: '#3a5a7a', name: 'bleu nuit' },
]

const GRID_OPTIONS = [
  { value: 'editorial', label: 'éditorial' },
  { value: 'mosaic', label: 'mosaïque' },
  { value: 'regular', label: 'régulière' },
]

const PAGES = {
  accueil: HomePage,
  portfolio: PortfolioPage,
  prestations: PricingPage,
  reservation: BookingPage,
  faq: FaqPage,
  contact: ContactPage,
  temoignages: ReviewsPage,
  equipe: AboutPage,
}

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS)
  const [route, setRoute] = React.useState(() => {
    const h = location.hash.replace('#', '')
    return PAGES[h] ? h : 'accueil'
  })
  const [menuOpen, setMenuOpen] = React.useState(false)

  const navigate = React.useCallback((r) => {
    setRoute(r)
    if (location.hash !== '#' + r) location.hash = r
    window.scrollTo({ top: 0, behavior: 'instant' })
    setMenuOpen(false)
  }, [])

  React.useEffect(() => {
    const onHash = () => {
      const h = location.hash.replace('#', '')
      if (PAGES[h]) setRoute(h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accentColor)
    document.documentElement.style.setProperty('--accent-2', tweaks.accentColor)
  }, [tweaks.accentColor])

  React.useEffect(() => {
    document.body.classList.toggle('locked', menuOpen)
  }, [menuOpen])

  const Page = PAGES[route] || HomePage

  return (
    <>
      <Nav route={route} navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <Page accent={tweaks.accentColor} gridStyle={tweaks.portfolioGrid} navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Couleur d'accent">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {ACCENT_PRESETS.map(p => (
              <button key={p.v} onClick={() => setTweak('accentColor', p.v)} style={{
                border: tweaks.accentColor === p.v ? '2px solid #1a1a1a' : '1px solid rgba(0,0,0,0.2)',
                background: 'white', borderRadius: 6, padding: '6px 8px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: 'inherit', fontSize: 12,
              }}>
                <span style={{ width: 14, height: 14, borderRadius: '50%', background: p.v }} />
                {p.name}
              </button>
            ))}
          </div>
        </TweakSection>
        <TweakSection label="Style de grille du portfolio">
          <TweakRadio
            value={tweaks.portfolioGrid}
            options={GRID_OPTIONS}
            onChange={v => setTweak('portfolioGrid', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  )
}
