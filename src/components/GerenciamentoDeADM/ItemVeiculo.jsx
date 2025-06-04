import React from "react";

const ItemVeiculo = (props) => {
  return (
    <div className="w-100 p-2 justify-content-between d-flex shadow-sm mt-2">
      <div className="d-flex gap-5 w-75 align-items-center">
        <div className="d-flex flex-column w-25 gap-2 mx-3">
          <span><strong>Nome:</strong> {props.nome}</span>
          <span><strong>Marca:</strong> {props.marca}</span>
          <span><strong>Modelo:</strong> {props.modelo}</span>
        </div>
        <div className="d-flex flex-column gap-2 mx-3">
          <span><strong>Preço:</strong> {props.preco}</span>
          <span><strong>Estoque:</strong> {props.quantidade}</span>
          <span><strong>Quilometragem:</strong> {props.quilometragem}</span>
          <span><strong>Combustível:</strong> {props.tipoCombustivel}</span>
        </div>
        {props.imagem && (
          <div className="mx-3">
            <img
              src={props.imagem}
              alt={props.nome}
              style={{ width: "80px", height: "60px", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div className="d-flex align-items-center gap-3">
        <span className="hovertext" role="button">Solicitar</span>
        <i
          className="bi bi-pencil-square fs-5 text-secondary"
          data-bs-toggle="modal"
          data-bs-target="#ModalEditarProduto"
          role="button"
          onClick={() => {
            props.setIdProdutoEditando(props.Id);
            props.setNome(props.nome);
            props.setPreco(props.preco);
            props.setQuantidade(props.quantidade);
            props.setMarca(props.marca);
            props.setModelo(props.modelo);
            props.setQuilometragem(props.quilometragem);
            props.setTipoCombustivel(props.tipoCombustivel);
            props.setImagem(props.imagem);
          }}
        ></i>
        <i
          className="bi bi-trash fs-5 text-danger"
          onClick={() =>
            props.handleDeleteVeiculo({
              id: props.Id,
            })
          }
          role="button"
        ></i>
      </div>
    </div>
  );
};

export default ItemVeiculo;