import React from "react";

const CardCarrinho = ({ image, title, calculateTotalPrice, price, quantity, onRemove, onDecrement, onIncrement }) => {
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
            <span className="fs-5 text-danger fw-medium">R$ {calculateTotalPrice(price, quantity).toLocaleString("pt-BR")}</span>
            <span className="text-muted">Quantidade: {quantity}</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i
            className="bi bi-dash-circle fs-4 text-warning mx-3"
            role="button"
            onClick={onDecrement} // Call the decrement handler
          ></i>
          <i
            className="bi bi-plus-circle fs-4 text-success mx-3"
            role="button"
            onClick={onIncrement} // Call the increment handler
          ></i>
          <i
            className="bi bi-trash fs-4 text-danger mx-3"
            role="button"
            onClick={onRemove} // Call the remove handler
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CardCarrinho;