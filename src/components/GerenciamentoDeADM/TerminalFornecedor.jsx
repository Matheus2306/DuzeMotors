import React from "react";
import HeaderTerminal from "../HeaderTerminal";
import Itenterminal from "./Itenterminal";

const TerminalFornecedor = (props) => {
  const itemManipulado = props.ItemManipulado;

  return (
    <div className="w-50 h-75 shadow rounded">
      <HeaderTerminal title={props.title} handleSearch={props.handleSearch} target={props.target}/>
      <div className="h-75 overflow-y-scroll border-bottom border-2">
        {itemManipulado.map((fornecedor) => (
          <Itenterminal
            Id={fornecedor.id}
            nome={fornecedor.nome}
            cnpj={fornecedor.cnpj}
            numero={fornecedor.numero}
            email={fornecedor.email}
            handleDeleteFornecedor={props.handleRemoveFornecedor}
          />
        ))}
      </div>
     
    </div>
  );
};

export default TerminalFornecedor;
