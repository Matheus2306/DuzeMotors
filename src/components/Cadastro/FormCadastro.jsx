import React, { useState } from "react";
import { useNavigate } from "react-router";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import Inputlabel from "./Inputlabel";
import Form from "./Form";

const FormCadastro = () => {
  const [Nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [Role, setRole] = useState("user");
  const [erros, setErros] = useState({});
  const [estado, setEstado] = useState(false);
  const navigate = useNavigate();
  // Máscara para CPF
  const handleCPFChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCPF(value);
  };

  const validarSenha = (senha) => {
    return (
      senha.length >= 8 &&
      /[A-Z]/.test(senha) &&
      /[a-z]/.test(senha) &&
      /[0-9]/.test(senha) &&
      /[^A-Za-z0-9]/.test(senha)
    );
  };

  const validarEmail = (email) => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".", atIndex);
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  // Função para enviar novas informações ao localStorage e mudar o estado do usuário para true
  const handleSubmit = () => {
    // Obter os usuários cadastrados no localStorage
    const usuariosExistentes =
      JSON.parse(localStorage.getItem("usuariosCadastro")) || [];

    // Criar o novo usuário com estado inicial
    const usuarioAtualizado = {
      id: Math.floor(Math.random() * 1000000), // Gerar um ID único
      email: Email,
      senha: Senha,
    };

    if (!validarEmail(Email)) return alert("Email inválido.");
    if (!validarSenha(Senha)) {
      return alert(
        "A senha deve ter ao menos 8 caracteres, incluindo uma maiúscula, minúscula, número e símbolo."
      );
    }else{

      // Adicionar o novo usuário ao array de usuários
      usuariosExistentes.push(usuarioAtualizado);
      
      // Salvar no localStorage
      localStorage.setItem(
        "usuariosCadastro",
        JSON.stringify(usuariosExistentes)
      );
      
      // Atualizar o estado para permitir o próximo passo
      setEstado(true);
      
      alert("Cadastro inicial concluído! Complete o restante do cadastro.");
    }
  };

  // Validações
  const validarNome = (nome) => nome.trim().length >= 3;
  const validarCPF = (cpf) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);

  const novosErros = {};
  const criarUsuario = () => {
    if(!Nome || !CPF || !telefone ){
novosErros.campos = "Todos os campos são obrigatórios.";
    }else{

      if (!validarNome(Nome))
        novosErros.Nome = "Nome deve ter pelo menos 3 letras.";
      
      if (!validarCPF(CPF)) return novosErros.cpf = "CPF inválido (formato: 000.000.000-00).";

      if (!telefone);
      novosErros.telefone = "Telefone é obrigatório.";
      
      setErros(novosErros);
      
      const usuario = {
        id: Math.floor(Math.random() * 1000000),
        nome: Nome,
        cpf: CPF,
        telefone: telefone,
        Role: Role,
      };
      
      const usuariosExistentes =
      JSON.parse(localStorage.getItem("usuariosCadastro")) || [];
      usuariosExistentes.push(usuario);
      localStorage.setItem(
        "usuariosCadastro",
        JSON.stringify(usuariosExistentes)
      );
      
      //envia para o localstorege de login o usuario criado
      const usuarioLogin = {
        id: usuario.id,
        nome: usuario.nome,
        cpf: usuario.cpf,
        telefone: usuario.telefone,
        Role: usuario.Role,
        email: Email,
        senha: Senha,
      };
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogin));
      alert("Cadastro completo com sucesso!");
      navigate("/");
    }
  };

  return estado ? (
    <div className="w-25 shadow d-flex justify-center align-items-center flex-column rounded bg-light p-4">
      <span className="fs-4 fw-semibold">Complete o Cadastro</span>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
        <div className="d-flex justify-content-center align-items-center flex-column w-100 mb-3">
          <Inputlabel
            label="Nome"
            placeholder="Nome"
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {erros.Nome && <span style={{ color: "red" }}>{erros.Nome}</span>}
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column w-100 mb-3 ">
          <Inputlabel
          inputmode="numeric"
          value={CPF}
          onChange={handleCPFChange}
          placeholder="000.000.000-00"
          label="CPF"
          maxLength={14}
          />
        </div>

        <div className="d-flex justify-content-center flex-column align-items-center w-100 mb-3">
          <div className="w-75">
            <label htmlFor="Telefone" className="mb-2 mx-2">
              Telefone
            </label>
            <TelefoneBrasileiroInput
              placeholder="(XX) XXXXX-XXXX"
              value={telefone}
              onChange={(ev) => setTelefone(ev.target.value)}
              separaNono
              temDDD
              className="form-control mb-3 border-bottom"
              inputMode="numeric"
              maxLength={15}
            />
          </div>
        </div>
          {novosErros.campos && (
          <span style={{ color: "red" }}>{erros.campos}</span>
          )}
      </div>
      <div className="mt-3">
        <span
          onClick={criarUsuario}
          className="py-2 px-3 btnhover text-light rounded-2"
          role="button"
          >
          Criar
        </span>
      </div>
      <div className="d-flex mt-4 align-items-center gap-2">
        <i className="bi bi-bicycle fs-3 text-danger"></i>
        <span className="fs-5 fw-semibold">DuZéMotors</span>
      </div>
    </div>
  ) : (
    <Form handleSubmit={handleSubmit} setEmail={setEmail} setSenha={setSenha} />
  );
};

export default FormCadastro;

