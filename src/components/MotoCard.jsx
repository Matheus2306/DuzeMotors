import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MotoCard = ({ image, title, description, price }) => {
  const modalId = `modal-${title.replace(/\s+/g, '-')}`;

  const complexDescription = `
    ${description}
    
    - Cilindrada: 649cc
    - Potência máxima: 68 cv a 8.000 rpm
    - Torque: 6,5 kgf.m a 6.500 rpm
    - Transmissão: 6 velocidades
    - Suspensão dianteira: Garfo telescópico invertido
    - Suspensão traseira: Monoamortecida com link
    - Freios: ABS nas duas rodas
    - Peso seco: 196 kg
    - Tanque de combustível: 17 litros
  `;

  return (
    <>
      <div
        className="card h-80 shadow-sm"
        style={{
          maxWidth: '350px',
          height: '530px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="card-body text-center d-flex flex-column justify-content-between" style={{ flex: '1 1 auto' }}>
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div>
            <p className="text-danger fw-bold d-inline">{price}</p>
            <span className="ms-2">
              <button
                className="btn btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
              >
                Ver detalhes
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Modal Profissional */}
      <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {/* Imagem */}
                <div className="col-md-6">
                  <img
                    src={image}
                    alt={title}
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover', maxHeight: '350px' }}
                  />
                </div>

                {/* Detalhes */}
                <div className="col-md-6 d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="text-danger fw-bold mb-3">{price}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{complexDescription}</p>
                  </div>
                  <div className="d-grid mt-3">
                    <button className="  btnhover p-2 rounded-1 text-light border-0">
                      🛒 Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-light">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotoCard;
