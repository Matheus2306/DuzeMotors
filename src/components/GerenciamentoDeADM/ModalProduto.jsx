import React from "react";
import Inputlabel from "../Cadastro/Inputlabel";

const ModalProduto = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleCreateVeiculo();
  };
  return (
    <div
      className="modal fade"
      id="ModalProduto"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Criar
            </h1>
            <i
              className="bi bi-x fs-4"
              data-bs-dismiss="modal"
              role="button"
            ></i>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <Inputlabel
                label="Nome"
                placeholder="Nome"
                value={props.nomeProduto}
                onchange={props.setNomeProduto}
              />
              <Inputlabel
                type="number"
                label="Valor"
                placeholder="valor"
                value={props.precoProduto}
                onchange={props.setPrecoProduto}
              />
              <Inputlabel
                type="number"
                label="Estoque"
                placeholder="Estoque"
                value={props.quantidadeProduto}
                onchange={props.setQuantidadeProduto}
              />
              <Inputlabel
                label="Marca"
                placeholder="Marca"
                value={props.marcaProduto}
                onchange={props.setMarcaProduto}
              />
              <Inputlabel
                label="Modelo"
                placeholder="Modelo"
                value={props.modelo}
                onchange={props.setModelo}
              />
              <Inputlabel
                label="Quilometragem"
                placeholder="Quilometragem"
                value={props.quilometragem}
                onchange={props.setQuilometragem}
              />
              <Inputlabel
                label="Tipo de Combustível"
                placeholder="Tipo de Combustível"
                value={props.tipoCombustivel}
                onchange={props.setTipoCombustivel}
              />
              <div className="w-75">
                <label htmlFor="Imagem" className="mb-2 mx-2">
                  Imagem
                </label>
                <input
                  type="file"
                  id="Imagem"
                  className="form-control mb-3 border-bottom"
                  placeholder="URL da Imagem"
                  value={props.imagem}
                  onChange={props.setImagem}
                />
              </div>

              {/* Botão submit oculto para garantir que o Enter funcione */}
              <button type="submit" style={{ display: "none" }}></button>
            </form>
          </div>
          {props.Produtoserr && (
            <span className="p-3 m-3 bg-danger-subtle text-danger rounded border border-2 border-danger">
              Este veiculo já existe
            </span>
          )}
          {props.camposError && (
            <span className="p-3 m-3 bg-danger-subtle text-danger rounded border border-2 border-danger">
              Preencha todos os campos
            </span>
          )}
          <div className="modal-footer">
            <span
              className="py-2 px-3 btnhover text-light rounded"
              role="button"
              onClick={props.handleCreateVeiculo}
            >
              Criar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
