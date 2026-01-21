import { portfolioItems } from "../data/portfolio";

function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfólio</h2>
        <p className="section-lead">
          Uma seleção de produções para noivas, madrinhas e eventos. Imagens substituíveis com o seu material.
        </p>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="portfolio-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
