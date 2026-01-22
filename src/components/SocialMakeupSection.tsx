interface SocialMakeupSectionProps {
  whatsappUrl: string;
}

function SocialMakeupSection({ whatsappUrl }: SocialMakeupSectionProps) {
  return (
    <section className="section" id="social">
      <div className="container section-grid">
        <div>
          <h2 className="section-title">Maquiagem Social</h2>
          <p className="section-lead">
            Para eventos, formaturas e festas, com acabamento elegante e fotogênico.
          </p>
          <ul>
            <li>• Estilos do clássico ao glam.</li>
            <li>• Duração para noite inteira.</li>
            <li>• Ajustes personalizados para o seu look.</li>
          </ul>
        </div>
        <div className="card">
          <div className="price-list">
            <p>Maquiagem social: <strong>a partir de R$ 160</strong></p>
          </div>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMakeupSection;
