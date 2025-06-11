import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import HeaderLogs from '../HeaderLogs';
import Footer from '../Footer';
import TelefoneBrasileiroInput from 'react-telefone-brasileiro';

export default function Perfil() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [cpf, setCpf] = useState('');
  const [id, setId] = useState(null); // pra identificar o usuário logado
const [Role, setRole] = useState(''); // para armazenar o papel do usuário
  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
      setRole(usuarioLogado.Role || 'teste'); // Define o papel do usuário, se existir
      setNome(usuarioLogado.nome || '');
      setCpf(usuarioLogado.cpf || '');
      setTelefone(usuarioLogado.telefone || '');
      setEmail(usuarioLogado.email || '');
      setSenha(usuarioLogado.senha || '');
      setMetodoPagamento(usuarioLogado.metodoPagamento || '');
      setId(usuarioLogado.id); // guarda o ID pra atualizar depois
    }
    console.log(usuarioLogado.Role)
  }, []);

  const validarEmail = (email) => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.', atIndex);
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  const validarTelefone = (telefone) => telefone.replace(/\D/g, '').length === 11;

  const validarSenha = (senha) => {
    return senha.length >= 8 &&
      /[A-Z]/.test(senha) &&
      /[a-z]/.test(senha) &&
      /[0-9]/.test(senha) &&
      /[^A-Za-z0-9]/.test(senha);
  };

  // Função para aplicar máscara e impedir letras
  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
  };

  // Função para validar CPF (formato)
  const validarCPF = (cpf) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);

  const handleSalvar = () => {
    if (!nome.trim()) return alert('Por favor, insira seu nome.');
    if (!validarCPF(cpf)) return alert('CPF inválido (formato: 000.000.000-00).');
    if (!validarTelefone(telefone)) return alert('Telefone inválido (11 dígitos com DDD).');
    if (!validarEmail(email)) return alert('Email inválido.');
    if (!validarSenha(senha)) {
      return alert('A senha deve ter ao menos 8 caracteres, incluindo uma maiúscula, minúscula, número e símbolo.');
    }
    if (!metodoPagamento) return alert('Escolha um método de pagamento.');

    const usuarioAtualizado = {
      id,
      nome,
      cpf,
      telefone,
      email,
      senha,
      metodoPagamento,
      Role,
    };

    // Atualiza o usuário logado
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado));

    // Atualiza na lista de usuários cadastrados
    const usuarios = JSON.parse(localStorage.getItem('usuariosCadastro')) || [];
    const usuariosAtualizados = usuarios.map((u) =>
      u.id === usuarioAtualizado.id ? { ...u, ...usuarioAtualizado } : u
    );
    localStorage.setItem('usuariosCadastro', JSON.stringify(usuariosAtualizados));

    alert('Perfil atualizado com sucesso!');
    navigate('/');
  };

  return (
    <div>
      <HeaderLogs />

      <div className="perfil-container">
        <h1 className="perfil-titulo">Meu Perfil</h1>

        <div className="perfil-secao">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
          />
        </div>

       
          <div className="perfil-secao">
          <label htmlFor="Telefone">Telefone:</label>
        <TelefoneBrasileiroInput
        placeholder="(XX) XXXXX-XXXX"
        value={telefone}
        onChange={(ev) => setTelefone(ev.target.value)}
        separaNono
        temDDD
        inputMode="numeric"
        maxLength={15}
/>
        </div>

        <div className="perfil-secao">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@email.com"
          />
        </div>

        <div className="perfil-secao">
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="********"
          />
        </div>

        <div className="perfil-secao">
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
            placeholder="000.000.000-00"
            maxLength={14}
          />
          {!validarCPF(cpf) && cpf.length === 14 && (
            <span style={{ color: "red" }}>CPF inválido</span>
          )}
        </div>

        <div className="perfil-secao">
          <label>Método de Pagamento:</label>
          <select
            value={metodoPagamento}
            onChange={(e) => setMetodoPagamento(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="pix">PIX</option>
            <option value="cartao">Cartão de Crédito</option>
            <option value="boleto">Boleto Bancário</option>
          </select>
        </div>

        <div className="perfil-botao-container">
          <button className="btn-acao" onClick={handleSalvar}>
            Salvar Alterações
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
