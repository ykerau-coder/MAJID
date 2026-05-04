import React from 'react'

const LINKS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'prestations', label: 'Prestations' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'equipe', label: "L'équipe" },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ route, navigate, menuOpen, setMenuOpen }) {
  const onLink = (e, id) => { e.preventDefault(); navigate(id) }
  return (
    <nav className={'nav' + (menuOpen ? ' menu-open' : '')}>
      <div className="nav-inner">
        <a href="#accueil" className="logo" onClick={(e) => onLink(e, 'accueil')}>
          MAJID <em>mariage</em>
        </a>
        <div className="nav-links">
          {LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`}
               className={route === l.id ? 'active' : ''}
               onClick={(e) => onLink(e, l.id)}>{l.label}</a>
          ))}
        </div>
        <a href="#reservation" className="nav-cta" onClick={(e) => onLink(e, 'reservation')}>
          Vérifier ma date →
        </a>
        <button className="nav-burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
