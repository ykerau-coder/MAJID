// site-app.jsx — main app: routing + tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#b85a3a",
  "portfolioGrid": "editorial"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = [
  { v: '#b85a3a', name: 'terracotta' },
  { v: '#1c1916', name: 'noir' },
  { v: '#9a7a4a', name: 'doré' },
  { v: '#7a8a5a', name: 'olive' },
  { v: '#8c3a4a', name: 'bordeaux' },
  { v: '#3a5a7a', name: 'bleu nuit' },
];

const GRID_OPTIONS = [
  { value: 'editorial', label: 'éditorial' },
  { value: 'mosaic', label: 'mosaïque' },
  { value: 'regular', label: 'régulière' },
];

const PAGES = {
  accueil: HomePage,
  portfolio: PortfolioPage,
  prestations: PricingPage,
  reservation: BookingPage,
  faq: FaqPage,
  contact: ContactPage,
  temoignages: ReviewsPage,
  equipe: AboutPage,
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState(() => {
    const h = location.hash.replace('#', '');
    return PAGES[h] ? h : 'accueil';
  });

  const navigate = React.useCallback((r) => {
    setRoute(r);
    location.hash = r;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // sync hash → route on back/forward
  React.useEffect(() => {
    const onHash = () => {
      const h = location.hash.replace('#', '');
      if (PAGES[h]) setRoute(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // apply accent color to root
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accentColor);
    // derive a darker variant for hover
    document.documentElement.style.setProperty('--accent-2', tweaks.accentColor);
  }, [tweaks.accentColor]);

  // wire nav links + active state
  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('[data-link]');
      if (!a) return;
      e.preventDefault();
      navigate(a.getAttribute('data-link'));
      // close mobile menu
      document.getElementById('nav').classList.remove('menu-open');
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [navigate]);

  React.useEffect(() => {
    document.querySelectorAll('[data-link]').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-link') === route);
    });
  }, [route]);

  // burger
  React.useEffect(() => {
    const b = document.getElementById('burger');
    if (!b) return;
    const onClick = () => document.getElementById('nav').classList.toggle('menu-open');
    b.addEventListener('click', onClick);
    return () => b.removeEventListener('click', onClick);
  }, []);

  const Page = PAGES[route] || HomePage;

  return (
    <React.Fragment>
      <Page accent={tweaks.accentColor} gridStyle={tweaks.portfolioGrid} navigate={navigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Couleur d'accent">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {ACCENT_PRESETS.map(p => (
              <button key={p.v}
                onClick={() => setTweak('accentColor', p.v)}
                style={{
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
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('main')).render(<App />);
