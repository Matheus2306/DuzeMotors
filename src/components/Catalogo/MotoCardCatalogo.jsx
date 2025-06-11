import React from 'react';
import { useNavigate } from 'react-router';

const MotoCardCatalogo = ({ moto }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/moto/${moto.veiculoId}`, { state: { Motos: moto } });
  };

  const handleAddToCart = () => {
    // Lógica para adicionar ao carrinho
  };

  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <div
          className="bg-light d-flex align-items-center justify-content-center"
          style={{ height: '200px' }}
        >
          {moto.imagem ? (
            <img
              src={moto.imagem}
              alt={moto.nome}
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          ) : (
            <span className="text-muted">Sem imagem</span>
          )}
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-1">
            <h5 className="fw-bold">{moto.nome}</h5>
            <small>{moto.ano}</small>
          </div>
          <span className="badge text-dark-emphasis mb-2">{moto.marca}</span>
          <p className="text-danger fw-bold">R$ {Number(moto.valor).toLocaleString('pt-BR')}</p>
          <ul className="list-group list-group-flush mb-2">
            <li className="list-group-item">Modelo: {moto.modelo}</li>
            <li className="list-group-item">Quilometragem: {moto.quilometragem}</li>
            <li className="list-group-item">Combustível: {moto.tipoDeCombustivel}</li>
            <li className="list-group-item">Transmissão: {moto.transmissao}</li>
            <li className="list-group-item">Estoque: {moto.estoque}</li>
          </ul>
          <div className="mt-auto d-flex justify-content-between">
            <button className="btn btn-outline-danger btn-sm" onClick={handleDetailsClick}>Ver Detalhes</button>
            <button className="btn btn-danger btn-sm" onClick={handleAddToCart}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoCardCatalogo;
