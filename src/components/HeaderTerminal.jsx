import React from "react";

const HeaderTerminal = (props) => {
  return (
    <div className="p-3 d-flex align-items-center border-bottom border-2 justify-content-between">
      <span className="fs-5 fw-semibold text-secondary mx-2">{props.title}</span>
      <span className="px-2 py-1 rounded mx-2 btnhover" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" role="button">
        <i className="bi bi-plus fs-4 text-light"></i>
      </span>
    </div>
  );
};

export default HeaderTerminal;
