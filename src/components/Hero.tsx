interface HeroProps {
  whatsappUrl: string;
}

function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="tag">Especialista em noivas e madrinhas</span>
          <h1>Maquiagem profissional para noivas e madrinhas</h1>
          <p>
            Atendimento em estúdio ou domicílio, com acabamento elegante e longa duração.
          </p>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar disponibilidade no WhatsApp
          </a>
        </div>
        <div className="hero-card">
          <div className="card">
            <strong>Atendimento sob medida</strong>
            <p>
              Produção pensada para seu estilo, tom de pele e fotografia, com foco em
              naturalidade e brilho controlado.
            </p>
          </div>
          <div className="card">
            <ul>
              <li>• Preparação de pele detalhada e acabamento para fotos.</li>
              <li>• Cronograma organizado para cerimônias longas.</li>
              <li>• Produtos profissionais e higiene rígida.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
