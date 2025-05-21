import React from "react";
import { useNavigate } from "react-router";
import CardCarrinho from "./CardCarrinho";

const ItensDocarrinho = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalogo");
  };

  return (
    <div className="w-100 shadow bg-light rounded-3 p-4">
      <div className="mb-2 border-bottom p-1">
        <span className="fs-5 fw-semibold">Itens do carrinho (1)</span>
      </div>
      <div className="d-flex flex-column align-items-center gap-3 overflow-y-scroll" style={{maxHeight:"500px" , minHeight:"500px"}}>
        <CardCarrinho/>
        <CardCarrinho/>
        <CardCarrinho/>
        <CardCarrinho/>
        <CardCarrinho/>
      </div>
        <div className="p-3 d-flex align-items-center border-top mt-4">
          <span role="button" onClick={handleClick} className="p-2 border-1 shadow-sm">Continuar Comprando</span>
        </div>
    </div>
  );
};

export default ItensDocarrinho;
