import React, { useRef } from 'react';
import MotoCard from './MotoCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedMotos = () => {
  const scrollRef = useRef();

  const motos = [
    {
      image: 'src/IMG/download (2).png',
      title: 'NEOS Connected',
      description: 'Alta performance para quem exige emoção e potência.',
      price: 'R$ 33.990,00',
      link: '#'
    },
    {
      image: 'src/IMG/download (1).png',
      title: 'FLUO ABS HYBRID CONNECTED',
      description: 'Design esportivo com tecnologia de ponta para as ruas.',
      price: 'R$ 16.690,00',
      link: '#'
    },
    {
      image: 'src/IMG/factor.avif',
      title: 'FACTOR 150 ED UBS0',
      description: 'Preparada para qualquer desafio com conforto e estilo.',
      price: 'R$ 18.790,00',
      link: '#'
    },
    {
      image: 'src/IMG/motinha.avif',
      title: 'MT-03 CONNECTED',
      description: 'Estilo esportivo com toque moderno para o dia a dia.',
      price: 'R$ 33.990,00',
      link: '#'
    },
    {
        image: 'src/IMG/fz15.png',
        title: 'FAZER FZ15 ABS CONNECTED',
        description: 'Estilo esportivo com toque moderno para o dia a dia.',
        price: 'R$ 20.990',
        link: '#'
      },
      {
        image: 'src/IMG/fz25.png',
        title: 'FAZER FZ25 CONNECTED',
        description: 'Estilo esportivo com toque moderno para o dia a dia.',
        price: 'R$ 24.990',
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
