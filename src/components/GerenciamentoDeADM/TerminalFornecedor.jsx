import React from "react";
import HeaderTerminal from "../HeaderTerminal";
import Itenterminal from "./Itenterminal";
import ItemVeiculo from "./ItemVeiculo";

const TerminalFornecedor = (props) => {
  const itemManipuladoFor = props.ItemManipuladoFor;
  const itemManipulafoVei = props.ItemManipuladoVei;
  const veiculosExibidos = itemManipulafoVei; // Assuming veiculosExibidos is equivalent to itemManipulafoVei

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
              target2="#ModalEditarFornecedor"
              setIdFornecedorEditando={props.setIdFornecedorEditando}
              setNome={props.setNome}
              setCnpj={props.setCnpj}
              setNumero={props.setNumero}
              setEmail={props.setemail}
            />
          ))
        ) : (
          veiculosExibidos.map((veiculo) => (
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
              handleDeleteVeiculo={props.handleRemoveFornecedor}
              setIdProdutoEditando={props.setIdProdutoEditando}
              setNome={props.setNomeProduto}
              setPreco={props.setPrecoProduto}
              setQuantidade={props.setQuantidadeProduto}
              setMarca={props.setMarcaProduto}
              setModelo={props.setModelo}
              setQuilometragem={props.setQuilometragem}
              setTipoCombustivel={props.setTipoCombustivel}
              setImagem={props.setImagem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TerminalFornecedor;
