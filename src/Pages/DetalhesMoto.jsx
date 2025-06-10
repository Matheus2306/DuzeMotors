import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DetalhesMoto = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [CardItem] = useState(state?.Motos || {});
  console.log(CardItem);
  return (
    <>
      <Header />
      <div className="container py-5">
        {CardItem.title && (
          <h2 className="fw-bold mb-4 text-center">{CardItem.title}</h2>
        )}
        <div className="row">
          <div className="col-md-6">
            <img
              src={CardItem.image}
              alt={CardItem.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p className="text-muted">{CardItem.description}</p>
            {CardItem.features && CardItem.features.length > 0 && (
              <div className="mt-3">
                <h5>Especificações:</h5>
                <ul className="list-unstyled">
                  {CardItem.features.map((feature, index) => (
                    <li
                      key={index}
                      className="badge bg-light text-dark me-1 mb-1 border"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {CardItem.year && (
              <p>
                <strong>Ano:</strong> {CardItem.year}
              </p>
            )}
            {CardItem.brand && (
              <p>
                <strong>Marca:</strong> {CardItem.brand}
              </p>
            )}
            {CardItem.price && (
              <p>
                <strong>Preço:</strong> R${" "}
                {CardItem.price.toLocaleString("pt-BR")}
              </p>
            )}
            <div className="mt-4">
              <button
                className="btn btn-danger me-2"
                onClick={() => alert("Compra realizada com sucesso!")}
              >
                Comprar
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => navigate(-1)}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>

        {/* Mais Informações Section */}
        <div className="mt-5">
          <h3 className="fw-bold">Mais Informações</h3>
          <p className="text-muted">
            {CardItem.longDescription ||
              "Texto detalhado sobre a moto será adicionado aqui."}
          </p>
        </div>

        {/* Tabela de Características */}
        <div className="mt-5">
          <h3 className="fw-bold">Características do Produto</h3>
          {CardItem.specs ? (
            <table className="table table-bordered mt-3">
              <tbody>
                {Object.entries(CardItem.specs).map(([key, value], index) => (
                  <tr key={index}>
                    <th className="text-start" style={{ width: "30%" }}>
                      {key}
                    </th>
                    <td className="text-start">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">Nenhuma característica disponível.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetalhesMoto;
