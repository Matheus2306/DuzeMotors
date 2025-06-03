import React, {  useState } from "react";

const HeaderTerminal = (props) => {
  const[searchTerm, setSearchTerm] = useState("");


  return (
    <div className="p-3 d-flex align-items-center border-bottom border-2 justify-content-between">
      <div className="d-flex align-items-center w-50">
        <span className="fs-5 fw-semibold text-secondary mx-2">
          {props.title}
        </span>
        <div className="w-100 position-relative">
          <input
            id="searchInput"
            type="text"
            placeholder="Procurar"
            className="bg-link-light border-bottom border-dark opacity-50 rounded w-100 p-2 pe-5 shadow"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i
            className="bi bi-search fs-5 text-secondary position-absolute"
            onClick={() =>(props.handleSearch(searchTerm)) }
            style={{
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>
      <span
        className="px-2 py-1 rounded mx-2 btnhover"
        data-bs-toggle="modal"
        data-bs-target={props.target}
        data-bs-whatever="@mdo"
        role="button"
      >
        <i className="bi bi-plus fs-4 text-light"></i>
      </span>
    </div>
  );
};

export default HeaderTerminal;
