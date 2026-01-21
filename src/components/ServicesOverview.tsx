function ServicesOverview() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Atendimentos principais</h2>
        <p className="section-lead">
          Três experiências de maquiagem pensadas para cada tipo de evento, com foco em
          beleza, conforto e duração.
        </p>
        <div className="service-grid">
          <div className="card">
            <h3>Noivas</h3>
            <p>
              Produção completa para o grande dia, com prévia e acabamento perfeito para fotos.
            </p>
          </div>
          <div className="card">
            <h3>Madrinhas</h3>
            <p>
              Harmonia entre elegância e personalidade para cerimônias longas e emocionantes.
            </p>
          </div>
          <div className="card">
            <h3>Social/Eventos</h3>
            <p>
              Maquiagem versátil para festas, formaturas e ocasiões especiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
