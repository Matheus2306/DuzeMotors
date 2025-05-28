
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';





export default function PagamentoConcluido() {
    const navigate = useNavigate();
  return (
    
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-white py-5 px-3">
        <div className="text-center">
          <h1 className="text-success fw-bold">Pagamento Concluído!</h1>
          <p className="text-muted">"Agradecemos imensamente pela sua confiança e preferência. É uma honra ter você como cliente, e esperamos vê-lo novamente em breve!"</p>
          <i className="bi bi-check-circle-fill text-success display-1 my-4"></i>


        </div>
        <br />
<button className='btn btn-lg btn-outline-danger' onClick={() => navigate('/')}>Voltar</button>
      </div>
      <Footer />
    </>
  );
}
