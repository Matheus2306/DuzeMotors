import React from "react";

const HeaderTerminal = () => {
  return (
    <div className="p-3 d-flex align-items-center shadow-sm justify-content-between">
      <span className="fs-5 fw-semibold text-secondary mx-2">Fornecedores</span>
      <span className="px-2 py-1 rounded mx-2 btnhover">
        <i className="bi bi-plus fs-4 text-light"></i>
      </span>
    </div>
  );
};

export default HeaderTerminal;
