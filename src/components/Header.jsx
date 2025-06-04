import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  //funções de navegação
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleCarrinhoClick = () => {
    navigate("/Checkout");
  };

  const handlecadastroclick = () => {
    navigate("/Cadastro");
  };
  const handleLoginClick = () => {
    navigate("/Login");
  };
  const handlecatalogoclick = () => {
    navigate("/Catalogo");
  };
  const handleSobreclick = () => {
    navigate("/SobreNos");
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/login");
  };
  
  
  const loginexit = localStorage.getItem("usuarioLogado");
  let loginexitParse = [];
  let isAdmin = false;

    if (loginexit) {
      try {
        loginexitParse = JSON.parse(loginexit);
        isAdmin = loginexitParse.Role === "ADM";
      } catch {
        loginexitParse = null;
        isAdmin = false;
      }
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
          <span role="button" className="hovertext" onClick={handleLogoClick}>
            Inicio
          </span>
          <span
            role="button"
            className="hovertext"
            onClick={handlecatalogoclick}
          >
            Catalogo
          </span>
          <span role="button" className="hovertext" onClick={handleSobreclick}>
            Sobre
          </span>
          <a
            href="https://wa.me/551436028600"
            role="button"
            className="hovertext text-light text-decoration-none"
          >
            Contato
          </a>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div
            className="hover px-3 py-2 rounded text-light"
            onClick={handleCarrinhoClick}
          >
            <i className="bi bi-cart fs-5"></i>
          </div>
          {!loginexit ? (
            <div className="d-flex align-items-center gap-2">
              <div
                role="button"
                onClick={handleLoginClick}
                className="text-light py-2 px-3 rounded hover"
              >
                Entrar
              </div>
              <div
                role="button"
                onClick={handlecadastroclick}
                className="text-light py-2 px-3 rounded btnhover "
              >
                Cadastrar
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-2 dropdown">
              <span className="text-light">Olá {loginexitParse.nome}</span>
              <i
                className="bi bi-person text-light fs-4 px-2 py-1 rounded hover"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              ></i>
              <ul className="dropdown-menu bg-black" id="dropdown">
                <li className="text-center">
                  <span
                    className="text-light hovertext px-2 py-1"
                    role="button"
                    onClick={() => navigate("/Perfil")}
                  >
                    Perfil
                  </span>
                </li>
                {isAdmin && (
                  <li className="text-center">
                    <span
                      className="text-light hovertext px-2 py-1"
                      role="button"
                      onClick={() => navigate("/Gerenciamento")}
                    >
                      Gerenciamento
                    </span>
                  </li>
                )}

                <li className="text-center">
                  
                  <span
                  handleLogout
                    className="text-light hovertext px-2 py-1"
                    role="button"
                    onClick={() => {
                      localStorage.removeItem("usuarioLogado");
                      navigate("/");
                    }}
                  >
                    Sair
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
