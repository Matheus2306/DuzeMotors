import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DetalhesMoto = () => {
  const { state } = useLocation();
  const [CardItem] = useState(state?.Motos || {});

  const handleAddToCart = () => {
    // Get existing cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex((item) => item.id === CardItem.id);

    let updatedQuantity = 1; // Default quantity for new items

    if (existingItemIndex !== -1) {
   
      //almentar a quantidade do item existente
      updatedQuantity = cartItems[existingItemIndex].quantity + 1;
      cartItems[existingItemIndex].quantity = updatedQuantity; // Update quantity
      console.log(updatedQuantity)
    } else {
      // If the item doesn't exist, add it with a quantity of 1
      cartItems.push({ ...CardItem, quantity: 1 });
    }
    // Save updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        {CardItem.title && (
          <h2 className="fw-bold mb-4 text-center">{CardItem.title}</h2>
        )}
        <div className="row">
          <div className="col-md-6">
            <img
              src={CardItem.image}
              alt={CardItem.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p className="text-muted">{CardItem.description}</p>
            <p>
              <strong>Preço:</strong> R$ {CardItem.price.toLocaleString('pt-BR')}
            </p>
            <div className="mt-4">
              <button
                className="btn btn-danger me-2"
                onClick={handleAddToCart}
              >
                Add ao carrinho
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => window.history.back()}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="fw-bold">Características</h3>
          <div className="d-flex flex-wrap gap-2">
            {CardItem.features &&
              CardItem.features.map((feature, index) => (
                <span
                  key={index}
                  className="badge bg-primary text-light p-2"
                  style={{ fontSize: '1rem' }}
                >
                  {feature}
                </span>
              ))}
          </div>
          </div>


        {/*  Descrição Longa */}
        <div className="mt-5">
          <h3 className="fw-bold">Descrição</h3>
          <p>{CardItem.longDescription}</p>
        </div>

        {/* Adicionando Especificações */}
        <div className="mt-5">
          <h3 className="fw-bold">Especificações</h3>
          <ul className="list-group">
            {CardItem.specs &&
              Object.entries(CardItem.specs).map(([key, value], index) => (
                <li key={index} className="list-group-item">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default DetalhesMoto;