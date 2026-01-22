interface HairSectionProps {
  whatsappUrl: string;
}

function HairSection({ whatsappUrl }: HairSectionProps) {
  return (
    <section className="section" id="babyliss">
      <div className="container section-grid">
        <div>
          <h2 className="section-title">Babyliss</h2>
          <p className="section-lead">
            Cachos e ondas com finalização suave para completar a produção.
          </p>
          <ul>
            <li>• Modelagem com fixação e movimento.</li>
            <li>• Finalização alinhada ao penteado escolhido.</li>
            <li>• Ideal para complementar a maquiagem.</li>
          </ul>
        </div>
        <div className="card">
          <div className="price-list">
            <p>Babyliss: <strong>a partir de R$ 200</strong></p>
          </div>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HairSection;
