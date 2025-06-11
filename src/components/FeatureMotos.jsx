import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import MotoCard from "./MotoCard";
import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedMotos = () => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetch("http://duze.somee.com/api/Veiculos")
      .then((response) => response.json()) .then((data) => {
        // Embaralha o array
        const shuffled = data.sort(() => 0.5 - Math.random());
        // Seleciona até 10 motos
        setMotos(shuffled.slice(0, 10));
      })
      .catch((error) => console.error("Erro ao buscar motos:", error));
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -366, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 366, behavior: "smooth" });
  };

console.log(motos)

  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "60px 20px",
        position: "relative",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Motos em destaque</h2>
        {/* Botões de seta laterais */}
        {motos.length === 0 ? (
          ""
        ) : (
            <button
              className="btn btn-outline-dark position-absolute top-50 start-0 translate-middle-y mx-5"
              style={{ zIndex: 10 }}
              onClick={scrollLeft}
            >
              ‹
            </button>
        )}
          {motos.length === 0 ? (
          ""
        ) : (
          <button
          className="btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y mx-5"
          style={{ zIndex: 10 }}
          onClick={scrollRight}
        >
          ›
        </button>
        )}

        {/* Scroll horizontal com máximo de 3 cards visíveis */}
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            display: "flex",
            gap: "16px",
            paddingBottom: "10px",
            scrollBehavior: "smooth",
            padding: "0 40px", // espaço lateral pro botão
            userSelect: "none",
          }}
        >
          {motos == null || motos.length === 0 ? (
            <div className="text-center w-100">
              <img src="src/IMG/VILz9X9DJX.gif" alt="" />
            </div>
          ) : (
            motos.map((moto, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 350px",
                  maxWidth: "350px",
                }}
              >
                <MotoCard
                  veiculoId={moto.veiculoId}
                  imagem={moto.imagem}
                  nome={moto.nome}
                  marca={moto.marca}
                  valor={moto.valor}
                  modelo={moto.modelo}
                  ano={moto.ano}
                  quilometragem={moto.quilometragem}
                  tipoDeCombustivel={moto.tipoDeCombustivel}
                  estoque={moto.estoque}
                  transmissao={moto.transmissao}
                />
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-4">
          {motos.length === 0 ? (
            ""
          ) : (
            <button
              className="btn btnhover text-light"
              onClick={() => navigate("/catalogo")}
            >
              Ver todos os modelos
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMotos;
