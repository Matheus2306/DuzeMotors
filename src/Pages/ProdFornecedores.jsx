import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Simulação de produtos disponíveis no sistema
const produtosDisponiveis = [
  { id: 1, nome: 'Queijo Mussarela' },
  { id: 2, nome: 'Queijo Parmesão' },
  { id: 3, nome: 'Requeijão Cremoso' },
];

export default function AdicionarProdutosAoFornecedor({ fornecedorSelecionado }) {
  const [produtosAdicionados, setProdutosAdicionados] = useState([]);
  const [novoProduto, setNovoProduto] = useState('');
  
  const handleAddProdutoExistente = (produto) => {
    if (!produtosAdicionados.some((p) => p.id === produto.id)) {
      setProdutosAdicionados([...produtosAdicionados, produto]);
    }
  };

  const handleCriarNovoProduto = () => {
    if (novoProduto.trim() !== '') {
      const novo = {
        id: Date.now(),
        nome: novoProduto,
      };
      setProdutosAdicionados([...produtosAdicionados, novo]);
      setNovoProduto('');
    }
  };

  const handleSalvar = () => {
    console.log('Produtos salvos para o fornecedor:', fornecedorSelecionado?.nome);
    console.log('Lista de produtos adicionados:', produtosAdicionados);
    
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className="text-danger fw-bold mb-4">Adicionar Produtos ao Fornecedor</h2>
        <h5 className="mb-4">Fornecedor: <span className="text-dark">{fornecedorSelecionado?.nome || 'Não selecionado'}</span></h5>

        <div className="mb-5">
          <h6 className="fw-bold">Escolher Produtos Existentes:</h6>
          {produtosDisponiveis.map((produto) => (
            <div key={produto.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <span>{produto.nome}</span>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => handleAddProdutoExistente(produto)}
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <h6 className="fw-bold">Criar Novo Produto:</h6>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do novo produto"
              value={novoProduto}
              onChange={(e) => setNovoProduto(e.target.value)}
            />
            <button className="btn btn-danger" onClick={handleCriarNovoProduto}>
              Criar e Adicionar
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold">Produtos adicionados ao fornecedor:</h6>
          <ul className="list-group">
            {produtosAdicionados.map((p) => (
              <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                {p.nome}
                <span className="badge bg-success">Adicionado</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="btn btn-danger fw-bold" onClick={handleSalvar}>
          Confirmar e Salvar
        </button>
      </div>
      <Footer />
    </>
  );
}
