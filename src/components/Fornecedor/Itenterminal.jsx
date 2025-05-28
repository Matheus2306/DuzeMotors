import React from "react";

const Itenterminal = (props) => {
  return (
    <div className="w-100 p-2 justify-content-between d-flex shadow-sm mt-2">
      <div className="d-flex flex-column gap-2 mx-3 ">
        <span>{props.nome}</span>
        <span>{props.cnpj}</span>
      </div>
      <div className="d-flex gap-3 align-items-center mx-3 ">
        <div className="d-flex flex-column gap-2">
          <span>{props.numero}</span>
          <span>{props.email}</span>
        </div>

        {/* Passa o fornecedor atual como argumento para a função */}
        <i
          className="bi bi-trash fs-5 text-danger"
          onClick={() =>
            props.handleDeleteFornecedor({
              id: props.id,
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
