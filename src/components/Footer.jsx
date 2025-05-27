import React from "react";
import { useNavigate } from "react-router";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const Navigate = useNavigate();

  const handleNavigationHome = () => {
    Navigate("/");
  };
  const handleNavigationCatalogo = () => {
    Navigate("/catalogo");
  };
  const handleNavigationSobreNos = () => {
    Navigate("/sobre-nos");
  };
  const handleNavigationContato = () => {
    Navigate("/contato");
  };
  const handleNavigationPoliticaPrivacidade = () => {
    Navigate("/politica-privacidade");
  };
  return (
    <footer className="bgcolorFooter w-100 py-3 px-4 text-light ">
      <div className="d-flex w-100">
        <div className="w-25">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-bicycle text-danger fs-3"></i>
            <span className="fw-bold fs-5">DuZéMotors</span>
          </div>
          <p className="mt-2 w-75 textcolorfooter">
            Sua concessionária de motos de confiança, oferecendo os melhores
            modelos com preços competitivos e atendimento de qualidade.
          </p>
          <div className="d-flex gap-3 mt-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light fs-5"
            >
              <i className="bi bi-instagram textcolorfooter hovericonFooter"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light fs-5"
            >
              <i className="bi bi-facebook textcolorfooter hovericonFooter"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light fs-5"
            >
              <i className="bi bi-twitter-x textcolorfooter hovericonFooter"></i>
            </a>
          </div>
        </div>
        <div className="w-25 d-flex flex-column">
          <span className="fw-bold fs-5 mb-2">Links Rapidos</span>
          <span
            role="button"
            onClick={handleNavigationHome}
            className="textcolorfooter hovericonFooter"
          >
            Inicio
          </span>
          <span
            role="button"
            onClick={handleNavigationCatalogo}
            className="textcolorfooter hovericonFooter"
          >
            Catalogo
          </span>
          <span
            role="button"
            onClick={handleNavigationSobreNos}
            className="textcolorfooter hovericonFooter"
          >
            Sobre Nós
          </span>
          <a
            href="https://wa.me/551436028600"
            role="button"
            className="textcolorfooter hovericonFooter text-decoration-none"
            target="_blank"
          >
            Contato
          </a>
          <span
            role="button"
            onClick={handleNavigationPoliticaPrivacidade}
            className="textcolorfooter hovericonFooter"
          >
            Política de Privacidade
          </span>
        </div>
        <div className="w-25 d-flex flex-column">
          <span className="fw-bold fs-5 mb-2">Serviços</span>
          <a
            href="https://wa.me/551436028600"
            role="button"
            className="textcolorfooter hovericonFooter text-decoration-none"
            target="_blank"
          >
            Venda de Motos
          </a>

          <a
            href="https://wa.me/551436028600"
            role="button"
            className="textcolorfooter hovericonFooter text-decoration-none"
            target="_blank"
          >
            Manutenção
          </a>

          <a
            href="https://wa.me/551436028600"
            role="button"
            className="textcolorfooter hovericonFooter text-decoration-none"
            target="_blank"
          >
            Peças e acessórios
          </a>

          <a
            href="https://wa.me/551436028600"
            role="button"
            className="textcolorfooter hovericonFooter text-decoration-none"
            target="_blank"
          >
            Financiamneto
          </a>

          <a
            href="https://wa.me/551436028600"
            role="button"
            className="textcolorfooter hovericonFooter text-decoration-none"
            target="_blank"
          >
            Seguro
          </a>

        </div>{" "}
        <div className="w-25 d-flex flex-column gap-2">
          <span className="fw-bold fs-5 mb-2">Contato</span>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
            <span className="fs-6 textcolorfooter w-50">
              Avenida Miguel Inácio Curi 111, São Paulo
            </span>
          </div>
          <div className="w-50 d-flex align-items-center gap-2">
            <i className="bi bi-telephone text-danger fs-5"></i>
            <span className="fs-6 textcolorfooter">+55 (14) 3602-8600</span>
          </div>
          <div className="w-50 d-flex align-items-center gap-2">
            <i className="bi bi-envelope text-danger fs-5"></i>
            <span className="textcolorfooter">DuzéMotors@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="w-100 text-center p-4">
        <span className="textcolorfooter">
          @{currentYear} DuZéMotors. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
