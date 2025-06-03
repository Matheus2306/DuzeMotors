import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import Header from "../components/Header";
import TerminalFornecedor from "../components/GerenciamentoDeADM/TerminalFornecedor";
import ModalFornecedor from "../components/GerenciamentoDeADM/ModalFornecedor";
import ModalProduto from "../components/GerenciamentoDeADM/ModalProduto";

const Gerenciamento = () => {
  //coletar o usuario logado
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  //verifica se o usuario é adm
  const isAdm = usuarioLogado && usuarioLogado.Role === "ADM";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === "k") || e.key === "/") {
        e.preventDefault();
        document.getElementById("searchInput").focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Verifica se a tecla pressionada é "Enter"
      if (e.key === "Enter") {
        // Verifica se o campo de pesquisa está focado
        const searchInput = document.getElementById("searchInput");
        if (document.activeElement === searchInput) {
          e.preventDefault(); // Impede o comportamento padrão do Enter
          // Chama a função de pesquisa com o valor atual do campo de pesquisa
          setSearchTerm(searchInput.value); // Atualiza o termo de busca com o valor do input
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  //fornecedores
  const [email, setemail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [numero, setNumero] = useState("");
  const [nome, setNome] = useState("");
  const [fornecedores, setFornecedores] = useState(() => {
    const data = localStorage.getItem("fornecedores");
    try {
      return data && data !== "undefined" ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  const [fornecedoresExibidos, setFornecedoresExibidos] =
    useState(fornecedores);
  const [searchTerm, setSearchTerm] = useState(""); // Adicione este estado
  const [cnpjError, setCnpjError] = useState(false);
  const [camposError, setCamposError] = useState(false);

  useEffect(() => {
    // Sempre que fornecedores OU searchTerm mudar, atualize a lista exibida
    if (searchTerm.trim() === "") {
      setFornecedoresExibidos(fornecedores);
    } else {
      const fornecedoresFiltrados = fornecedores.filter((fornecedor) =>
        fornecedor.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFornecedoresExibidos(fornecedoresFiltrados);
    }
  }, [fornecedores, searchTerm]);

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

  const camposResetados = () => {
    setNome("");
    setCnpj("");
    setNumero("");
    setemail("");
  };

  //cria a função de fornecedores
  const handleCreateFornecedor = () => {
    //verifica se todos os campos foram preenchidos
    if (!nome || !cnpj || !numero || !email) {
      setCamposError(true);
      setTimeout(() => {
        setCamposError(false);
      }, 3500);
      //campos resetados
      setNome("");
      setCnpj("");
      setNumero("");
      setemail("");
      return;
    } else {
      //verifica se o fornecedor já existe pelo cnpj
      const fornecedoresStorage =
        JSON.parse(localStorage.getItem("fornecedores")) || [];
      const fornecedorExistente = fornecedoresStorage.find(
        (fornecedor) => fornecedor.cnpj === cnpj
      );
      if (fornecedorExistente) {
        setCnpjError(true);
        setTimeout(() => {
          setCnpjError(false);
        }, 3500);
        //limpa os campos do modal
        camposResetados();
      } else {
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
        localStorage.setItem(
          "fornecedores",
          JSON.stringify(fornecedoresStorage)
        );
        setFornecedores(fornecedoresStorage);
        //limpa os campos do modal
        camposResetados();
      }
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
    setFornecedores(fornecedoresAtualizados);
  };
  //função para procurar fornecedor
  const handleSearch = (term) => {
    setSearchTerm(term); // Atualize o termo de busca
  };

  //Produtos
  const [NomeProduto, setNomeProduto] = useState("");
  const [PrecoProduto, setPrecoProduto] = useState("");
  const [QuantidadeProduto, setQuantidadeProduto] = useState("");
  const [MarcaProduto, setMarcaProduto] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Quilometragem, setQuilometragem] = useState("");
  const [tipoCombustivel, setTipoCombustivel] = useState("");
  const [imagem, setImagem] = useState("");
  const [Produtoserr, setProduterr] = useState("");
  const [veiculo, setVeiculo] = useState(() => {
    const data = localStorage.getItem("veiculo");
    try {
      return data && data !== "undefined" ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const camposProdutoResetados = () => {
    setNomeProduto("");
    setPrecoProduto("");
    setQuantidadeProduto("");
    setMarcaProduto("");
    setModelo("");
    setQuilometragem("");
    setTipoCombustivel("");
    setImagem("");
  };
  //função para sincronizar os veiculos
  const sincronizarVeiculos = (veiculosAtualizados) => {
    localStorage.setItem("veiculo", JSON.stringify(veiculosAtualizados));
  };
  //função para criar veiculo
  const handleCreateVeiculo = () => {
    if (
      !NomeProduto ||
      !PrecoProduto ||
      !QuantidadeProduto ||
      !MarcaProduto ||
      !Modelo ||
      !Quilometragem ||
      !tipoCombustivel
    ) {
      setCamposError(true);
      setTimeout(() => {
        setCamposError(false);
      }, 3500);
      //campos resetados
      camposProdutoResetados();
      return;
    } else {
      //verifica se o veiculo já existe pelo nome

      const veiculoExistente = veiculo.find(
        (veiculo) => veiculo.nome === NomeProduto
      );
      if (veiculoExistente) {
        setProduterr(true);
        setTimeout(() => {
          setProduterr(false);
        }, 3500);
        //limpa os campos do modal
        camposProdutoResetados();
        return;
      } else {
        const novoVeiculo = {
          id: gerarId(),
          nome: NomeProduto,
          preco: PrecoProduto,
          quantidade: QuantidadeProduto,
          marca: MarcaProduto,
          modelo: Modelo,
          quilometragem: Quilometragem,
          tipoCombustivel: tipoCombustivel,
          imagem: imagem,
        };
        //adiciona o novo veiculo ao localStorage
        const veiculosStorage =
          JSON.parse(localStorage.getItem("veiculo")) || [];
        veiculosStorage.push(novoVeiculo);
        sincronizarVeiculos(veiculosStorage);
        //zera os campos do modal
        camposProdutoResetados();
        window.location.reload(); // Recarrega a página para atualizar a lista de veículos
      }
    }
  };
  // Função para remover um veículo
  const handleRemoveVeiculo = (veiculo) => {
    // Obtém a lista atual de veículos do localStorage
    const veiculosStorage = JSON.parse(localStorage.getItem("veiculo")) || [];

    // Filtra o veículo a ser removido
    const veiculosAtualizados = veiculosStorage.filter(
      (v) => v.id !== veiculo.id
    );

    // Atualiza o localStorage com a lista filtrada
    sincronizarVeiculos(veiculosAtualizados);
    setVeiculo(veiculosAtualizados);
  };
  // Função para procurar veículo
  const handleSearchVeiculo = (term) => {
    setSearchTerm(term); // Atualize o termo de busca
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
            <div className="w-100 h-100 mt-4 p-4 d-flex gap-4">
              <TerminalFornecedor
                title="Fornecedor"
                ItemManipuladoFor={fornecedoresExibidos}
                handleRemoveFornecedor={handleRemoveFornecedor}
                handleSearch={handleSearch}
                target="#exampleModal"
              />
              <TerminalFornecedor
                title="Produtos"
                ItemManipuladoVei={veiculo}
                handleRemoveFornecedor={handleRemoveVeiculo}
                handleSearch={handleSearchVeiculo}
                target="#ModalProduto"
              />
            </div>

            <ModalFornecedor
              setNome={setNome}
              setemail={setemail}
              setCnpj={setCnpj}
              setNumero={setNumero}
              handleCreateFornecedor={handleCreateFornecedor}
              nome={nome}
              cnpj={cnpj}
              numero={numero}
              email={email}
              cnpjError={cnpjError}
              camposError={camposError}
            />
            <ModalProduto
              setNomeProduto={setNomeProduto}
              setPrecoProduto={setPrecoProduto}
              setQuantidadeProduto={setQuantidadeProduto}
              setMarcaProduto={setMarcaProduto}
              setModelo={setModelo}
              setQuilometragem={setQuilometragem}
              setTipoCombustivel={setTipoCombustivel}
              setImagem={setImagem}
              handleCreateVeiculo={handleCreateVeiculo}
              nomeProduto={NomeProduto}
              precoProduto={PrecoProduto}
              quantidadeProduto={QuantidadeProduto}
              marcaProduto={MarcaProduto}
              modelo={Modelo}
              quilometragem={Quilometragem}
              tipoCombustivel={tipoCombustivel}
              imagem={imagem}
              Produtoserr={Produtoserr}
              camposError={camposError}
            />
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
