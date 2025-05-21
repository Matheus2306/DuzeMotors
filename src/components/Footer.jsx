import React from "react";
const Footer = () => {

    const currentYear = new Date().getFullYear();


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
          <span role="button" className="textcolorfooter hovericonFooter">
            Inicio
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Catalogo
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Sobre Nós
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Contato
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Política de Privacidade
          </span>
        </div>
        <div className="w-25 d-flex flex-column">
          <span className="fw-bold fs-5 mb-2">Serviços</span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Venda de Motos
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Manutenção
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Peças e Acessórios
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Financiamento
          </span>
          <span role="button" className="textcolorfooter hovericonFooter">
            Seguro
          </span>
        </div>{" "}
        <div className="w-25 d-flex flex-column gap-2">
          <span className="fw-bold fs-5 mb-2">Contato</span>
          <div className="d-flex align-items-center gap-2">
            <i class="bi bi-geo-alt-fill text-danger fs-5"></i>
            <span className="fs-6 textcolorfooter w-50">
              Avenida Miguel Inácio Curi 111, São Paulo
            </span>
          </div>
          <div className="w-50 d-flex align-items-center gap-2">
            <i class="bi bi-telephone text-danger fs-5"></i>
            <span className="fs-6 textcolorfooter">+55 (14) 3602-8600</span>
          </div>
          <div className="w-50 d-flex align-items-center gap-2">
            <i class="bi bi-envelope text-danger fs-5"></i>
            <span className="textcolorfooter">DuzéMotors@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="w-100 text-center p-4">
        <span className="textcolorfooter">@{currentYear} DuZéMotors. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
