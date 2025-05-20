import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar bg-black navbar-expand-lg p-2 justify-content-around"
        onClick={handleLogoClick}
        role="button"
      >
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-bicycle text-danger fs-2"></i>
          <span className="text-light fw-bold fs-5">DuzéMotors</span>
        </div>
        <div className="d-flex align-items-center text-light gap-5 fw-bold">
          <span>Inicio</span>
          <span>Catalogo</span>
          <span>Sobre</span>
          <span>Contato</span>
        </div>

        <div>
          <div className="hover px-3 py-2 rounded text-light">
            <i className="bi bi-cart fs-5"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
