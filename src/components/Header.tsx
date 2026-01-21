import type { ReactNode } from "react";

interface HeaderProps {
  whatsappUrl: string;
}

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#noivas", label: "Noivas" },
  { href: "#madrinhas", label: "Madrinhas" },
  { href: "#social", label: "Social" },
  { href: "#babyliss", label: "Babyliss" },
  { href: "#unhas", label: "Unhas" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" }
];

function Header({ whatsappUrl }: HeaderProps): ReactNode {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#inicio">
          Studio Fabi Almeida
        </a>
        <nav className="nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn outline" href={whatsappUrl} target="_blank" rel="noreferrer">
          Consultar no WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Header;
