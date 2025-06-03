import React, { useState } from "react";
import { useNavigate } from "react-router";

// Exemplo de Inputlabel.jsx
const Inputlabel = ({ label, placeholder, value, onchange }) => (
  <div className="w-75">
    <label className="mb-2 mx-2">{label}</label>
    <input
      className="form-control mb-3"
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  </div>
);

const FormCadastro = () => {
  const [Senha, setSenha] = useState("");
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [Role, setRole] = useState("user");
  const [erros, setErros] = useState({});
  const [erro, seterro] = useState(false);
  const navigate = useNavigate();

  // Máscara para CPF
  const handleCPFChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCPF(value);
  };

  // Validações
  const validarNome = (nome) => nome.trim().length >= 3;
  const validarEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validarSenha = (senha) => {
    return (
      senha.length >= 8 &&
      /[A-Z]/.test(senha) && // pelo menos uma maiúscula
      /[a-z]/.test(senha) && // pelo menos uma minúscula
      /[^A-Za-z0-9]/.test(senha) // pelo menos um caractere especial
    );
  };
  const validarCPF = (cpf) =>
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);

  const criarUsuario = () => {
    const novosErros = {};
    if (!validarNome(Nome)) novosErros.Nome = "Nome deve ter pelo menos 3 letras.";
    if (!validarEmail(Email)) novosErros.Email = "Email inválido.";
    if (!validarSenha(Senha)) novosErros.Senha = "Senha deve ter pelo menos 8 caracteres, uma maiúscula, uma minúscula e um caractere especial.";
    if (!validarCPF(CPF)) novosErros.CPF = "CPF inválido. Use o formato 000.000.000-00.";

    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    const usuario = {
      id: Math.floor(Math.random() * 1000000),
      nome: Nome,
      email: Email,
      senha: Senha,
      cpf: CPF,
      Role: Role,
    };

    const usuariosExistentes =
      JSON.parse(localStorage.getItem("usuariosCadastro")) || [];
    usuariosExistentes.push(usuario);
    localStorage.setItem(
      "usuariosCadastro",
      JSON.stringify(usuariosExistentes)
    );
    navigate("/login");
  };

  return (
    <div className="w-25 shadow d-flex justify-center align-items-center flex-column rounded bg-light p-4">
      <span className="fs-4 fw-semibold">Cadastro</span>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
        <Inputlabel
          label="Nome"
          placeholder="Nome"
          value={Nome}
          onchange={(e) => setNome(e.target.value)}
        />
        {erros.Nome && <span style={{ color: "red" }}>{erros.Nome}</span>}

        <Inputlabel
          label="Email"
          placeholder="Email"
          value={Email}
          onchange={(e) => setEmail(e.target.value)}
        />
        {erros.Email && <span style={{ color: "red" }}>{erros.Email}</span>}

        <Inputlabel
          label="Senha"
          placeholder="Senha"
          value={Senha}
          onchange={(e) => setSenha(e.target.value)}
        />
        {erros.Senha && <span style={{ color: "red" }}>{erros.Senha}</span>}

        <Inputlabel
          label="CPF"
          placeholder="CPF"
          value={CPF}
          onchange={handleCPFChange}
        />
        {erros.CPF && <span style={{ color: "red" }}>{erros.CPF}</span>}
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
  );
};

export default FormCadastro;
