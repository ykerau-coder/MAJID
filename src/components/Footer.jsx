import React from 'react'

const NAV_LINKS = [
  ['portfolio', 'Portfolio'],
  ['prestations', 'Prestations & tarifs'],
  ['reservation', 'Réserver une date'],
  ['temoignages', 'Témoignages'],
  ['equipe', "L'équipe"],
  ['faq', 'FAQ'],
]

export default function Footer({ navigate }) {
  const onLink = (e, id) => { e.preventDefault(); navigate(id) }
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ color: 'var(--paper)', marginBottom: 14 }}>MAJID <em>mariage</em></div>
            <p>Photographie de mariage, baptême et grandes réceptions à Marseille et 150 km autour. Une équipe de 3 associés. 12 ans d'histoires.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            {NAV_LINKS.map(([id, l]) => (
              <React.Fragment key={id}>
                <a href={`#${id}`} onClick={(e) => onLink(e, id)}>{l}</a><br />
              </React.Fragment>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@majidmariage.fr">hello@majidmariage.fr</a><br />
            <a href="tel:+33600000000">+33 6 ·· ·· ·· ··</a><br />
            <p style={{ marginTop: 8 }}>Studio à Marseille<br />Déplacements 150 km</p>
          </div>
          <div>
            <h4>Suivre</h4>
            <a href="#">Instagram</a><br />
            <a href="#">Pinterest</a><br />
            <a href="#">Mariages.net</a><br />
            <a href="#">Vimeo</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 MAJID MARIAGE — tous droits réservés</span>
          <span>Mentions légales · CGV · Confidentialité</span>
        </div>
      </div>
    </footer>
  )
}
