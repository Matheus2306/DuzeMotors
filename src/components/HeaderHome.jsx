import React from "react";
import { useNavigate } from "react-router";

const HeaderHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bgHeader">
      <div className="container-fluid">
        <div
          className="d-flex align-items-center gap-2"
          onClick={handleClick}
          role="button"
        >
          <img src="https://placehold.co/80x65" alt="" />
          <span>
            DuZé<span className="text-secondary">Motors</span>
          </span>
        </div>
        <input
          type="text"
          className="input-group w-50 p-2 rounded-1 border-0 inputColor text-light"
          placeholder="Pesquise"
        />
        <div className="d-flex gap-3 mx-3 align-items-center">
          <a
            className="text-light text-decoration-none d-flex align-items-center gap-1"
            href="https://api.whatsapp.com/send?phone=55999999999&text=Olá! gostaria de falar com um atendente"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
            <span> Contato</span>
          </a>
          <i className="bi bi-bag-fill fs-5" role="button"></i>
          <i className="bi bi-person fs-5" role="button"></i>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
