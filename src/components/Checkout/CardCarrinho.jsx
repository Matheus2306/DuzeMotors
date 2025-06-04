import React from "react";

const CardCarrinho = ({ image, title, price, quantity, onRemove }) => {
  return (
    <div className="w-75 p-3 rounded-2 shadow-sm mt-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={image}
            alt={title}
            className="rounded-2 me-2 img-fluid object-fit-fill"
            style={{ width: "100px", height: "100px" }}
          />
          <div className="d-flex flex-column">
            <span className="fs-4 fw-semibold">{title}</span>
            <span className="fs-5 text-danger fw-medium">R$ {price.toLocaleString("pt-BR")}</span>
            <span className="text-muted">Quantidade: {quantity}</span>
          </div>
        </div>
        <i
          className="bi bi-trash fs-4 text-danger mx-3"
          role="button"
          onClick={onRemove}
        ></i>
      </div>
    </div>
  );
};

export default CardCarrinho;