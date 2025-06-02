import React, { useState } from "react";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import Header from "../components/Header";
import TerminalFornecedor from "../components/GerenciamentoDeADM/TerminalFornecedor";

const Gerenciamento = () => {
  //coletar o usuario logado
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  //verifica se o usuario é adm
  const isAdm = usuarioLogado && usuarioLogado.Role === "ADM";
  const [email, setemail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [numero, setNumero] = useState("");
  const [nome, setNome] = useState("");
  const [fornecedores] = useState(() => {
    // Tenta carregar os fornecedores do localStorage, ou retorna um array vazio se não houver dados
    return JSON.parse(localStorage.getItem("fornecedores")) || [];
  });

  const sincronizarFornecedores = (fornecedoresAtualizados) => {
    localStorage.setItem(
      "fornecedores",
      JSON.stringify(fornecedoresAtualizados)
    );
  };

  const gerarId = () => {
    // Gera um ID único e aleatório para o fornecedor
    return Math.floor(Math.random() * 1000000);
  };

  //cria a função de fornecedores
  const handleCreateFornecedor = () => {
    //verifica se todos os campos foram preenchidos
    if (!nome || !cnpj || !numero || !email) {
      alert("Por favor, preencha todos os campos.");
      return;
    } else {
      //cria um localStorage para armazenar os fornecedores
      const fornecedoresStorage =
        JSON.parse(localStorage.getItem("fornecedores")) || [];
      // cria um novo fornecedor
      const novoFornecedor = {
        id: gerarId(),
        nome: nome,
        cnpj: cnpj,
        numero: numero,
        email: email,
      };
      //adiciona o novo fornecedor ao localStorage
      fornecedoresStorage.push(novoFornecedor);
      localStorage.setItem("fornecedores", JSON.stringify(fornecedoresStorage));
      //atualiza o estado dos fornecedores

      //limpa os campos do modal
      setNome("");
      setCnpj("");
      setNumero("");
      setemail("");
      window.location.reload(); //recarrega a página para atualizar a lista de fornecedores
    }
  };

  // Função para remover um fornecedor
  const handleRemoveFornecedor = (fornecedor) => {
    // Obtém a lista atual de fornecedores do localStorage
    const fornecedoresStorage =
      JSON.parse(localStorage.getItem("fornecedores")) || [];

    // Filtra o fornecedor a ser removido
    const fornecedoresAtualizados = fornecedoresStorage.filter(
      (f) => f.id !== fornecedor.id
    );

    // Atualiza o localStorage com a lista filtrada
    sincronizarFornecedores(fornecedoresAtualizados);
    window.location.reload(); // Recarrega a página para atualizar a lista de fornecedores
  };

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
              <TerminalFornecedor
                title="Fornecedor"
                ItemManipulado={fornecedores}
                setemail={setemail}
                setCnpj={setCnpj}
                setNumero={setNumero}
                setNome={setNome}
                handleCreateFornecedor={handleCreateFornecedor}
                handleRemoveFornecedor={handleRemoveFornecedor}
              />
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
