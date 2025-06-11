import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const MotoCard = ({ image, title, description, price, specs }) => {
  const modalId = `modal-${title.replace(/\s+/g, '-')}`;
console.log(specs)
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
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'contain', // Ajustado para exibir a imagem inteira
            objectPosition: 'center',
          }}
        />
        <div
          className="card-body text-center d-flex flex-column justify-content-between"
          style={{ flex: '1 1 auto' }}
        >
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
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
    <div className="modal-content p-3">
      <div className="modal-header border-0">
        <h5 className="modal-title fw-bold text-uppercase" id={`${modalId}-label`}>
          {title}
        </h5>
        
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body text-center">
        <img
          src={image}
          alt={title}
          className="img-fluid mb-3"
          style={{
            maxHeight: '200px',
            objectFit: 'contain',
          }}
        />
        <p className="text-muted">{description}</p>

        
      </div>
      <div className=" border-0 justify-content-end ">
        
        <p className="fw-bold fs-5">
          Preço:
          <br />
          <h1>
         <span className="text-secondary "> {price.toLocaleString('pt-BR')}</span>
          </h1>
        </p>

        <button type="button" className="  btn btn-outline-danger ">
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
