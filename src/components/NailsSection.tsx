interface NailsSectionProps {
  whatsappUrl: string;
}

function NailsSection({ whatsappUrl }: NailsSectionProps) {
  return (
    <section className="section" id="unhas">
      <div className="container section-grid">
        <div>
          <h2 className="section-title">Unhas (serviço adicional)</h2>
          <p className="section-lead">
            Atendimento complementar para alongamento e banho de gel, ideal para finalizar o look.
          </p>
          <ul>
            <li>• Alongamento com acabamento natural.</li>
            <li>• Manutenção conforme necessidade.</li>
            <li>• Banho de gel para resistência e brilho.</li>
          </ul>
        </div>
        <div className="card">
          <div className="price-list">
            <p>Alongamento: <strong>a partir de R$ 90</strong></p>
            <p>Manutenção até 22 dias: <strong>a partir de R$ 70</strong></p>
            <p>Manutenção após 22 dias: <strong>a partir de R$ 90</strong></p>
            <p>Banho de Gel: <strong>a partir de R$ 75</strong></p>
          </div>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default NailsSection;
