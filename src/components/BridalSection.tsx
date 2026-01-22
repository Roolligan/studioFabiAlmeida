interface BridalSectionProps {
  whatsappUrl: string;
}

function BridalSection({ whatsappUrl }: BridalSectionProps) {
  return (
    <section className="section" id="noivas">
      <div className="container section-grid">
        <div>
          <h2 className="section-title">Noivas</h2>
          <p className="section-lead">
            Maquiagem especial para o grande dia, com foco em longa duração e acabamento
            impecável para fotos e vídeo.
          </p>
          <div className="highlight">
            <strong>Prévia de Noiva:</strong> teste completo para definir referências, tons e
            ajustes com calma.
          </div>
        </div>
        <div className="card">
          <ul>
            <li>• Preparação de pele detalhada e selagem duradoura.</li>
            <li>• Acabamento soft glam com brilho controlado.</li>
            <li>• Duração pensada para cerimônia longa e festa.</li>
          </ul>
          <div className="price-list">
            <p>Maquiagem de noiva: <strong>a partir de R$ 230</strong></p>
            <p>Prévia de noiva: <strong>a partir de R$ 200 </strong></p>
          </div>
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default BridalSection;
