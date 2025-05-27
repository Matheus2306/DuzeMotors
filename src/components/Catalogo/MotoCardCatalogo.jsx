import React from 'react';

const MotoCardCatalogo = ({ moto }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <div
          className="bg-light d-flex align-items-center justify-content-center"
          style={{ height: '200px' }}
        >
          <span className="text-muted">Imagem</span>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-1">
            <h5 className="fw-bold">{moto.title}</h5>
            <small>{moto.year}</small>
          </div>
          <span className="badge text-dark-emphasis mb-2">{moto.brand}</span>
          <p className="text-danger fw-bold">R$ {moto.price.toLocaleString('pt-BR')}</p>
          <p>{moto.description}</p>
          <div className="mb-3">
            {moto.features.map((feature, i) => (
              <span key={i} className="badge bg-light text-dark me-1 mb-1 border">{feature}</span>
            ))}
            {moto.features.length > 2 && (
              <span className="badge bg-light text-dark border">+1</span>
            )}
          </div>
          <div className="mt-auto d-flex justify-content-between">
            <button className="btn btn-outline-danger btn-sm">Ver Detalhes</button>
            <button className="btn btn-danger btn-sm">
              <i className="bi bi-cart"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoCardCatalogo;
