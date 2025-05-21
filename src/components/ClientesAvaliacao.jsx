import React from "react";

const ClientesAvaliacao = () => {
  const avaliacoes = [
    {
      nome: "Carlos Silva",
      comentario:
        'Atendimento excepcional e preços imbatíveis. Comprei minha moto aqui e não me arrependo!',
    },
    {
      nome: "Ana Oliveira",
      comentario:
        'Equipe muito profissional e conhecedora. Me ajudaram a escolher a moto perfeita para minhas necessidades.',
    },
    {
      nome: "Roberto Almeida",
      comentario:
        'Já é a segunda moto que compro nesta concessionária. Confio totalmente na qualidade e no serviço.',
    },
  ];

  return (
    <div>
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">O que nossos clientes dizem</h2>
          <div className="row justify-content-center">
            {avaliacoes.map((cliente, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="bg-secondary p-4 rounded h-100">
                  <div className="d-flex align-items-center mb-2 gap-2">
                    <i className="bi bi-people-fill fs-4"></i>
                    <strong>{cliente.nome}</strong>
                  </div>
                  <p className="mb-0 text-light">"{cliente.comentario}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-danger text-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-3">Pronto para encontrar sua moto ideal?</h3>
          <p className="mb-4">
            Visite nossa concessionária ou entre em contato para saber mais
            sobre nossos modelos e ofertas especiais.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light text-danger fw-bold">
              Fale Conosco
            </button>
            <button className="btn btn-light text-danger fw-bold">
              Ver Localização
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesAvaliacao;
