import React from "react";
import Inputlabel from "../Cadastro/Inputlabel";

const ModalFornecedor = (props) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header justify-content-between">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Criar
            </h1>
            <i
              className="bi bi-x fs-4"
              data-bs-dismiss="modal"
              role="button"
            ></i>
          </div>
          <div class="modal-body">
            <form>
              <Inputlabel
                label="Nome"
                placeholder="Nome"
                onchange={props.setNome}
              />
              <Inputlabel
                label="CNPJ"
                placeholder="CNPJ"
                onchange={props.setCnpj}
              />
              <Inputlabel
                label="Número"
                placeholder="Número"
                onchange={props.setNumero}
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
                  onChange={(e) => props.setemail(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <span
              className="py-2 px-3 btnhover text-light rounded"
              role="button"
              onClick={props.handleCreateFornecedor}
              data-bs-dismiss="modal"
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
