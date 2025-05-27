import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FiltroCatalogo from '../components/Catalogo/FiltroCatalogo';
import MotoCardCatalogo from '../components/Catalogo/MotoCardCatalogo';

const motos = [
  // HONDA
  {
    title: 'CG 160 Titan',
    year: 2024,
    price: 15280,
    brand: 'Honda',
    description: 'Uma das motos mais vendidas do Brasil, econômica, ágil e com visual moderno.',
    features: ['Freios CBS', 'Painel Digital', 'Tanque 16,1L'],
  },
  {
    title: 'CB 300F Twister',
    year: 2024,
    price: 18980,
    brand: 'Honda',
    description: 'Esportiva urbana com ótimo desempenho e eficiência, ideal para o dia a dia.',
    features: ['ABS', 'Injeção Eletrônica', 'Painel Digital'],
  },
  {
    title: 'CB 1000R',
    year: 2024,
    price: 67470,
    brand: 'Honda',
    description: 'Uma naked potente e estilosa com motor 4 cilindros e visual Neo Sports Café.',
    features: ['ABS', 'Controle de Torque', 'Quickshifter'],
  },

  // BMW
  {
    title: 'S 1000 RR',
    year: 2024,
    price: 116500,
    brand: 'BMW',
    description: 'Superesportiva de alta performance com 210 cv e tecnologias de corrida.',
    features: ['ABS Pro', 'Controle de tração DTC', 'Modos de pilotagem'],
  },
  {
    title: 'G 310 GS',
    year: 2024,
    price: 36250,
    brand: 'BMW',
    description: 'Trail urbana ideal para aventuras leves, com conforto e estilo GS.',
    features: ['ABS', 'Injeção Eletrônica', 'Painel LCD'],
  },
  {
    title: 'BMW R 1300 GS',
    year: 2024,
    price: 99700,
    brand: 'BMW',
    description: 'A mais avançada GS da história: potente, leve, conectada e pronta pra qualquer estrada.',
    features: ['ABS Pro', 'Suspensão eletrônica', 'Assistente de partida'],
  },

  // YAMAHA
  {
    title: 'NOVA FAZER FZ25 CONNECTED',
    year: 2024,
    price: 20990,
    brand: 'Yamaha',
    description: 'Naked urbana com motor 250cc, conectividade Bluetooth e visual agressivo.',
    features: ['ABS', 'Painel Digital', 'Conectividade'],
  },
  {
    title: 'FAZER FZ15 ABS CONNECTED',
    year: 2024,
    price: 20390,
    brand: 'Yamaha',
    description: 'Ideal para o dia a dia, traz conectividade e sistema ABS em ambas as rodas.',
    features: ['ABS', 'Bluetooth', 'Farol LED'],
  },
  {
    title: "NEO'S CONNECTED",
    year: 2024,
    price: 12290,
    brand: 'Yamaha',
    description: 'Scooter automática com estilo moderno, econômico e tecnologia de conectividade.',
    features: ['Start-stop', 'Painel Digital', 'Conectividade'],
  },
  {
    title: 'MT-03 CONNECTED',
    year: 2024,
    price: 32290,
    brand: 'Yamaha',
    description: 'A naked premium da Yamaha com visual esportivo e painel 100% digital.',
    features: ['ABS', 'Iluminação full LED', 'Conectividade'],
  },
  {
    title: 'FACTOR 150 ED UBS0',
    year: 2024,
    price: 14390,
    brand: 'Yamaha',
    description: 'Moto urbana de baixo consumo, confortável e com sistema de freios UBS.',
    features: ['Freios UBS', 'Painel Digital', 'Econômica'],
  },
  {
    title: 'FLUO ABS HYBRID CONNECTED',
    year: 2024,
    price: 17190,
    brand: 'Yamaha',
    description: 'Scooter com tecnologia híbrida, freios ABS e conectividade via app Yamaha.',
    features: ['ABS', 'Sistema híbrido', 'Bluetooth'],
  }
];

const Catalogo = () => {
  const [precoMaximo, setPrecoMaximo] = useState(25000);
  const [marcaSelecionada, setMarcaSelecionada] = useState('Todas');
  const [busca, setBusca] = useState('');

  const motosFiltradas = motos.filter((moto) => {
    const dentroDoPreco = moto.price <= precoMaximo;
    const marcaBate = marcaSelecionada === 'Todas' || moto.brand === marcaSelecionada;
    const nomeBate = moto.title.toLowerCase().includes(busca.toLowerCase());
    return dentroDoPreco && marcaBate && nomeBate;
  });

  const marcasDisponiveis = ['Todas', ...new Set(motos.map((m) => m.brand))];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Catálogo de Motos</h2>

      <FiltroCatalogo
        busca={busca}
        setBusca={setBusca}
        precoMaximo={precoMaximo}
        setPrecoMaximo={setPrecoMaximo}
        marcaSelecionada={marcaSelecionada}
        setMarcaSelecionada={setMarcaSelecionada}
        marcasDisponiveis={marcasDisponiveis}
      />

      <div className="row g-4">
        {motosFiltradas.map((moto, index) => (
          <MotoCardCatalogo key={index} moto={moto} />
        ))}
        {motosFiltradas.length === 0 && (
          <div className="col-12 text-center text-danger">
            Nenhuma moto encontrada com os filtros atuais.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
