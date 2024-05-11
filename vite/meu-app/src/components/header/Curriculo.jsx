import React from "react";

function Curriculo() {
  return (
    <main>
      <section>
        <h2>Resumo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
          amet erat diam. Morbi euismod lacus ac malesuada vulputate. Ut
          scelerisque mattis varius. In sed ultrices nulla. Praesent sit amet
          ex tincidunt, luctus lorem ut, egestas est. Vestibulum ac viverra
          eros. Aenean ullamcorper posuere egestas.
        </p>
      </section>

      <section>
        <h2>Acadêmico</h2>
        <ul>
          {[1, 2, 3].map((item, index) => (
            <li key={index}>
              (2022) Finalizado o ensino médio no 3° Colégio da Polícia Militar
              - Tenente Mário Lima;
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Profissional</h2>
        <ul>
          {[1, 2, 3].map((item, index) => (
            <li key={index}>
              (2023 - 2024) Help Desk da empresa ALPHA SYSTEMAS;
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Curriculo;
