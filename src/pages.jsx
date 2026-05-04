import React from 'react'
import {
  PHOTOS, thumb, PORTFOLIO_ITEMS, TESTIMONIALS, FAQ_DATA, FAQ_CATS,
  SERVICES, FORMULAS, PRICING_ROWS, OPTIONS_LIST,
  monthName, startWeekday, daysInMonth, BUSY,
} from './data.js'

// ─── HOME ───
export const HomePage = ({ gridStyle, navigate }) => (
  <div>
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Photographe · Marseille +150 km</span>
          <h1 className="h1">Vos plus<br /><em>belles</em><br />heures, pour l'éternité.</h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: 460 }}>
            Mariages, baptêmes, grandes réceptions. Une équipe de 3 associés, douze ans derrière l'objectif. Aucun imprévu — prestation garantie.
          </p>
          <div className="hero-actions">
            <button className="btn btn-dark" onClick={() => navigate('portfolio')}>Voir le portfolio →</button>
            <button className="btn btn-ghost" onClick={() => navigate('reservation')}>Vérifier ma date</button>
          </div>
          <div className="hero-meta">
            <div><strong>12 ans</strong>derrière l'objectif</div>
            <div><strong>380+</strong>événements couverts</div>
            <div><strong>4,9 / 5</strong>sur 87 avis</div>
          </div>
        </div>
        <div className="hero-photos">
          <div className="hero-photo-1" style={{ backgroundImage: `url(${PHOTOS.hero1})` }}></div>
          <div className="hero-photo-2" style={{ backgroundImage: `url(${PHOTOS.kiss})` }}></div>
          <div className="hero-stamp">
            <div className="num">4,9★</div>
            <div className="lbl">87 avis vérifiés</div>
          </div>
        </div>
      </div>
    </section>

    <section className="trust">
      <div className="trust-track">
        {[...Array(2)].map((_, k) => (
          <div key={k}>
            <span>12 ANS D'EXPÉRIENCE</span><span className="dot">●</span>
            <span>3 ASSOCIÉS — JAMAIS SEUL</span><span className="dot">●</span>
            <span>GALERIE SOUS 7 JOURS</span><span className="dot">●</span>
            <span>MARSEILLE +150 KM</span><span className="dot">●</span>
            <span>OPTION VIDÉO & LIVRE PHOTO</span><span className="dot">●</span>
          </div>
        ))}
      </div>
    </section>

    <section className="manifesto">
      <div className="container-narrow">
        <span className="eyebrow">Notre manière de faire</span>
        <p className="lead-big">« Une journée comme la vôtre ne se rejoue pas. Mon métier, depuis douze ans, c'est de la rendre vraie, intime, sans pose forcée. »</p>
        <div className="manifesto-sig">— MAJID, PHOTOGRAPHE PRINCIPAL</div>
      </div>
    </section>

    <section className="services">
      <div className="container">
        <div className="services-head">
          <span className="eyebrow">Trois moments, une attention</span>
          <h2 className="h2" style={{ marginTop: 16 }}>Ce que nous <em>photographions.</em></h2>
        </div>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div key={s.num} className="service-card" onClick={() => navigate('portfolio')}>
              <div className="service-card-img" style={{ backgroundImage: `url(${s.img})` }}></div>
              <div className="service-card-content">
                <div className="num">{s.num} / 03</div>
                <div className="title">{s.title}</div>
                <div className="desc">{s.desc}</div>
                <div className="arrow">Voir des exemples →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="portfolio-tease">
      <div className="container">
        <div className="portfolio-head">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="h2" style={{ marginTop: 16 }}>Mariages <em>récents.</em></h2>
          </div>
          <a className="btn-link" onClick={() => navigate('portfolio')}>Tout le portfolio →</a>
        </div>
        <div className={'pf-grid ' + gridStyle}>
          {PORTFOLIO_ITEMS.slice(0, 6).map(it => (
            <div key={it.id} className="pf-tile" style={{ backgroundImage: `url(${thumb(it.img, 800)})` }}></div>
          ))}
        </div>
      </div>
    </section>

    <section className="numbers">
      <div className="container">
        <div className="numbers-grid">
          {[['12', "années derrière l'objectif"], ['380+', 'événements couverts'], ['3', 'associés, prestation garantie'], ['7 j.', 'galerie en ligne']].map(([n, l], i) => (
            <div key={i} className="number-cell">
              <div className="n">{n}</div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="testimonials">
      <div className="container">
        <span className="eyebrow">Ils nous ont fait confiance</span>
        <h2 className="h2" style={{ marginTop: 16 }}>« On vous remercie <em>encore.</em> »</h2>
        <div className="testimonials-track">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="q">« {t.q} »</div>
              <div className="who">{t.who}</div>
              <div className="ctx">{t.ctx}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <a className="btn-link" onClick={() => navigate('temoignages')}>Tous les avis (87) →</a>
        </div>
      </div>
    </section>

    <section className="cta-band" style={{ '--cta-img': `url(${PHOTOS.candles})` }}>
      <div className="container-narrow">
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>Disponible été 2026</span>
        <h2 className="h2">Et si on parlait <em>de votre journée ?</em></h2>
        <p className="lead">Vérifiez ma disponibilité en ligne, puis recevez un devis personnalisé sous 24 h.</p>
        <button className="btn btn-primary" onClick={() => navigate('reservation')}>Vérifier ma date →</button>
      </div>
    </section>
  </div>
)

// ─── PORTFOLIO ───
export const PortfolioPage = ({ gridStyle, navigate }) => {
  const [filter, setFilter] = React.useState('tout')
  const items = filter === 'tout' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.cat === filter)
  return (
    <div>
      <section className="pf-hero">
        <div className="container-narrow">
          <span className="eyebrow">Portfolio</span>
          <h1 className="h1" style={{ marginTop: 16 }}>380 événements,<br /><em>une histoire chacun.</em></h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Une sélection d'instants captés entre 2023 et 2026, à Marseille, en Provence et sur la Côte d'Azur.
          </p>
        </div>
      </section>
      <div className="container">
        <div className="pf-filters">
          {[{ id: 'tout', l: 'Tout' }, { id: 'mariage', l: 'Mariages' }, { id: 'bapteme', l: 'Baptêmes' }, { id: 'evenement', l: 'Grands événements' }].map(f => (
            <button key={f.id} className={'pf-filter' + (filter === f.id ? ' on' : '')} onClick={() => setFilter(f.id)}>{f.l}</button>
          ))}
        </div>
        <div className={'pf-grid ' + gridStyle}>
          {items.map(it => (
            <div key={it.id} className="pf-tile" style={{ backgroundImage: `url(${thumb(it.img, 800)})` }}></div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <button className="btn btn-ghost" onClick={() => navigate('reservation')}>Vérifier ma date →</button>
        </div>
      </div>
    </div>
  )
}

// ─── PRICING ───
export const PricingPage = ({ navigate }) => {
  const [picked, setPicked] = React.useState('ceremonie')
  const [opts, setOpts] = React.useState({})
  const formula = FORMULAS.find(f => f.id === picked)
  const optsTotal = OPTIONS_LIST.reduce((s, o) => s + (opts[o.id] ? o.p : 0), 0)
  const total = formula.price + optsTotal

  const renderCell = (v, featured) => {
    const className = 'v' + (featured ? ' featured' : '')
    if (v === true) return <div className={className}><span className="check">✓</span></div>
    if (v === false) return <div className={className}><span className="dash">—</span></div>
    return <div className={className}>{v}</div>
  }

  return (
    <div>
      <section className="pricing-hero">
        <div className="container-narrow">
          <span className="eyebrow">Prestations & tarifs</span>
          <h1 className="h1" style={{ marginTop: 16 }}>Trois formules,<br /><em>modulables.</em></h1>
          <p className="lead" style={{ marginTop: 20, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Tarifs tout compris pour Marseille et 150 km autour. Au-delà, devis personnalisé.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="pricing-table">
          <div className="pricing-row head">
            <div></div>
            {FORMULAS.map(f => (
              <div key={f.id} className={'formula' + (f.featured ? ' featured' : '')}>
                <div className="name">{f.name}</div>
                <div className="price">{f.price.toLocaleString('fr-FR')} €</div>
              </div>
            ))}
          </div>
          {PRICING_ROWS.map((r, i) => (
            <div key={i} className="pricing-row">
              <div className="label">{r.label}<small>{r.sub}</small></div>
              {renderCell(r.e, false)}
              {renderCell(r.s, true)}
              {renderCell(r.p, false)}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Configurez votre prestation</span>
            <h2 className="h2" style={{ marginTop: 12 }}>Choisissez votre <em>formule.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }} className="formula-picker">
            {FORMULAS.map(f => (
              <button key={f.id} onClick={() => setPicked(f.id)}
                style={{
                  padding: '24px 20px', borderRadius: 8, cursor: 'pointer', textAlign: 'center',
                  background: picked === f.id ? 'var(--ink)' : 'white',
                  color: picked === f.id ? 'var(--paper)' : 'var(--ink)',
                  border: '1px solid ' + (picked === f.id ? 'var(--ink)' : 'var(--hairline)'),
                  fontFamily: 'inherit', transition: 'all 0.2s',
                }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 500 }}>{f.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: 'var(--accent)', marginTop: 4 }}>{f.price.toLocaleString('fr-FR')} €</div>
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>couverture {f.hours} h</div>
              </button>
            ))}
          </div>

          <h3 className="h3" style={{ marginBottom: 16 }}>Options à la carte</h3>
          <div className="options-grid">
            {OPTIONS_LIST.map(o => (
              <div key={o.id} className={'option' + (opts[o.id] ? ' on' : '')} onClick={() => setOpts(prev => ({ ...prev, [o.id]: !prev[o.id] }))}>
                <div className="option-check">{opts[o.id] ? '✓' : ''}</div>
                <div className="option-body">
                  <div className="option-title">{o.t}</div>
                  <div className="option-desc">{o.d}</div>
                </div>
                <div className="option-price">+ {o.p} €</div>
              </div>
            ))}
          </div>

          <div className="total-bar">
            <div>
              <div className="lab">Total estimé</div>
              <small>{formula.name} + {Object.values(opts).filter(Boolean).length} option(s)</small>
            </div>
            <div className="total">{total.toLocaleString('fr-FR')} €</div>
            <button className="btn btn-primary" onClick={() => navigate('reservation')}>Réserver cette config →</button>
          </div>
        </div>

        <div style={{ padding: '100px 0 80px', textAlign: 'center' }}>
          <p className="lead" style={{ maxWidth: 540, margin: '0 auto' }}>
            Une demande spécifique ? Mariage à l'étranger, cérémonie sur deux jours, événement corporate ?
          </p>
          <button className="btn btn-ghost" style={{ marginTop: 24 }} onClick={() => navigate('contact')}>Demander un devis sur mesure</button>
        </div>
      </div>
    </div>
  )
}

// ─── BOOKING ───
export const BookingPage = () => {
  const [year, setYear] = React.useState(2026)
  const [month, setMonth] = React.useState(5)
  const [picked, setPicked] = React.useState({ y: 2026, m: 5, d: 12 })
  const [evType, setEvType] = React.useState('mariage')
  const [duration, setDuration] = React.useState('8h')

  const busy = BUSY[`${year}-${month}`] || []
  const today = new Date()
  const isToday = (d) => year === today.getFullYear() && month === today.getMonth() && d === today.getDate()
  const start = startWeekday(year, month)
  const ndays = daysInMonth(year, month)

  const cells = []
  for (let i = 0; i < start; i++) cells.push({ empty: true })
  for (let d = 1; d <= ndays; d++) {
    const isBusy = busy.includes(d)
    const isPicked = picked.y === year && picked.m === month && picked.d === d
    cells.push({ d, busy: isBusy, picked: isPicked, today: isToday(d) })
  }

  const next = () => {
    let m = month + 1, y = year
    if (m > 11) { m = 0; y++ }
    setMonth(m); setYear(y)
  }
  const prev = () => {
    let m = month - 1, y = year
    if (m < 0) { m = 11; y-- }
    setMonth(m); setYear(y)
  }

  const formula = duration === '4h' ? FORMULAS[0] : duration === '8h' ? FORMULAS[1] : FORMULAS[2]
  const acompte = Math.round(formula.price * 0.3)

  const dateLabel = picked
    ? `${['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'][(new Date(picked.y, picked.m, picked.d).getDay() + 6) % 7]} ${picked.d} ${monthName(picked.m).toLowerCase()} ${picked.y}`
    : 'Sélectionnez une date'

  return (
    <div>
      <section className="booking-hero">
        <div className="container-narrow">
          <span className="eyebrow">Réservation</span>
          <h1 className="h1" style={{ marginTop: 16 }}>Choisissez<br /><em>votre jour.</em></h1>
        </div>
        <div className="booking-steps">
          <div className="step-dot on"><div className="num">1</div><span className="lab">Date</span></div>
          <div className="step-sep"></div>
          <div className="step-dot"><div className="num">2</div><span className="lab">Prestation</span></div>
          <div className="step-sep"></div>
          <div className="step-dot"><div className="num">3</div><span className="lab">Vos infos</span></div>
          <div className="step-sep"></div>
          <div className="step-dot"><div className="num">4</div><span className="lab">Confirmation</span></div>
        </div>
      </section>

      <div className="container">
        <div className="booking-grid">
          <div className="cal">
            <div className="cal-head">
              <button className="cal-nav" onClick={prev} aria-label="Mois précédent">‹</button>
              <h3>{monthName(month)} {year}</h3>
              <button className="cal-nav" onClick={next} aria-label="Mois suivant">›</button>
            </div>
            <div className="cal-dow">
              <div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>
            </div>
            <div className="cal-grid">
              {cells.map((c, i) => {
                if (c.empty) return <div key={i} className="cal-day empty"></div>
                const cls = 'cal-day ' + (c.busy ? 'busy' : 'free') + (c.picked ? ' picked' : '') + (c.today ? ' today' : '')
                return (
                  <div key={i} className={cls} onClick={() => !c.busy && setPicked({ y: year, m: month, d: c.d })}>
                    {c.d}
                  </div>
                )
              })}
            </div>
            <div className="cal-legend">
              <div><span className="swatch free"></span><span>disponible</span></div>
              <div><span className="swatch picked"></span><span>sélectionné</span></div>
              <div><span className="swatch busy"></span><span>indisponible</span></div>
            </div>
          </div>

          <div className="booking-side">
            <h3>{dateLabel}</h3>
            <div className="sub">{picked && !busy.includes(picked.d) ? '1 créneau disponible' : 'choisir une autre date'}</div>

            <div className="field-label">Type d'événement</div>
            <div className="pill-row">
              {[{ id: 'mariage', l: 'Mariage' }, { id: 'bapteme', l: 'Baptême' }, { id: 'evenement', l: 'Grand événement' }].map(o => (
                <button key={o.id} className={'pill' + (evType === o.id ? ' on' : '')} onClick={() => setEvType(o.id)}>{o.l}</button>
              ))}
            </div>

            <div className="field-label">Durée souhaitée</div>
            <div className="pill-row">
              {['4h', '8h', 'journée', '2 jours'].map(d => (
                <button key={d} className={'pill' + (duration === d ? ' on' : '')} onClick={() => setDuration(d)}>{d}</button>
              ))}
            </div>

            <div className="booking-foot">
              <div className="acompte">
                Acompte 30 % à la réservation
                <strong>{acompte.toLocaleString('fr-FR')} €</strong>
              </div>
              <button className="btn btn-primary">Continuer →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── FAQ ───
export const FaqPage = ({ navigate }) => {
  const [cat, setCat] = React.useState('all')
  const [open, setOpen] = React.useState(0)
  const items = cat === 'all' ? FAQ_DATA : FAQ_DATA.filter(f => f.cat === cat)
  return (
    <div>
      <section className="faq-hero">
        <div className="container-narrow">
          <span className="eyebrow">Foire aux questions</span>
          <h1 className="h1" style={{ marginTop: 16 }}>Tout ce que vous<br />nous demandez <em>vraiment.</em></h1>
        </div>
      </section>
      <div className="container">
        <div className="faq-layout">
          <div className="faq-cats">
            {FAQ_CATS.map(c => (
              <a key={c.id} className={'faq-cat' + (cat === c.id ? ' on' : '')} onClick={() => { setCat(c.id); setOpen(-1) }}>{c.label}</a>
            ))}
          </div>
          <div>
            <div className="faq-list">
              {items.map((f, i) => (
                <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                    <span>{f.q}</span>
                    <span className="plus">+</span>
                  </button>
                  <div className="faq-a"><p>{f.a}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, padding: 28, background: 'var(--paper-2)', border: '1px dashed var(--ink-2)', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div className="h3" style={{ fontSize: 22 }}>Une question hors liste ?</div>
                <div style={{ fontSize: 14, color: 'var(--soft)', marginTop: 4 }}>Réponse sous 24 h, par mail ou téléphone.</div>
              </div>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>Nous écrire →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── CONTACT ───
export const ContactPage = ({ navigate }) => {
  const [sent, setSent] = React.useState(false)
  return (
    <div>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="eyebrow">Contact</span>
              <h1 className="h2" style={{ marginTop: 16 }}>Parlons de<br /><em>votre journée.</em></h1>
              <p>Réponse sous 24 h, du lundi au samedi. Pour vérifier ma disponibilité directement, <a onClick={() => navigate('reservation')} style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent)', cursor: 'pointer' }}>consultez le calendrier en ligne</a>.</p>

              <div className="contact-card">
                <div className="contact-icon">✉</div>
                <div>
                  <div className="lab">Email</div>
                  <div className="val mono">hello@majidmariage.fr</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">☎</div>
                <div>
                  <div className="lab">Téléphone</div>
                  <div className="val mono">+33 6 ·· ·· ·· ··</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">⌖</div>
                <div>
                  <div className="lab">Studio</div>
                  <div className="val">Marseille — déplacements 150 km</div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ fontSize: 40, color: 'var(--accent)' }}>✓</div>
                  <h3 className="h3" style={{ marginTop: 16 }}>Merci !</h3>
                  <p style={{ marginTop: 8 }}>Votre message est bien reçu. Réponse sous 24 h.</p>
                </div>
              ) : (
                <>
                  <div className="field-row">
                    <div className="field"><label>Prénom</label><input type="text" placeholder="Sarah" /></div>
                    <div className="field"><label>Nom</label><input type="text" placeholder="Martin" /></div>
                  </div>
                  <div className="field-row">
                    <div className="field"><label>Email</label><input type="email" placeholder="sarah@email.fr" /></div>
                    <div className="field"><label>Téléphone</label><input type="tel" placeholder="06 ·· ·· ·· ··" /></div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Type d'événement</label>
                      <select><option>Mariage</option><option>Baptême</option><option>Grand événement</option><option>Autre</option></select>
                    </div>
                    <div className="field"><label>Date envisagée</label><input type="date" /></div>
                  </div>
                  <div className="field"><label>Lieu (ville)</label><input type="text" placeholder="Cassis, Aix-en-Provence…" /></div>
                  <div className="field">
                    <label>Votre message</label>
                    <textarea placeholder="Parlez-nous de votre projet, de l'ambiance souhaitée, du nombre d'invités…"></textarea>
                  </div>
                  <label className="checkbox" style={{ marginBottom: 24 }}>
                    <input type="checkbox" defaultChecked />
                    <span>J'accepte d'être recontacté concernant ma demande.</span>
                  </label>
                  <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Envoyer ma demande →</button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── REVIEWS ───
export const ReviewsPage = ({ navigate }) => (
  <div>
    <section className="rv-hero">
      <div className="container-narrow">
        <span className="eyebrow">Avis & témoignages</span>
        <h1 className="h1" style={{ marginTop: 16 }}>« On vous remercie<br /><em>encore.</em> »</h1>
        <div className="rv-rating">
          <div className="num">4,9</div>
          <div style={{ textAlign: 'left' }}>
            <div className="stars">★ ★ ★ ★ ★</div>
            <div className="src">87 avis vérifiés · Google + Mariages.net</div>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="rv-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="rv-card">
            <div className="stars">★★★★★</div>
            <div className="q">« {t.q} »</div>
            <div>
              <div className="who">{t.who}</div>
              <div className="ctx">{t.ctx}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', padding: '60px 0 100px' }}>
        <button className="btn btn-primary" onClick={() => navigate('reservation')}>Réserver ma date →</button>
      </div>
    </div>
  </div>
)

// ─── ABOUT / EQUIPE ───
export const AboutPage = ({ navigate }) => (
  <div>
    <section className="about-hero">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-stack">
            <div className="about-photo main" style={{ backgroundImage: `url(${PHOTOS.bride})` }}></div>
            <div className="about-photo small" style={{ backgroundImage: `url(${PHOTOS.detail})` }}></div>
          </div>
          <div>
            <span className="eyebrow">L'équipe</span>
            <h1 className="h1" style={{ marginTop: 16 }}>Majid,<br />et deux paires<br /><em>d'yeux en plus.</em></h1>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7 }}>
              Photographe depuis 2014, j'ai couvert plus de 380 mariages entre Marseille, la Provence et la Côte d'Azur. Ce qui m'a fait rester dans ce métier, c'est l'idée simple qu'<strong style={{ color: 'var(--accent)' }}>une journée comme la vôtre ne se rejoue pas</strong>.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7 }}>
              Je travaille avec deux associés, Yanis et Élise. Nous sommes toujours trois sur le projet — un photographe principal, un binôme de secours, un coordinateur. Aucun imprévu : si l'un tombe, l'autre prend le relais. Prestation garantie.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
              <button className="btn btn-dark" onClick={() => navigate('reservation')}>Vérifier ma date →</button>
              <button className="btn btn-ghost" onClick={() => navigate('portfolio')}>Voir le travail</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="team-grid">
        {[
          { n: 'Majid', r: 'Photographe principal · 12 ans', b: "Œil principal sur tous les événements. Passionné par la lumière naturelle et les instants non posés.", p: PHOTOS.bouquet },
          { n: 'Yanis', r: 'Second photographe & vidéo', b: "Couvre les angles secondaires, tourne les films souvenirs. Spécialiste du noir & blanc.", p: PHOTOS.rings },
          { n: 'Élise', r: 'Coordination & retouche', b: "Pilote les plannings, retouche chaque image livrée. Garante du délai 7 jours.", p: PHOTOS.bridesmaids },
        ].map(m => (
          <div key={m.n} className="team-card">
            <div className="photo" style={{ backgroundImage: `url(${m.p})` }}></div>
            <div className="name">{m.n}</div>
            <div className="role">{m.r}</div>
            <div className="bio">{m.b}</div>
          </div>
        ))}
      </div>
    </div>

    <section className="guarantee">
      <div className="container">
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>Notre garantie</span>
        <h2 className="h2" style={{ color: 'white', marginTop: 16 }}>Trois engagements, <em>tenus.</em></h2>
        <div className="guarantee-grid">
          {[
            ['01', 'Trois associés, jamais seul', "Panne, maladie, météo : un binôme prend le relais. Aucun client laissé sans photographe."],
            ['02', 'Galerie sous 7 jours', "Photos retouchées, lien privé, accessible 1 an. Le livre photo arrive sous 6-8 semaines."],
            ['03', 'Tout compris', "Pas de frais cachés. Déplacement 150 km inclus. Devis transparent sous 24 h."],
          ].map(([n, t, p]) => (
            <div key={n} className="guarantee-card">
              <div className="num">{n}</div>
              <h4>{t}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
)
