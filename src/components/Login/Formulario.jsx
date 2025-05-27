import React, { useState } from "react";
import { useNavigate } from "react-router";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [errologin, setErrologin] = useState(false);
  const navigate = useNavigate();
  const handlecadastro = () => {
    navigate("/cadastro");
  };

  //salvar o usuario em um localstorage
  const handleLogin = () => {
    if (email && senha) {
      //verifica se o usuario existe no localStorage
      const usuarios =
        JSON.parse(localStorage.getItem("usuariosCadastro")) || [];
      const usuario = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
      );
      //se o usuario existir, salva no localstorege
      if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        navigate("/");
        return;
      } else {
        setErrologin(true);
        setTimeout(() => {
          setErrologin(false);
        }, 3500);
      }
    } else {
      //muda a classe da div de erro para mostrar o erro
      setErro(true);
      setTimeout(() => {
        setErro(false);
      }, 3500);
      return;
    }
  };
  return (
    <form className="w-25 d-flex flex-column gap-3 p-3 bg-light rounded-3 shadow">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="fw-semibold fs-4 py-2">Entrar</span>
      </div>
      <div className="d-flex flex-column justify-content-center gap-3 align-items-center h-50">
        <div className="w-75">
          <label htmlFor="Email" className="mb-2 mx-2">
            Email
          </label>
          <input
            type="text"
            id="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="w-75">
          <label htmlFor="Senha" className="mb-2 mx-2">
            Senha
          </label>
          <input
            type="password"
            id="Senha"
            onChange={(e) => setSenha(e.target.value)}
            className="form-control"
            placeholder="Senha"
          />
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center gap-2 my-3">
        <small>
          Não poussui conta?{" "}
          <span
            className="text-info text-decoration-underline"
            role="button"
            onClick={handlecadastro}
          >
            Crie
          </span>
        </small>
        <span
          className="p-2 btnhover text-light rounded-2"
          role="button"
          onClick={handleLogin}
        >
          Entrar
        </span>
      </div>
      {errologin && (
        <span className="text-center w-100 p-3 rounded bg-danger-subtle border border-danger text-danger fw-semibold">
          Email ou Senha Invalidos
        </span>
      )}
      {erro && (
        <div className="bg-danger-subtle w-100 p-3 rounded-1 border border-danger fw-semibold text-danger text-center">
          Garanta que todos os campos estejam completos!!
        </div>
      )}

      <div className="d-flex justify-content-center align-items-center gap-2 my-3">
        <i className="bi bi-bicycle fs-3 text-danger"></i>
        <span className="fw-semibold fs-5">DuZéMotors</span>
      </div>
    </form>
  );
};

export default Formulario;
