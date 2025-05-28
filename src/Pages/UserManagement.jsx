import React, { useState, useEffect } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NotFound from "./NotFound";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

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
    setForm({ name: user.name, email: user.email, password: user.password });
  };

  const saveEdit = () => {
    const updated = users.map((u) =>
      u.id === editingId
        ? { ...u, name: form.name, email: form.email, password: form.password }
        : u
    );
    updateLocalStorage(updated);
    setEditingId(null);
    setForm({ name: "", email: "", password: "" });
  };

  const deleteUser = (nome) => {
    if (window.confirm("Tem certeza que quer deletar esse pobre? Lá ele...")) {
      const updated = users.filter((u) => u.nome !== nome);
      updateLocalStorage(updated);
    }
  };

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  //verifica se o usuario é adm
  const isAdm = usuarioLogado && usuarioLogado.Role === "ADM";

  return (
    <div>
      {isAdm ? (
        <div className="w-100 h-100">
          <Header />
          <div className="user-management vh-100">
            <h1>Gerenciamento de Usuários</h1>

            {users.map((user) => (
              <div className="user-card" key={user.id}>
                {editingId === user.id ? (
                  <>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                    <button className="save" onClick={saveEdit}>
                      Salvar
                    </button>
                    <button
                      className="cancel"
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
                    <button className="edit" onClick={() => startEdit(user)}>
                      Editar
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteUser(user.nome)}
                    >
                      Deletar
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
          <Footer />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
