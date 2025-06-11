import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FiltroCatalogo from '../components/Catalogo/FiltroCatalogo';
import MotoCardCatalogo from '../components/Catalogo/MotoCardCatalogo';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Catalogo = () => {
  const [motos, setMotos] = useState([]);
  const [precoMaximo, setPrecoMaximo] = useState(25000);
  const [marcaSelecionada, setMarcaSelecionada] = useState('Todas');
  const [busca, setBusca] = useState('');

  const motosFiltradas = motos.filter((moto) => {
    const dentroDoPreco = Number(moto.valor) <= precoMaximo;
    const marcaBate = marcaSelecionada === 'Todas' || moto.marca === marcaSelecionada;
    const nomeBate = moto.nome.toLowerCase().includes(busca.toLowerCase());
    return dentroDoPreco && marcaBate && nomeBate;
  });
  
  const marcasDisponiveis = ['Todas', ...new Set(motos.map((m) => m.marca))];
  
  useEffect(() => {
    fetch('http://duze.somee.com/api/Veiculos')
      .then(response => response.json())
      .then(data => setMotos(data))
      .catch(error => console.error('Erro ao buscar motos:', error));
  }, []);


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
