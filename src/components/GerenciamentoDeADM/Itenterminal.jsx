import React from "react";

const Itenterminal = (props) => {
  return (
    <div className="w-100 p-2 justify-content-between d-flex shadow-sm mt-2">
      <div className="d-flex justify-content-between w-50 align-items-center">
        <div className="d-flex flex-column gap-2 mx-3 ">
          <span>{props.nome}</span>
          <span>{props.cnpj}</span>
        </div>
        <div className="d-flex flex-column gap-2 mx-3 ">
          <span>{props.numero}</span>
          <span>{props.email}</span>
        </div>
      </div>

      {/* Passa o fornecedor atual como argumento para a função */}
      <div className="d-flex align-items-center gap-3">
        <span className="hovertext" role="button">Solicitar</span>
        <i
          className="bi bi-trash fs-5 text-danger"
          onClick={() =>
            props.handleDeleteFornecedor({
              id: props.Id,
            })
          }
          role="button"
        ></i>
      </div>
    </div>
  );
};

export default Itenterminal;
