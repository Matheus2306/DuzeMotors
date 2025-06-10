import React from "react";
import { useNavigate } from "react-router";

import Footer from "../Components/Footer.jsx";

export default function SobreNos() {
  const Navigate = useNavigate();
  const handleBack = () => {
    Navigate(-1);
  };

  return (
    <div className="sobre-container">
      <div></div>

      <Header />
      <h1 className="conheca-nos">Conheça-nos</h1>
      <p className="sobre-descricao">
        Somos três amigos apaixonados por tecnologia e velocidade. Unimos nossas
        habilidades para criar a DuzéMotors, uma concessionária moderna que
        entrega performance, design e confiança sobre duas rodas.
      </p>

      <div className="cards-container">
        <div className="card-membro">
          <img src="src/IMG/Joao.jpg" alt="João" className="img-membro" />
          <br />
          <a
            href="https://www.instagram.com/_milani.jao/"
            role="button"
            className="nome-membro text-decoration-none fw-bold"
            target="_blank"
          >
            João
          </a>
          <p className="cargo-membro">Designer & Front-End</p>
          <p className="desc-membro">
            Responsável pelo visual da plataforma e interfaces atrativas.
          </p>
        </div>

        <div className="card-membro">
          <img src="src/IMG/Matheus.png" alt="Matheus" className="img-membro" />
          <br />
          <a
            href="https://www.instagram.com/math2306.r/"
            role="button"
            className="nome-membro text-decoration-none fw-bold"
            target="_blank"
          >
            Matheus
          </a>
          <p className="cargo-membro">Full Stack</p>
          <p className="desc-membro">
            Garante o funcionamento completo da plataforma, front e back.
          </p>
        </div>

        <div className="card-membro">
          <img src="src/IMG/Bryan.jpg" alt="Bryan" className="img-membro" />
          <br />
          <a
            href="https://www.instagram.com/bryanz_bzgg/"
            role="button"
            className="nome-membro text-decoration-none fw-bold"
            target="_blank"
          >
           Bryan
          </a>
          <p className="cargo-membro">Front-End</p>
          <p className="desc-membro">
            Desenvolve as interfaces que tornam a navegação fluida e intuitiva.
          </p>
        </div>
      </div>

      <div className="missao-container">
        <h2 className="missao-titulo">Nossa Missão</h2>
        <ul className="missao-lista">
          <li>
            <span>Alta performance:</span> Oferecer motos que unem potência e
            estilo.
          </li>
          <li>
            <span>Confiança:</span> Garantimos transparência e qualidade em cada
            venda.
          </li>
          <li>
            <span>Atendimento personalizado:</span> Ajudamos você a encontrar a
            moto ideal.
          </li>
          <li>
            <span>Inovação:</span> Sempre atualizados com as últimas tendências
            do mercado.
          </li>
        </ul>
      </div>

      <div className="botao-container">
        <button className="btn-acao" onClick={handleBack}>
          ← VOLTAR
        </button>
      </div>

      <Footer />
    </div>
  );
}
