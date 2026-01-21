interface InfoSectionProps {
  whatsappUrl: string;
}

function InfoSection({ whatsappUrl }: InfoSectionProps) {
  return (
    <section className="section" id="contato">
      <div className="container info-grid">
        <div className="card">
          <h2 className="section-title">Contato</h2>
          <p className="section-lead">
            Atendimento em Carapicuíba e região. Agende pelo WhatsApp para consultar datas.
          </p>
          <p><strong>WhatsApp:</strong> +55 11 96177-0269</p>
          <p><strong>Local:</strong> Carapicuíba – Cohab 2</p>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar disponibilidade
          </a>
        </div>
        <div className="card">
          <h3>Formas de pagamento</h3>
          <p>Pix, dinheiro, débito e crédito (+5% no crédito).</p>
          <h3 style={{ marginTop: "18px" }}>Horários</h3>
          <p>Atendimentos com hora marcada. Consulte a agenda para finais de semana e datas especiais.</p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
