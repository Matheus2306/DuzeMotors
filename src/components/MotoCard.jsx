import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MotoCard = ({
  imagem,
  nome,
  marca,
  modelo,
  ano,
  valor,
  quilometragem,
  tipoDeCombustivel,
  transmissao,
  estoque,
  veiculoId
}) => {
  const modalId = `modal-${veiculoId}`;
  return (
    <>
      {/* Card */}
      <div
        className="card h-80 shadow-sm"
        style={{
          maxWidth: '350px',
          height: '530px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={`http:${imagem}`}
          className="card-img-top overflow-y-hidden"
          alt={nome}
          style={{
            width: '350px',
            height: '350px',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
        <div
          className="card-body text-center d-flex flex-column justify-content-between"
          style={{ flex: '1 1 auto' }}
        >
          <div>
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">{marca} {modelo} - {ano}</p>
            <p className="card-text fw-bold text-danger">R$ {Number(valor).toLocaleString('pt-BR')}</p>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">Quilometragem: {quilometragem}</li>
              <li className="list-group-item">Combustível: {tipoDeCombustivel}</li>
              <li className="list-group-item">Transmissão: {transmissao}</li>
              <li className="list-group-item">Estoque: {estoque}</li>
            </ul>
          </div>
          <div>
            <button
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modalId}-label`}>
                {nome}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={imagem}
                alt={nome}
                className="img-fluid rounded mb-3"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
              <ul className="list-group">
                <li className="list-group-item"><strong>Marca:</strong> {marca}</li>
                <li className="list-group-item"><strong>Modelo:</strong> {modelo}</li>
                <li className="list-group-item"><strong>Ano:</strong> {ano}</li>
                <li className="list-group-item"><strong>Valor:</strong> R$ {Number(valor).toLocaleString('pt-BR')}</li>
                <li className="list-group-item"><strong>Quilometragem:</strong> {quilometragem}</li>
                <li className="list-group-item"><strong>Combustível:</strong> {tipoDeCombustivel}</li>
                <li className="list-group-item"><strong>Transmissão:</strong> {transmissao}</li>
                <li className="list-group-item"><strong>Estoque:</strong> {estoque}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" className="btn btn-danger">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotoCard;