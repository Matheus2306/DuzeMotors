import React, { useRef } from 'react';
import MotoCard from './MotoCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedMotos = () => {
  const scrollRef = useRef();

  const motos = [
    {
      image: 'https://images.unsplash.com/photo-1597006121567-740dbe3d7c3b?auto=format&fit=crop&w=800&q=80',
      title: 'Moto Thunder 250',
      description: 'Alta performance para quem exige emoção e potência.',
      price: 'R$ 18.990',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1610386111356-42158d3a07d3?auto=format&fit=crop&w=800&q=80',
      title: 'Street Racer 300',
      description: 'Design esportivo com tecnologia de ponta para as ruas.',
      price: 'R$ 22.450',
      link: '#'
    },
    {
      image: 'src/IMG/factor.avif',
      title: 'FACTOR 150 ED UBS0',
      description: 'Preparada para qualquer desafio com conforto e estilo.',
      price: 'R$ 15.652,00',
      link: '#'
    },
    {
      image: 'src/IMG/fz15.avif',
      title: 'FAZER FZ15 ABS CONNECTED',
      description: 'Estilo esportivo com toque moderno para o dia a dia.',
      price: 'R$ 20.390',
      link: '#'
    },
    {
        image: 'src/IMG/fz15.avif',
        title: 'FAZER FZ15 ABS CONNECTED',
        description: 'Estilo esportivo com toque moderno para o dia a dia.',
        price: 'R$ 20.390',
        link: '#'
      },
      {
        image: 'src/IMG/fz15.avif',
        title: 'FAZER FZ15 ABS CONNECTED',
        description: 'Estilo esportivo com toque moderno para o dia a dia.',
        price: 'R$ 20.390',
        link: '#'
      }
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -366, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 366, behavior: 'smooth' });
  };

  return (
    <section style={{ backgroundColor: '#fff', padding: '60px 20px', position: 'relative' }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Motos em destaque</h2>

        {/* Botões de seta laterais */}
        <button
          className="btn btn-outline-dark position-absolute top-50 start-0 translate-middle-y"
          style={{ zIndex: 10 }}
          onClick={scrollLeft}
        >
          ‹
        </button>
        <button
          className="btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y"
          style={{ zIndex: 10 }}
          onClick={scrollRight}
        >
          ›
        </button>

        {/* Scroll horizontal com máximo de 3 cards visíveis */}
        <div
          ref={scrollRef}
          style={{
            overflowX: 'auto',
            display: 'flex',
            gap: '16px',
            paddingBottom: '10px',
            scrollBehavior: 'smooth',
            padding: '0 40px', // espaço lateral pro botão
             userSelect: 'none'
          }}
        >
          {motos.map((moto, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 350px',
                maxWidth: '350px'
              }}
            >
              <MotoCard
                image={moto.image}
                title={moto.title}
                description={moto.description}
                price={moto.price}
                link={moto.link}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-danger btn-lg">Ver todos os modelos</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMotos;
