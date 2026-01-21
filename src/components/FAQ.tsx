function FAQ() {
  return (
    <section className="section" id="duvidas">
      <div className="container">
        <h2 className="section-title">Dúvidas frequentes</h2>
        <div className="faq-list">
          <details>
            <summary>Você atende em domicílio?</summary>
            <p>Sim. O atendimento pode ser em estúdio ou domicílio mediante disponibilidade.</p>
          </details>
          <details>
            <summary>A prévia de noiva é obrigatória?</summary>
            <p>Não é obrigatória, mas é altamente recomendada para alinhar expectativas.</p>
          </details>
          <details>
            <summary>Quanto tempo dura o atendimento?</summary>
            <p>Em média de 1h a 1h30, dependendo do serviço e da complexidade.</p>
          </details>
          <details>
            <summary>Como funciona o agendamento?</summary>
            <p>Envie a data pelo WhatsApp, receba a proposta e confirme com sinal.</p>
          </details>
          <details>
            <summary>Qual a forma de pagamento?</summary>
            <p>Pix, dinheiro, débito e crédito (+5% no crédito).</p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
