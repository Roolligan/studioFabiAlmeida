interface HowItWorksProps {
  whatsappUrl: string;
}

function HowItWorks({ whatsappUrl }: HowItWorksProps) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Como funciona</h2>
        <p className="section-lead">
          Um processo simples e organizado para garantir tranquilidade no seu atendimento.
        </p>
        <div className="steps">
          <div className="card">
            <div className="step-number">1</div>
            <p>Envie sua data e tipo de evento pelo WhatsApp.</p>
          </div>
          <div className="card">
            <div className="step-number">2</div>
            <p>Receba proposta, valores e opções de agenda.</p>
          </div>
          <div className="card">
            <div className="step-number">3</div>
            <p>Confirme com sinal e escolha horários.</p>
          </div>
          <div className="card">
            <div className="step-number">4</div>
            <p>Chegue tranquila e aproveite a produção.</p>
          </div>
        </div>
        <div style={{ marginTop: "24px" }}>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
