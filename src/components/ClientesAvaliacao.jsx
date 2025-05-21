import React, { useState } from "react";

const ClientesAvaliacao = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const fecharModal = () => setMostrarModal(false);

  return (
    <div>
      {/* Seção de avaliações */}
      <section className="bg-dark text-white py-5 text-center">
        <h2 className="mb-5 fw-bold">O que nossos clientes dizem</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {/* Avaliações */}
          {[
            {
              nome: "Carlos Silva",
              texto:
                '"Atendimento excepcional e preços imbatíveis. Comprei minha moto aqui e não me arrependo!"',
            },
            {
              nome: "Ana Oliveira",
              texto:
                '"Equipe muito profissional e conhecedora. Me ajudaram a escolher a moto perfeita para minhas necessidades."',
            },
            {
              nome: "Roberto Almeida",
              texto:
                '"Já é a segunda moto que compro nesta concessionária. Confio totalmente na qualidade e no serviço."',
            },
          ].map((cliente, index) => (
            <div
              key={index}
              className="bg-secondary p-4 rounded text-start"
              style={{ maxWidth: "350px", minHeight: "180px" }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-people fs-4" />
                <h5 className="m-0">{cliente.nome}</h5>
              </div>
              <p>{cliente.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção CTA */}
      <section className="bg-danger text-white py-5 text-center">
        <h2 className="fw-bold mb-3">Pronto para encontrar sua moto ideal?</h2>
        <p>
          Visite nossa concessionária ou entre em contato para saber mais sobre
          nossos modelos e ofertas especiais.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-light fw-bold">Fale Conosco</button>
          <button className="btn btn-light fw-bold" onClick={abrirModal}>
            Ver Localização
          </button>
        </div>
      </section>

      {/* Modal */}
      {mostrarModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nossa Localização</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={fecharModal}
                ></button>
              </div>
              <div className="modal-body">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6438582060705!2d-46.476804123632355!3d-23.545308461004655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e0!3m2!1spt-BR!2sbr!4v1747825448758!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={fecharModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientesAvaliacao;

