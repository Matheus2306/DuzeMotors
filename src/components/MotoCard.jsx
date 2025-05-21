import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MotoCard = ({ image, title, description, price, link }) => {
  return (
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
            <a href={link} className=" text-decoration-none btn-outline-danger btn">Ver detalhes</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MotoCard;