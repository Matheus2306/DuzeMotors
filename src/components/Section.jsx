import React from "react";

const Section = () => {
  return (
    <section className="bg-light py-5">
      <h2 className="text-center fw-bold mb-5">Por que escolher nossa concessionária?</h2>

      <div className="container">
        <div className="row justify-content-center gy-4">
          {/* Cartão 1 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card text-center p-4 shadow-sm border-0" style={{ width: "100%", maxWidth: "300px" }}>
              <div className="mb-3">
                <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-bicycle text-danger fs-4"></i>
                </div>
              </div>
              <h5 className="fw-bold">Melhor Seleção</h5>
              <p className="text-muted">
                Oferecemos a maior variedade de modelos e marcas para você escolher a moto perfeita.
              </p>
            </div>
          </div>

          {/* Cartão 2 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card text-center p-4 shadow-sm border-0" style={{ width: "100%", maxWidth: "300px" }}>
              <div className="mb-3">
                <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-shield-check text-danger fs-4"></i>
                </div>
              </div>
              <h5 className="fw-bold">Garantia Estendida</h5>
              <p className="text-muted">
                Todas as nossas motos vêm com garantia estendida e assistência 24 horas.
              </p>
            </div>
          </div>

          {/* Cartão 3 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card text-center p-4 shadow-sm border-0" style={{ width: "100%", maxWidth: "300px" }}>
              <div className="mb-3">
                <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-credit-card text-danger fs-4"></i>
                </div>
              </div>
              <h5 className="fw-bold">Facilidade de Pagamento</h5>
              <p className="text-muted">
                Financiamento com as melhores taxas do mercado e condições especiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
