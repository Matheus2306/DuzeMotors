import React from "react";
import Inputlabel from "../Cadastro/Inputlabel";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";

const ModalFornecedor = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleCreateFornecedor();
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
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
                value={props.nome}
                onchange={props.setNome}
              />
              <Inputlabel
                label="CNPJ"
                placeholder="CNPJ"
                value={props.cnpj}
                onchange={props.setCnpj}
              />

              <label htmlFor="Telefone" className="mb-2 mx-2">
                Telefone
              </label>
              <TelefoneBrasileiroInput
                placeholder="Telefone"
                value={props.numero}
                onChange={(ev) => props.setNumero(ev.target.value)}
                temDDD
                separaDDD
                className="form-control mb-3 border-bottom"
                inputMode="numeric"
                maxLength={15}
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
                  value={props.email}
                  onChange={(e) => props.setemail(e.target.value)}
                />
              </div>
              {/* Botão submit oculto para garantir que o Enter funcione */}
              <button type="submit" style={{ display: "none" }}></button>
            </form>
          </div>
          {props.cnpjError && (
            <span className="p-3 m-3 bg-danger-subtle text-danger rounded border border-2 border-danger">
              Este fornecedor já existe
            </span>
          )}
          {props.camposError && (
            <span className="p-3 m-3 bg-danger-subtle text-danger rounded border border-2 border-danger">
              Preencha todos os campos
            </span>
          )}
          {props.cnpjErrado && (
            <span className="p-3 m-3 bg-danger-subtle text-danger rounded border border-2 border-danger">
              CNPJ inválido
            </span>
          )}
          <div className="modal-footer">
            <span
              className="py-2 px-3 btnhover text-light rounded"
              role="button"
              onClick={props.handleCreateFornecedor}
            >
              Criar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFornecedor;
