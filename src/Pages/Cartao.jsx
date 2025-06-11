import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

export default function PaginaCartao() {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleNameInputChange = (e) => {
    // Aceita letras, espaços e acentos
    const value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s']/g, "");
    handleInputChange({ target: { name: "name", value } });
  };

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const navigate = useNavigate();

  const validarData = (data) => {
    // Aceita formatos MM/AA ou MM/AAAA
    const regex = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

    if (!regex.test(data)) {
      return false; // formato inválido
    }

    let [mes, ano] = data.split("/");
    mes = parseInt(mes);
    ano = parseInt(ano.length === 2 ? "20" + ano : ano);

    const agora = new Date();
    const anoAtual = agora.getFullYear();
    const mesAtual = agora.getMonth() + 1; // janeiro = 0

    // Verifica se já expirou
    if (ano < anoAtual || (ano === anoAtual && mes < mesAtual)) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { number, name, expiry, cvc } = state;

    if (!number || !name || !expiry || !cvc) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    //coleta o carrinho
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Verifica se o carrinho está vazio
    if (cartItems.length === 0) {
      alert(
        "Seu carrinho está vazio! Adicione itens antes de prosseguir com o pagamento."
      );
      return;
    } else {
      //reseta o carrinho do localstorage
      if (validarData(expiry)) {
        alert("Pagamento realizado com sucesso!");
        localStorage.removeItem("cart");
        navigate("/PagamentoConcluido");
      } else {
        alert(
          "Data de validade inválida! Por favor, verifique e tente novamente."
        );
      }
    }
  };
  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light py-5 px-3">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-danger">Pagamento com Cartão</h1>
          <p className="text-muted">
            Preencha os dados abaixo para concluir sua compra
          </p>
        </div>

        <div
          className="card shadow p-4 border-0"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <div className="mb-4">
            <Cards
              number={state.number}
              name={state.name}
              expiry={state.expiry}
              cvc={state.cvc}
              focused={state.focus}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-danger">Número do Cartão</label>
              <input
                type="tel"
                name="number"
                placeholder="Número do cartão"
                className="form-control"
                value={state.number}
                maxLength={16}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-danger">Nome no Cartão</label>
              <input
                type="text"
                name="name"
                placeholder="Nome no cartão"
                className="form-control"
                maxLength={30}
                minLength={3}
                value={state.name}
                onChange={handleNameInputChange}
                onFocus={handleInputFocus}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-danger">Validade</label>
                <input
                  id="Validade"
                  type="text"
                  name="expiry"
                  placeholder="MM/AA"
                  className="form-control"
                  value={state.expiry}
                  maxLength={5}
                  onChange={(e) => {
                    let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

                    if (valor.length >= 3) {
                      valor = valor.slice(0, 2) + "/" + valor.slice(2, 4);
                    }

                    setState({ ...state, expiry: valor });
                  }}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label text-danger">CVC</label>
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  className="form-control"
                  maxLength={3}
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-lg btn-outline-danger">
                Confirmar Pagamento
              </button>
            </div>
          </form>
        </div>

        {/* Additional Content */}
        <div className="mt-5 text-center">
          <h3 className="fw-bold text-danger">
            Por que escolher a DuzéMotors?
          </h3>
          <p className="text-muted">
            Oferecemos as melhores condições de pagamento, segurança e suporte
            ao cliente. Sua satisfação é nossa prioridade!
          </p>
          <ul className="list-unstyled">
            <li className="text-muted">
              <i className="bi bi-check-circle text-success me-2"></i> Pagamento
              100% seguro
            </li>
            <li className="text-muted">
              <i className="bi bi-check-circle text-success me-2"></i> Suporte
              24/7
            </li>
            <li className="text-muted">
              <i className="bi bi-check-circle text-success me-2"></i>{" "}
              Parcelamento em até 12x
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
