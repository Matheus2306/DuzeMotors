import React from "react";
import ItensDocarrinho from "./ItensDocarrinho";
import FinalizarCarrinho from "./FinalizarCarrinho";

const ContainerCheckout = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="m-4 border-bottom">
        <span className="fs-2 fw-bold">Seu Carrinho</span>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="row w-75">
          <div className="col-md-8"> 
            <ItensDocarrinho />
          </div>
          <div className="col-md-4">
            <FinalizarCarrinho />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCheckout;
