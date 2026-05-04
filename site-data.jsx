// site-data.jsx — shared content & constants for the MAJID MARIAGE site.

const PHOTOS = {
  hero1: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop',
  hero2: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200&auto=format&fit=crop',
  bride: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&auto=format&fit=crop',
  ceremony: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&auto=format&fit=crop',
  kiss: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format&fit=crop',
  rings: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&auto=format&fit=crop',
  reception: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=1200&auto=format&fit=crop',
  baptism: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=1200&auto=format&fit=crop',
  gala: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&auto=format&fit=crop',
  confetti: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&auto=format&fit=crop',
  veil: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&auto=format&fit=crop',
  bouquet: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=900&auto=format&fit=crop',
  detail: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=900&auto=format&fit=crop',
  dance: 'https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=1200&auto=format&fit=crop',
  candles: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&auto=format&fit=crop',
  vows: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200&auto=format&fit=crop',
  bridesmaids: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&auto=format&fit=crop',
  table: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&auto=format&fit=crop',
  baby: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&auto=format&fit=crop',
  family: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop',
};

const PORTFOLIO_ITEMS = [
  { id: 1, cat: 'mariage', img: PHOTOS.ceremony, title: 'Sarah & Théo', loc: 'Cassis · juin 2025' },
  { id: 2, cat: 'mariage', img: PHOTOS.bride, title: 'Inès & Karim', loc: 'Aix · mai 2025' },
  { id: 3, cat: 'bapteme', img: PHOTOS.baptism, title: 'Baptême Léo', loc: 'Marseille · 2025' },
  { id: 4, cat: 'mariage', img: PHOTOS.kiss, title: 'Léa & Pierre', loc: 'Bandol · sept. 2024' },
  { id: 5, cat: 'evenement', img: PHOTOS.gala, title: 'Gala — 250 invités', loc: 'Marseille · 2024' },
  { id: 6, cat: 'mariage', img: PHOTOS.dance, title: 'Camille & Thomas', loc: 'Marseille · 2024' },
  { id: 7, cat: 'mariage', img: PHOTOS.veil, title: 'Émilie & Jules', loc: 'Cassis · 2024' },
  { id: 8, cat: 'evenement', img: PHOTOS.reception, title: 'Réception privée', loc: 'Aix · 2024' },
  { id: 9, cat: 'bapteme', img: PHOTOS.family, title: 'Baptême famille R.', loc: 'La Ciotat · 2024' },
  { id: 10, cat: 'mariage', img: PHOTOS.confetti, title: 'Anaïs & Rémi', loc: 'Bandol · 2024' },
  { id: 11, cat: 'mariage', img: PHOTOS.vows, title: 'Marion & David', loc: 'Marseille · 2023' },
  { id: 12, cat: 'mariage', img: PHOTOS.bridesmaids, title: 'Clara & Antoine', loc: 'Cassis · 2023' },
];

const TESTIMONIALS = [
  { who: 'Sarah & Théo', ctx: 'Mariage · Cassis · juin 2025', q: "Majid s'est rendu invisible toute la journée. Quand on a reçu la galerie 5 jours plus tard, on a pleuré. Tout y était." },
  { who: 'Inès & Karim', ctx: 'Mariage · Aix · mai 2025', q: "On cherchait un photographe sérieux et chaleureux. On a trouvé une équipe. Zéro stress, zéro imprévu." },
  { who: 'Famille Bertrand', ctx: 'Baptême · Marseille', q: "Les photos sont d'une douceur folle. On ne pensait pas pouvoir avoir ça pour un baptême." },
  { who: 'Léa & Pierre', ctx: 'Mariage · Bandol · sept. 2024', q: "Le 2ᵉ photographe nous a permis d'avoir TOUS les angles. Le livre photo est un objet magnifique." },
  { who: 'Société G.', ctx: 'Gala 250 invités', q: "Discret, rapide, livraison J+5. On les a déjà rebookés pour l'an prochain." },
  { who: 'Camille & Thomas', ctx: 'Mariage · Marseille', q: "Douze ans d'expérience, ça se voit. Il sait quand déclencher, sans jamais s'imposer." },
];

const FAQ_DATA = [
  { cat: 'reservation', q: "Comment se passe la réservation ?", a: "Vérifiez votre date sur le calendrier en ligne, puis remplissez une demande. Je vous envoie un devis personnalisé sous 24 h, suivi d'un contrat à signer numériquement. Un acompte de 30 % bloque définitivement la date." },
  { cat: 'reservation', q: "Y a-t-il un acompte ? Quelles modalités de paiement ?", a: "30 % à la signature pour bloquer la date, 40 % un mois avant l'événement, 30 % le jour J. Paiement par virement ou carte bancaire. Possibilité d'échelonner sur 3 ou 6 mois sans frais." },
  { cat: 'jour-j', q: "Que se passe-t-il en cas d'imprévu (maladie, panne) ?", a: "Nous sommes 3 associés et travaillons toujours en binôme sur les gros événements. Si l'un d'entre nous tombe malade ou rencontre un problème, un autre photographe de l'équipe prend le relais immédiatement. Prestation garantie, sans exception." },
  { cat: 'jour-j', q: "Combien de photos seront livrées ?", a: "Cela dépend de la formule : entre 200 (Essentiel) et illimité (Prestige). Toutes les photos livrées sont retouchées (couleurs, lumière, peau) et triées avec soin — pas de dump brut." },
  { cat: 'apres', q: "Sous quel délai recevons-nous nos photos ?", a: "Vous recevez votre galerie privée en ligne sous 7 jours, accessible pendant 1 an. Le livre photo (option Prestige) est livré sous 6 à 8 semaines." },
  { cat: 'apres', q: "Qui détient les droits sur les photos ?", a: "Vous avez un droit d'usage privé total et illimité. Je conserve les droits d'auteur (utilisation portfolio, réseaux sociaux), avec votre accord pour toute publication." },
  { cat: 'logistique', q: "Intervenez-vous en dehors de Marseille ?", a: "Oui, dans un rayon de 150 km autour de Marseille (Aix, Cassis, Bandol, Avignon, Toulon, etc.) — déplacement inclus. Au-delà, devis personnalisé incluant transport et hébergement si nécessaire." },
  { cat: 'logistique', q: "Pouvez-vous filmer en plus de photographier ?", a: "Oui, l'option Vidéo souvenir (3 à 5 minutes, format film) est disponible sur toutes les formules, ou incluse dans la formule Prestige. Tournage par mon associé Yanis, monté sous 4 semaines." },
];

const FAQ_CATS = [
  { id: 'all', label: 'Toutes les questions' },
  { id: 'reservation', label: 'Avant le jour J' },
  { id: 'jour-j', label: 'Le jour J' },
  { id: 'apres', label: "Après l'événement" },
  { id: 'logistique', label: 'Logistique & déplacement' },
];

const SERVICES = [
  { num: '01', title: 'Mariages', desc: "Préparatifs, cérémonie, vin d'honneur, soirée. Du premier regard à la dernière danse.", img: PHOTOS.kiss },
  { num: '02', title: 'Baptêmes', desc: "Cérémonie, famille, instants doux. Une approche intime et lumineuse.", img: PHOTOS.baptism },
  { num: '03', title: 'Grands événements', desc: "Galas, anniversaires, réceptions. Discrétion et réactivité, livraison rapide.", img: PHOTOS.gala },
];

// ── Pricing config ──
const FORMULAS = [
  { id: 'essentiel', name: 'Essentiel', price: 1290, hours: 4 },
  { id: 'ceremonie', name: 'Cérémonie', price: 1990, hours: 8, featured: true },
  { id: 'prestige', name: 'Prestige', price: 2890, hours: 12 },
];

const PRICING_ROWS = [
  { label: 'Couverture', sub: 'durée totale', e: '4 h', s: '8 h', p: 'Journée +' },
  { label: 'Préparatifs des mariés', sub: 'avant la cérémonie', e: false, s: true, p: true },
  { label: "Cérémonie & vin d'honneur", sub: 'temps fort de la journée', e: true, s: true, p: true },
  { label: 'Soirée & 1ʳᵉ danse', sub: "jusqu'à 1h du matin", e: false, s: true, p: true },
  { label: 'Photos retouchées', sub: 'haute résolution', e: '200', s: '500', p: 'Illimité' },
  { label: 'Galerie en ligne (1 an)', sub: 'lien privé partageable', e: true, s: true, p: true },
  { label: '2ᵉ photographe', sub: 'plus d\'angles, sécurité +', e: false, s: 'option', p: true },
  { label: 'Vidéo souvenir 3-5 min', sub: 'tournage + montage', e: 'option', s: 'option', p: true },
  { label: 'Livre photo grand format', sub: 'fine art, 30×30 cm', e: 'option', s: 'option', p: true },
  { label: 'Déplacement (≤ 150 km)', sub: 'Marseille + Provence', e: true, s: true, p: true },
];

const OPTIONS_LIST = [
  { id: 'video', t: 'Vidéo souvenir 3-5 min', d: 'Film monté façon clip, livré sous 4 semaines.', p: 690 },
  { id: 'livre', t: 'Livre photo grand format', d: '30×30 cm, papier fine art, 60 pages.', p: 290 },
  { id: 'second', t: '2ᵉ photographe', d: 'Yanis ou Élise pour couvrir tous les angles.', p: 490 },
  { id: 'tirages', t: 'Tirages fine art (×20)', d: '30×40 cm, papier baryté, signés.', p: 190 },
  { id: 'drone', t: 'Drone (selon site)', d: 'Vue aérienne du lieu et cérémonie en extérieur.', p: 250 },
  { id: 'engage', t: 'Séance engagement', d: '1h30 en amont, 50 photos retouchées.', p: 350 },
];

// ── helpers ──
const monthName = (m) => ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'][m];
const startWeekday = (year, month) => {
  // Monday-first
  const d = new Date(year, month, 1).getDay(); // 0=Sun
  return (d + 6) % 7;
};
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// Mock busy dates per (year, month) — keys "yyyy-mm"
const BUSY = {
  '2026-5':  [3, 6, 7, 13, 14, 20, 21, 27, 28],   // June
  '2026-6':  [4, 5, 11, 12, 18, 19, 25, 26],      // July
  '2026-7':  [1, 2, 8, 9, 15, 16, 22, 23, 29, 30], // August
  '2026-8':  [5, 6, 12, 13, 19, 20, 26, 27],
  '2026-9':  [3, 4, 10, 11, 17, 18, 24, 25],
  '2026-10': [7, 8, 14, 15, 21, 22, 28, 29],
  '2026-11': [5, 6, 12, 13, 19, 20, 26, 27],
  '2026-4':  [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
};

Object.assign(window, {
  PHOTOS, PORTFOLIO_ITEMS, TESTIMONIALS, FAQ_DATA, FAQ_CATS, SERVICES,
  FORMULAS, PRICING_ROWS, OPTIONS_LIST,
  monthName, startWeekday, daysInMonth, BUSY
});
