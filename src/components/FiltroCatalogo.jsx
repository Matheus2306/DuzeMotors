import React from 'react';

const FiltroCatalogo = ({
  busca,
  setBusca,
  precoMaximo,
  setPrecoMaximo,
  marcaSelecionada,
  setMarcaSelecionada,
  marcasDisponiveis,
}) => {
  return (
    <div className="card p-4 mb-5 shadow-sm">
      <div className="row g-3 align-items-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Buscar motos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={marcaSelecionada}
            onChange={(e) => setMarcaSelecionada(e.target.value)}
          >
            {marcasDisponiveis.map((marca, index) => (
              <option key={index} value={marca}>
                {marca === 'Todas' ? 'Todas as marcas' : marca}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="form-label mt-3">Faixa de Preço</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="150000"
            step="100"
            value={precoMaximo}
            onChange={(e) => setPrecoMaximo(Number(e.target.value))}
          />
          <small className="text-muted">R$ 0 - R$ {precoMaximo.toLocaleString('pt-BR')}</small>
        </div>
      </div>
    </div>
  );
};

export default FiltroCatalogo;
