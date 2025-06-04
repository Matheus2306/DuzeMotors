import React from "react";

const Itenterminal = (props) => {
  return (
    <div className="w-100 p-2 justify-content-between d-flex shadow-sm mt-2">
      <div className="d-flex gap-5 w-50 align-items-center">
        <div className="d-flex flex-column w-25 gap-2 mx-3">
          <span><strong>Nome:</strong> {props.nome}</span>
          <span><strong>CNPJ:</strong> {props.cnpj}</span>
        </div>
        <div className="d-flex flex-column gap-2 mx-3">
          <span><strong>Número:</strong> {props.numero}</span>
          <span><strong>Email:</strong> {props.email}</span>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="hovertext" role="button">Solicitar</span>
        <i
          className="bi bi-pencil-square fs-5 text-secondary"
          data-bs-toggle="modal"
          data-bs-target={props.target2}
          role="button"
          onClick={() => {
            props.setIdFornecedorEditando(props.Id);
            props.setNome(props.nome);
            props.setCnpj(props.cnpj);
            props.setNumero(props.numero);
            props.setEmail(props.email);
          }}
        ></i>
        <i
          className="bi bi-trash fs-5 text-danger"
          onClick={() =>
            props.handleDeleteFornecedor({
              id: props.Id,
              nome: props.nome,
              cnpj: props.cnpj,
              numero: props.numero,
              email: props.email,
            })
          }
          role="button"
        ></i>
      </div>
    </div>
  );
};

export default Itenterminal;
