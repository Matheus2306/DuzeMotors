import React, { useState } from "react";
import HeaderTerminal from "../HeaderTerminal";
import Itenterminal from "./Itenterminal";
import ModalFornecedor from "./ModalFornecedor";

const TerminalFornecedor = (props) => {
  const [email, setemail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [numero, setNumero] = useState("");
  const [nome, setNome] = useState("");
  const [fornecedores] = useState(()=> {
    // Tenta carregar os fornecedores do localStorage, ou retorna um array vazio se não houver dados
    return JSON.parse(localStorage.getItem("fornecedores")) || [];
  });
  
  const sincronizarFornecedores = (fornecedoresAtualizados) => {
    localStorage.setItem("fornecedores", JSON.stringify(fornecedoresAtualizados));
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
    const fornecedoresStorage = JSON.parse(localStorage.getItem("fornecedores")) || [];
    
    // Filtra o fornecedor a ser removido
    const fornecedoresAtualizados = fornecedoresStorage.filter(
      (f) => f.id !== fornecedor.id
    );
    
    // Atualiza o localStorage com a lista filtrada
    sincronizarFornecedores(fornecedoresAtualizados);
    window.location.reload(); // Recarrega a página para atualizar a lista de fornecedores
};


  return (
    <div className="w-50 h-75 shadow rounded">
      <HeaderTerminal title={props.title}/>
      <div className="h-75 overflow-y-scroll border-bottom border-2">
        {fornecedores.map((fornecedor) => (
          <Itenterminal
            Id={fornecedor.id}
            nome={fornecedor.nome}
            cnpj={fornecedor.cnpj}
            numero={fornecedor.numero}
            email={fornecedor.email}
            handleDeleteFornecedor={handleRemoveFornecedor}
          />
        ))}
      </div>
      <ModalFornecedor
        setNome={setNome}
        setemail={setemail}
        setCnpj={setCnpj}
        setNumero={setNumero}
        handleCreateFornecedor={handleCreateFornecedor}
      />
      
    </div>
  );
};

export default TerminalFornecedor;
