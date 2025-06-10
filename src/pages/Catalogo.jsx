import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FiltroCatalogo from '../components/Catalogo/FiltroCatalogo';
import MotoCardCatalogo from '../components/Catalogo/MotoCardCatalogo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const motos = [
  {
    id: 1,
    title: 'CG 160 Titan',
    year: 2024,
    price: 15280,
    brand: 'Honda',
    description: 'Uma das motos mais vendidas do Brasil, econômica, ágil e com visual moderno.',
    features: ['Freios CBS', 'Painel Digital', 'Tanque 16,1L'],
    image: '../src/IMG/cgtitan.webp',
    longDescription: 'A Honda CG 160 Titan é sinônimo de confiança e economia para o uso urbano. Com motor de 162,7 cc, entrega um desempenho eficiente aliado a um visual moderno. Equipada com freios CBS, painel digital e um tanque de 16,1 litros, é perfeita para quem busca praticidade e baixo custo de manutenção.',
    specs: {
      'Marca': 'Honda',
      'Modelo': 'CG 160 Titan',
      'Ano': '2024',
      'Cilindrada': '162,7 cc',
      'Combustível': 'Gasolina / Etanol (Flex)',
      'Freios': 'CBS',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '40 km/l',
      'Tanque': '16,1 L'
    }
  },
  {
    id: 2,
    title: 'CB 300F Twister',
    year: 2024,
    price: 18980,
    brand: 'Honda',
    description: 'Esportiva urbana com ótimo desempenho e eficiência, ideal para o dia a dia.',
    features: ['ABS', 'Injeção Eletrônica', 'Painel Digital'],
    image: '../src/IMG/twister.webp',
    longDescription: 'A nova CB 300F Twister chegou com visual agressivo, motor mais potente e tecnologia de ponta. Ideal para uso diário ou pequenas viagens, oferece excelente dirigibilidade, sistema ABS de série e painel digital completo. Uma naked urbana com espírito esportivo.',
    specs: {
      'Marca': 'Honda',
      'Modelo': 'CB 300F Twister',
      'Ano': '2024',
      'Cilindrada': '293,5 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '35 km/l',
      'Tanque': '14,1 L'
    }
  },
  {
    id: 3,
    title: 'CB 1000R',
    year: 2024,
    price: 67470,
    brand: 'Honda',
    description: 'Uma naked potente e estilosa com motor 4 cilindros e visual Neo Sports Café.',
    features: ['ABS', 'Controle de Torque', 'Quickshifter'],
    image: '../src/IMG/CB-1000R.png',
    longDescription: 'Uma verdadeira streetfighter com DNA esportivo e estilo Neo Sports Café. A CB 1000R combina motor 4 cilindros de alto desempenho com um design premium e elegante. Equipada com controle de torque, quickshifter e tecnologia de ponta, entrega emoção e sofisticação a cada acelerada.',
    specs: {
      'Marca': 'Honda',
      'Modelo': 'CB 1000R',
      'Ano': '2024',
      'Cilindrada': '998 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '20 km/l',
      'Tanque': '16,2 L'
    }
  },
  {
    id: 4,
    title: 'S 1000 RR',
    year: 2024,
    price: 116500,
    brand: 'BMW',
    description: 'Superesportiva de alta performance com 210 cv e tecnologias de corrida.',
    features: ['ABS Pro', 'Controle de tração DTC', 'Modos de pilotagem'],
    image: '../src/IMG/s-1000-rr - Editado.png',
    longDescription: 'A superbike definitiva. A BMW S 1000 RR é construída para dominar as pistas e impressionar nas ruas. Com motor de 210 cv, controle de tração dinâmico (DTC), modos de pilotagem e ABS Pro, ela oferece desempenho de corrida com segurança e tecnologia embarcada de fábrica.',
    specs: {
      'Marca': 'BMW',
      'Modelo': 'S 1000 RR',
      'Ano': '2024',
      'Cilindrada': '999 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS Pro',
      'Painel': 'TFT Colorido',
      'Partida': 'Elétrica',
      'Consumo médio': '15 km/l',
      'Tanque': '16,5 L'
    }
  },
  {
    id: 5,
    title: 'G 310 GS',
    year: 2024,
    price: 36250,
    brand: 'BMW',
    description: 'Trail urbana ideal para aventuras leves, com conforto e estilo GS.',
    features: ['ABS', 'Injeção Eletrônica', 'Painel LCD'],
    image: '../src/IMG/editado.png',
    longDescription: 'Ágil, versátil e aventureira, a BMW G 310 GS é ideal para quem busca conforto no asfalto e confiança fora dele. Com visual robusto e ergonomia pensada para longos trajetos, entrega a qualidade GS em uma versão compacta e acessível. Perfeita para iniciantes e exploradores urbanos.',
    specs: {
      'Marca': 'BMW',
      'Modelo': 'G 310 GS',
      'Ano': '2024',
      'Cilindrada': '313 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS',
      'Painel': 'Digital/LCD',
      'Partida': 'Elétrica',
      'Consumo médio': '28 km/l',
      'Tanque': '11 L'
    }
  },
  {
    id: 6,
    title: 'BMW R 1300 GS',
    year: 2024,
    price: 99700,
    brand: 'BMW',
    description: 'A mais avançada GS da história: potente, leve, conectada e pronta pra qualquer estrada.',
    features: ['ABS Pro', 'Suspensão eletrônica', 'Assistente de partida'],
    image: '../src/IMG/r1300.png',
    longDescription: 'A evolução da lendária GS. A nova R 1300 GS redefine a categoria big trail com mais potência, menor peso e tecnologias exclusivas. Suspensão eletrônica, modos de condução avançados, assistente de partida e design renovado para dominar qualquer terreno com total controle.',
    specs: {
      'Marca': 'BMW',
      'Modelo': 'R 1300 GS',
      'Ano': '2024',
      'Cilindrada': '1300 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS Pro',
      'Painel': 'TFT Colorido',
      'Partida': 'Elétrica',
      'Consumo médio': '20 km/l',
      'Tanque': '19 L'
    }
  },
  {
    id: 7,
    title: 'NOVA FAZER FZ25 CONNECTED',
    year: 2024,
    price: 20990,
    brand: 'Yamaha',
    description: 'Naked urbana com motor 250cc, conectividade Bluetooth e visual agressivo.',
    features: ['ABS', 'Painel Digital', 'Conectividade'],
    image: '../src/IMG/fz25.png',
    longDescription: 'A Fazer FZ25 Connected traz esportividade, robustez e conectividade em uma só moto. Com motor 250cc confiável, visual arrojado, iluminação LED e painel digital com Bluetooth, é a escolha ideal para quem quer presença nas ruas com baixo custo de manutenção.',
    specs: {
      'Marca': 'Yamaha',
      'Modelo': 'Fazer FZ25 Connected',
      'Ano': '2024',
      'Cilindrada': '249,5 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '32 km/l',
      'Tanque': '14 L'
    }
  },
  {
    id: 8,
    title: 'FAZER FZ15 ABS CONNECTED',
    year: 2024,
    price: 20390,
    brand: 'Yamaha',
    description: 'Ideal para o dia a dia, traz conectividade e sistema ABS em ambas as rodas.',
    features: ['ABS', 'Bluetooth', 'Farol LED'],
    image: '../src/IMG/fz15.png',
    longDescription: 'Compacta, econômica e conectada. A FZ15 ABS Connected é a opção perfeita para o dia a dia. Com sistema ABS nas duas rodas, farol full LED, motor eficiente e conectividade via app Yamaha, entrega conforto, segurança e estilo por um ótimo custo-benefício.',
    specs: {
      'Marca': 'Yamaha',
      'Modelo': 'Fazer FZ15 ABS Connected',
      'Ano': '2024',
      'Cilindrada': '149 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS nas duas rodas',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '45 km/l',
      'Tanque': '11,9 L'
    }
  },
  {
    id: 9,
    title: "NEO'S CONNECTED",
    year: 2024,
    price: 12290,
    brand: 'Yamaha',
    description: 'Scooter automática com estilo moderno, econômico e tecnologia de conectividade.',
    features: ['Start-stop', 'Painel Digital', 'Conectividade'],
    image: '../src/IMG/download (2).png',
    longDescription: 'Moderno, ágil e econômico. O NEO’S é um scooter automático perfeito para quem quer mobilidade com estilo. Com start-stop, conectividade via app e excelente consumo de combustível, é ideal para o trânsito urbano e deslocamentos rápidos.',
    specs: {
      'Marca': 'Yamaha',
      'Modelo': "Neo's Connected",
      'Ano': '2024',
      'Cilindrada': '125 cc',
      'Combustível': 'Gasolina',
      'Freios': 'UBS (unificados)',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '48 km/l',
      'Tanque': '4,2 L'
    }
  },
  {
    id: 10,
    title: 'MT-03 CONNECTED',
    year: 2024,
    price: 32290,
    brand: 'Yamaha',
    description: 'A naked premium da Yamaha com visual esportivo e painel 100% digital.',
    features: ['ABS', 'Iluminação full LED', 'Conectividade'],
    image: '../src/IMG/motinha.avif',
    longDescription: 'A MT-03 Connected é puro DNA Master of Torque. Visual agressivo, iluminação full LED, painel digital com conectividade e ciclística precisa fazem dela uma naked premium para quem busca adrenalina e estilo em duas rodas. Destaque nas ruas com tecnologia embarcada.',
    specs: {
      'Marca': 'Yamaha',
      'Modelo': 'MT-03 Connected',
      'Ano': '2024',
      'Cilindrada': '321 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS',
      'Painel': '100% Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '27 km/l',
      'Tanque': '14 L'
    }
  },
  {
    id: 11,
    title: 'FACTOR 150 ED UBS0',
    year: 2024,
    price: 14390,
    brand: 'Yamaha',
    description: 'Moto urbana de baixo consumo, confortável e com sistema de freios UBS.',
    features: ['Freios UBS', 'Painel Digital', 'Econômica'],
    image: '../src/IMG/factor.avif',
    longDescription: 'Economia e resistência são os pontos fortes da Factor 150. Equipada com freios UBS, painel digital e motor flex, oferece ótimo desempenho com baixo consumo. Ideal para o uso diário, entregas e mobilidade urbana com confiança.',
    specs: {
      'Marca': 'Yamaha',
      'Modelo': 'Factor 150 ED UBS',
      'Ano': '2024',
      'Cilindrada': '149 cc',
      'Combustível': 'Gasolina / Etanol (Flex)',
      'Freios': 'UBS',
      'Painel': 'Digital',
      'Partida': 'Elétrica',
      'Consumo médio': '45 km/l',
      'Tanque': '15,7 L'
    }
  },
  {
    id: 12,
    title: 'FLUO ABS HYBRID CONNECTED',
    year: 2024,
    price: 17190,
    brand: 'Yamaha',
    description: 'Scooter com tecnologia híbrida, freios ABS e conectividade via app Yamaha.',
    features: ['ABS', 'Sistema híbrido', 'Bluetooth'],
    image: '../src/IMG/fluo.png',
    longDescription: 'O Yamaha Fluo é o primeiro scooter híbrido da categoria, unindo economia e desempenho. Com sistema stop-start, freios ABS e conectividade Bluetooth, ele entrega inovação e conforto para o uso urbano. Um scooter que combina tecnologia e praticidade como nenhum outro.',
    specs: {
      'Marca': 'Yamaha',
      'Modelo': 'Fluo ABS Hybrid Connected',
      'Ano': '2024',
      'Cilindrada': '125 cc',
      'Combustível': 'Gasolina',
      'Freios': 'ABS',
      'Painel': 'Digital com conectividade',
      'Partida': 'Elétrica',
      'Consumo médio': '50 km/l',
      'Tanque': '4,1 L'
    }
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
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Catalogo;
