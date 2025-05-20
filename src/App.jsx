
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
     <Header/>

     <hr style={{ margin: 0, border: 'none', borderTop: '1px solid #444' }} />
       
     <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundColor: '#000',
          height: '100%',
          maxHeight: '700px',
          padding: '60px 20px'
        }}
      >
        <div>
          <h1 className="fw-bold display-4">
            Sua Nova <span className="text-danger">Moto</span> Está Aqui
          </h1>
          <p className="mt-3 fs-5">
            Descubra nossa coleção exclusiva de motos de alta performance e design inovador.<br />
            Qualidade, confiança e o melhor preço do mercado.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-danger btn-lg">
              Ver Catálogo →
            </button>
            <button className="btn btn-light btn-lg text-dark">
              Agendar Test Ride
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
