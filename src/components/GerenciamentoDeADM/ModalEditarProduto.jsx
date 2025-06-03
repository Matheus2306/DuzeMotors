import React from "react";
import Inputlabel from "../Cadastro/Inputlabel";

const ModalEditarProduto = ({
  id,
  nome,
  setNome,
  preco,
  setPreco,
  quantidade,
  setQuantidade,
  marca,
  setMarca,
  modelo,
  setModelo,
  quilometragem,
  setQuilometragem,
  tipoCombustivel,
  setTipoCombustivel,
  imagem,
  setImagem,
  handleEditProduto,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduto(id, {
      nome,
      preco,
      quantidade,
      marca,
      modelo,
      quilometragem,
      tipoCombustivel,
      imagem,
    });
  };

  return (
    <div
      className="modal fade"
      id="ModalEditarProduto"
      tabIndex="-1"
      aria-labelledby="modalEditarProdutoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <h1 className="modal-title fs-5" id="modalEditarProdutoLabel">
              Editar Produto
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
                value={nome}
                onchange={setNome}
              />
              <Inputlabel
                label="Preço"
                placeholder="Preço"
                type="number"
                value={preco}
                onchange={setPreco}
              />
              <Inputlabel
                label="Quantidade"
                placeholder="Quantidade"
                type="number"
                value={quantidade}
                onchange={setQuantidade}
              />
              <Inputlabel
                label="Marca"
                placeholder="Marca"
                value={marca}
                onchange={setMarca}
              />
              <Inputlabel
                label="Modelo"
                placeholder="Modelo"
                value={modelo}
                onchange={setModelo}
              />
              <Inputlabel
                label="Quilometragem"
                placeholder="Quilometragem"
                value={quilometragem}
                onchange={setQuilometragem}
              />
              <Inputlabel
                label="Tipo de Combustível"
                placeholder="Tipo de Combustível"
                value={tipoCombustivel}
                onchange={setTipoCombustivel}
              />
              <div className="w-75">
                <label htmlFor="Imagem" className="mb-2 mx-2">
                  Imagem
                </label>
                <input
                  type="file"
                  id="Imagem"
                  className="form-control mb-3 border-bottom"
                  onChange={setImagem}
                />
              </div>
              <button type="submit" style={{ display: "none" }}></button>
            </form>
          </div>
          <div className="modal-footer">
            <span
              className="py-2 px-3 btnhover text-light rounded"
              role="button"
              onClick={handleSubmit}
              data-bs-dismiss="modal"
            >
              Salvar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditarProduto;