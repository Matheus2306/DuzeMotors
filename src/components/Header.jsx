import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleCarrinhoClick = () => {
    navigate("/Checkout");
  };

  const handlecadastroclick = () => {
    navigate("/Cadastro");
  }
  const handleLoginClick = () => {
    navigate("/Login");
  }
  return (
    <div>
      <nav className="navbar bg-black navbar-expand-lg p-2 justify-content-around">
        <div
          className="d-flex align-items-center gap-2"
          onClick={handleLogoClick}
          role="button"
        >
          <i className="bi bi-bicycle text-danger fs-2"></i>
          <span className="text-light fw-bold fs-5">DuzéMotors</span>
        </div>
        <div className="d-flex align-items-center text-light gap-5 fw-bold">
          <span role="button" className="hovertext">Inicio</span>
          <span role="button" className="hovertext">Catalogo</span>
          <span role="button" className="hovertext">Sobre</span>
          <span role="button" className="hovertext">Contato</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div
            className="hover px-3 py-2 rounded text-light"
            onClick={handleCarrinhoClick}
          >
            <i className="bi bi-cart fs-5"></i>
          </div>
          <div role="button" onClick={handleLoginClick} className="text-light py-2 px-3 rounded hover">Login</div>
          <div role="button" onClick={handlecadastroclick} className="text-light py-2 px-3 rounded btnhover ">
            Cadastrar
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
