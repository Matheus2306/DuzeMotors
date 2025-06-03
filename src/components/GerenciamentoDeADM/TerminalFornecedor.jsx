import React from "react";
import HeaderTerminal from "../HeaderTerminal";
import Itenterminal from "./Itenterminal";
import ItemVeiculo from "./ItemVeiculo";

const TerminalFornecedor = (props) => {
  const itemManipuladoFor = props.ItemManipuladoFor;
  const itemManipulafoVei = props.ItemManipuladoVei;

  return (
    <div className="w-50 h-75 shadow rounded">
      <HeaderTerminal
        title={props.title}
        handleSearch={props.handleSearch}
        target={props.target}
      />
      <div className="h-75 overflow-y-scroll border-bottom border-2">
        {itemManipuladoFor ? (
          itemManipuladoFor.map((fornecedor) => (
            <Itenterminal
              key={fornecedor.id}
              Id={fornecedor.id}
              nome={fornecedor.nome}
              cnpj={fornecedor.cnpj}
              numero={fornecedor.numero}
              email={fornecedor.email}
              handleDeleteFornecedor={props.handleRemoveFornecedor}
            />
          ))
        ) : (
          itemManipulafoVei.map((veiculo) => (
            <ItemVeiculo
              key={veiculo.id}
              Id={veiculo.id}
              nome={veiculo.nome}
              marca={veiculo.marca}
              modelo={veiculo.modelo}
              preco={veiculo.preco}
              quantidade={veiculo.quantidade}
              quilometragem={veiculo.quilometragem}
              tipoCombustivel={veiculo.tipoCombustivel}
              imagem={veiculo.imagem}
              handleDeleteVeiculo={props.handleRemoveVeiculo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TerminalFornecedor;
