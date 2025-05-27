import React from "react";

const terminalItemForne = () => {
  return (
    <div className="w-100 p-2 justify-content-between d-flex shadow-sm mt-2">
      <div className="d-flex flex-column gap-2 mx-3 ">
        <span>Fornecedor1</span>
        <span>CNPJ</span>
      </div>
      <div className="d-flex gap-3 align-items-center mx-3 ">
        <div className="d-flex flex-column gap-2">
          <span>Número</span>
          <span>Email</span>
        </div>
        <span>
          <i className="bi bi-trash fs-5 text-danger"></i>
        </span>
      </div>
    </div>
  );
};

export default terminalItemForne;
