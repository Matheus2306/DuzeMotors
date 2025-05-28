import React from "react";
import { useNavigate } from "react-router";

const FinalizarCarrinho = () => {
const navigate = useNavigate();

const handleFinalizarCompra = () => {
  
navigate("/Cartao")
}

  return (
    <div className=" w-100 shadow rounded-3 h-50 p-3">
      <div className="d-flex align-items-center border-bottom p-2">
        <span className="fw-semibold fs-5">Resumo do pedido</span>
      </div>
      <div className=" d-flex p-2 flex-column gap-4 my-4">
        <div className="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>R$100</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Frete</span>
          <span className="text-success">gratis</span>
        </div>
      </div>
      <div className="d-flex justify-content-between border-top p-2">
        <span className="fw-semibold fs-5">Total</span>
        <span className="fw-semibold fs-5 text">R$100</span>
      </div> 
      <div className="d-flex justify-content-center align-items-center btnhover p-2 rounded-1 mt-2" onClick={handleFinalizarCompra} role="button">
        <span className="text-light"><i class="bi bi-credit-card"></i> Finalizar Compra</span>
        
      </div>
    </div>
  );
};

export default FinalizarCarrinho;
