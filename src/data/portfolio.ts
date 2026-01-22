import madrinha1 from '../assets/portfolio/madrinha1.png'
import madrinha2 from '../assets/portfolio/madrinha2.png'
import madrinha3 from '../assets/portfolio/madrinha3.png'
import noiva1 from '../assets/portfolio/noiva1.png'
import noiva2 from '../assets/portfolio/noiva2.png'
import noiva3 from '../assets/portfolio/noiva3.png'
import noiva4 from '../assets/portfolio/noiva4.png'
import social1 from '../assets/portfolio/social1.png'
import social2 from '../assets/portfolio/social2.png'

const createPlaceholder = (label: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="420">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f9f4ef" />
          <stop offset="100%" stop-color="#e8dccc" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
      <circle cx="520" cy="80" r="70" fill="#f1e7db" />
      <circle cx="90" cy="330" r="60" fill="#efe1d1" />
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, Arial" font-size="28" fill="#9a8371">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const portfolioItems = [
  {
    id: "bride-1",
    src: noiva1,
    alt: "Maquiagem de noiva com iluminação suave",
    caption: "Noiva | Pele luminosa e olhar marcante",
  },
  {
    id: "bride-2",
    src: noiva2,
    alt: "Maquiagem de noiva com acabamento aveludado",
    caption: "Noiva | Acabamento aveludado para fotos",
  },
  {
    id: "bride-3",
    src: noiva3,
    alt: "Maquiagem de noiva clássica",
    caption: "Noiva | Clássico elegante",
  },
  {
    id: "bride-4",
    src: noiva4,
    alt: "Maquiagem de noiva glam",
    caption: "Noiva | Glam sofisticado",
  },
  {
    id: "bridesmaid-1",
    src: madrinha1,
    alt: "Maquiagem de madrinha com tons quentes",
    caption: "Madrinha | Tons quentes",
  },
  {
    id: "bridesmaid-2",
    src: madrinha2,
    alt: "Maquiagem de madrinha romântica",
    caption: "Madrinha | Romântica",
  },
  {
    id: "bridesmaid-3",
    src: madrinha3,
    alt: "Maquiagem de madrinha glow",
    caption: "Madrinha | Glow elegante",
  },
  {
    id: "social-1",
    src: social1,
    alt: "Maquiagem social para festa",
    caption: "Social | Festa noturna",
  },
  {
    id: "social-2",
    src: social2,
    alt: "Babyliss com ondas suaves",
    caption: "Babyliss | Ondas suaves",
  }
];
