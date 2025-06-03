import React, { use, useState } from "react";
import Inputlabel from "./Inputlabel";
import { useNavigate } from "react-router";

const FormCadastro = () => {
  const [Senha, setSenha] = useState("");
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [Role, setRole] = useState("user"); // Define o papel padrão como 'user'
  const navigate = useNavigate();
  const [erro, seterro] = useState(false);

  //Gerar ID
  const gerarId = () => {
    return Math.floor(Math.random() * 1000000);
  }

  //função para criar o usuario e armazenar no localStorage
  const criarUsuario = () => {
    if (!Nome || !Email || !Senha || !CPF) {
      seterro(true);
      setTimeout(() => {
        seterro(false);
      }, 3500);
      return;
    } else {
      const usuario = {
        id: gerarId(),
        nome: Nome,
        email: Email,
        senha: Senha,
        cpf: CPF,
        Role: Role,
      };

      // Verifica se o localStorage já possui usuários
      const usuariosExistentes =
        JSON.parse(localStorage.getItem("usuariosCadastro")) || [];
      usuariosExistentes.push(usuario);
      localStorage.setItem(
        "usuariosCadastro",
        JSON.stringify(usuariosExistentes)
      );
      navigate("/login");
    }
  };

  return (
    <div className="w-25 shadow d-flex justify-center align-items-center flex-column rounded bg-light p-4">
      <span className="fs-4 fw-semibold">Cadastro</span>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
        <Inputlabel label="Nome" placeholder="Nome" onchange={setNome} />
        <div className="w-75">
          <label htmlFor="Email" className="mb-2 mx-2">
            Email
          </label>
          <input
            type="email"
            id="Email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-75">
          <label htmlFor="Email" className="mb-2">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            className="form-control mb-3"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <Inputlabel label="CPF" placeholder="CPF" onchange={setCPF} />
      </div>
      {erro && (
        <div className="w-100 h-25 text-center p-2 bg-danger-subtle rounded border border-danger my-3">
          <span className="text-danger fw-semibold">
            preencha todos os campos
          </span>
        </div>
      )}
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
