interface BridesmaidsSectionProps {
  whatsappUrl: string;
}

function BridesmaidsSection({ whatsappUrl }: BridesmaidsSectionProps) {
  return (
    <section className="section" id="madrinhas">
      <div className="container section-grid">
        <div>
          <h2 className="section-title">Madrinhas</h2>
          <p className="section-lead">
            Produção elegante que valoriza o rosto e mantém a harmonia com a cerimônia.
          </p>
          <ul>
            <li>• Equilíbrio entre sofisticação e naturalidade.</li>
            <li>• Pele leve e resistente ao calor.</li>
            <li>• Ideal para cerimônias longas e emocionantes.</li>
          </ul>
        </div>
        <div className="card">
          <div className="price-list">
            <p>Maquiagem para madrinhas: <strong>a partir de R$ 180</strong></p>
            <p>Pacotes para grupos: <strong>a partir de R$ 150 por pessoa</strong></p>
          </div>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default BridesmaidsSection;
