import React from "react";
import Inputlabel from "../Cadastro/Inputlabel";

const ModalEditarFornecedor = ({
  id,
  nome,
  setNome,
  cnpj,
  setCnpj,
  numero,
  setNumero,
  email,
  setEmail,
  handleEditFornecedor,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditFornecedor(id, { nome, cnpj, numero, email });
  };

  return (
    <div
      className="modal fade"
      id="ModalEditarFornecedor"
      tabIndex="-1"
      aria-labelledby="modalEditarFornecedorLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            <h1 className="modal-title fs-5" id="modalEditarFornecedorLabel">
              Editar Fornecedor
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
                label="CNPJ"
                placeholder="CNPJ"
                value={cnpj}
                onchange={setCnpj}
              />
              <Inputlabel
                label="Número"
                placeholder="Número"
                value={numero}
                onchange={setNumero}
              />
              <div className="w-75">
                <label htmlFor="Email" className="mb-2 mx-2">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="form-control mb-3 border-bottom"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

export default ModalEditarFornecedor;