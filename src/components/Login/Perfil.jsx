import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Perfil() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    const perfilSalvo = localStorage.getItem('perfil');
    if (perfilSalvo) {
      const dados = JSON.parse(perfilSalvo);
      setNome(dados.nome || '');
      setCpf(dados.cpf || '');
      setTelefone(dados.telefone || '');
      setEmail(dados.email || '');
      setSenha(dados.senha || '');
      setMetodoPagamento(dados.metodoPagamento || '');
    }
  }, []);

  const validarEmail = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex < 1) return false;
    const dotIndex = email.indexOf('.', atIndex);
    if (dotIndex <= atIndex + 1) return false;
    if (dotIndex === email.length - 1) return false;
    return true;
  };

  const validarTelefone = (telefone) => {
    const numeros = telefone.replace(/\D/g, '');
    return numeros.length === 11;
  };

  const validarSenha = (senha) => {
    if (senha.length < 8) return false;
    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;
    let temEspecial = false;

    for (let i = 0; i < senha.length; i++) {
      const char = senha.charAt(i);
      if (char >= 'A' && char <= 'Z') temMaiuscula = true;
      else if (char >= 'a' && char <= 'z') temMinuscula = true;
      else if (char >= '0' && char <= '9') temNumero = true;
      else temEspecial = true;
    }

    return temMaiuscula && temMinuscula && temNumero && temEspecial;
  };

  const validarCPF = (cpf) => {
    const numeros = cpf.replace(/\D/g, '');
    return numeros.length === 11;
  };

  const handleSalvar = () => {
    if (!nome.trim()) {
      alert('Por favor, insira seu nome.');
      return;
    }
    if (!validarCPF(cpf)) {
      alert('Por favor, insira um CPF válido com 11 dígitos.');
      return;
    }
    if (!validarTelefone(telefone)) {
      alert('Por favor, insira um telefone válido com 11 dígitos (DDD + número).');
      return;
    }
    if (!validarEmail(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
    if (!validarSenha(senha)) {
      alert(
        'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.'
      );
      return;
    }
    if (!metodoPagamento) {
      alert('Por favor, selecione um método de pagamento.');
      return;
    }

    const dadosPerfil = {
      nome,
      cpf,
      telefone,
      email,
      senha,
      metodoPagamento,
    };

    localStorage.setItem('perfil', JSON.stringify(dadosPerfil));
    alert('Dados atualizados com sucesso!');
    navigate('/');
  };

  return (
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
        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="000.000.000-00"
          maxLength={14}
        />
      </div>

      <div className="perfil-secao">
        <label>Telefone:</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(00) 00000-0000"
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
  );
}
