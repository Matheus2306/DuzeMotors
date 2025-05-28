import React from "react";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import Header from "../components/Header";
import TerminalFornecedor from "../components/Fornecedor/TerminalFornecedor";

const Gerenciamento = () => {
  //coletar o usuario logado
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  //verifica se o usuario é adm
  const isAdm = usuarioLogado && usuarioLogado.Role === "ADM";

  return (
    <div>
      {isAdm ? (
        <div className="w-100 vh-100 ">
          <Header />
          <div className="w-100 h-100 ">
            <div className="text-center mt-4">
              <span className="fs-4 fw-semibold">
                gerenciamento de Administrador
              </span>
            </div>
            <div className="w-100 h-100 mt-4 p-4">
              <TerminalFornecedor title="Fornecedor"/>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Gerenciamento;
