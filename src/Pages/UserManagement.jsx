import React, { useState, useEffect } from "react";
import Footer from "../components/Geral/Footer.jsx";
import NotFound from "./NotFound";
import { useNavigate } from "react-router";
import Header from "../components/Login/Header.jsx";


export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [search, setSearch] = useState(""); // Estado da pesquisa

  useEffect(() => {
    const savedUsers = localStorage.getItem("usuariosCadastro");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      const defaultUsers = [];
      setUsers(defaultUsers);
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  const updateLocalStorage = (newUsers) => {
    localStorage.setItem("usuariosCadastro", JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const startEdit = (user) => {
    setEditingId(user.id);
    setForm({ name: user.nome, email: user.email, password: user.senha });
  };

  const saveEdit = () => {
    const updated = users.map((u) =>
      u.id === editingId
        ? { ...u, nome: form.name, email: form.email, senha: form.password }
        : u
    );
    updateLocalStorage(updated);

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const editedUser = updated.find((u) => u.id === editingId);
    if (usuarioLogado && editedUser && usuarioLogado.id === editingId) {
      localStorage.setItem("usuarioLogado", JSON.stringify(editedUser));
    }

    setEditingId(null);
    setForm({ name: "", email: "", password: "" });
  };

  const deleteUser = (id) => {
    if (window.confirm("Tem certeza que quer deletar esse usuário?")) {
      const updated = users.filter((u) => u.id !== id);
      updateLocalStorage(updated);
      const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
      if (usuarioLogado && usuarioLogado.id === id) {
        localStorage.removeItem("usuarioLogado");
      }
    }
  };

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const isAdm = usuarioLogado && usuarioLogado.Role === "ADM";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gerenciamento");
  };

  // Filtro de usuários com base no campo de busca
  const filteredUsers = users.filter(
    (user) =>
      user.nome.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {isAdm ? (
        <div className="w-100 h-100">
          <Header />
          <div className="">
            <span
              className="mx-5 text-decoration-none text-black hovertext fs-5"
              role="button"
              onClick={handleClick}
            >
              <i className="bi bi-arrow-left">Voltar</i>
            </span>
          </div>
          <div className="user-management vh-100 px-3">
            <h1>Gerenciamento de Usuários</h1>

            {/* Campo de pesquisa */}
            <input
              type="text"
              placeholder="Pesquisar por nome ou e-mail"
              className="form-control my-3 border-bottom border-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-y-scroll h-75">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div
                    className="user-card border p-3 mb-2 rounded"
                    key={user.id}
                  >
                    {editingId === user.id ? (
                      <>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="form-control mb-2"
                        />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="form-control mb-2"
                        />
                        <input
                          type="password"
                          value={form.password}
                          onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                          }
                          className="form-control mb-2"
                        />
                        <button
                          className="btn btn-primary me-2"
                          onClick={saveEdit}
                        >
                          Salvar
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setEditingId(null)}
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>Nome:</strong> {user.nome}
                        </p>
                        <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Senha:</strong> ******
                        </p>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => startEdit(user)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Deletar
                        </button>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p>Nenhum usuário encontrado.</p>
              )}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
