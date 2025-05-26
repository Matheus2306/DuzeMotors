import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    const [countdown, setCountdown] = useState(10)
    const [showMotorcycle, setShowMotorcycle] = useState(false)
  
    useEffect(() => {
      // Iniciar animação da moto após um pequeno delay
      const motorcycleTimer = setTimeout(() => {
        setShowMotorcycle(true)
      }, 500)
  
      // Configurar o contador regressivo
      const timer =
        countdown > 0 &&
        setInterval(() => {
          setCountdown((prev) => prev - 1)
        }, 1000)
  
      // Redirecionar quando o contador chegar a zero
      if (countdown === 0) {
        window.location.href = "/"
      }
  
      return () => {
        clearInterval(timer)
        clearTimeout(motorcycleTimer)
      }
    }, [countdown])
  return ( <div className="not-found-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="error-card animate__animated animate__fadeIn">
            <div className="error-code animate__animated animate__bounceIn">404</div>

            <h1 className="text-center mb-4 text-light animate__animated animate__fadeInDown">Página não encontrada</h1>

            <div className="road-container">
              <div className="road">
                <div className="road-line"></div>
              </div>

              {showMotorcycle && (
                <div className="motorcycle-container">
                  <div className="motorcycle">
                    <div className="front-wheel">
                      <div className="wheel"></div>
                    </div>
                    <div className="motorcycle-body">
                      <div className="handle"></div>
                      <div className="seat"></div>
                    </div>
                    <div className="back-wheel">
                      <div className="wheel"></div>
                    </div>
                    <div className="exhaust">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="smoke"></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mt-4 animate__animated animate__fadeIn animate__delay-1s">
              <p className="lead">Ops! Parece que você se perdeu na estrada.</p>
              <p>A página que você está procurando não existe ou foi movida.</p>
            </div>

            <div className="action-buttons mt-5 animate__animated animate__fadeInUp animate__delay-1s">
              <Link to="/" className="btn btn-danger btn-lg me-3 shadow-hover">
                <i className="bi bi-house-door me-2"></i>Voltar para Home
              </Link>
              <Link to="/catalogo" className="btn btn-outline-light btn-lg shadow-hover">
                <i className="bi bi-grid-3x3-gap me-2"></i>Ver Catálogo
              </Link>
            </div>

            <div className="text-center mt-4 animate__animated animate__pulse animate__infinite">
              <div className="countdown-container">
                <p className="countdown-text">
                  Redirecionando em <span className="countdown-number">{countdown}</span>
                </p>
                <div className="progress mt-2">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    role="progressbar"
                    style={{ width: `${(countdown / 10) * 100}%` }}
                    aria-valuenow={countdown}
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                </div>
              </div>
            </div>

            <div className="floating-gears">
              <i className="bi bi-gear-fill gear gear-1"></i>
              <i className="bi bi-gear-fill gear gear-2"></i>
              <i className="bi bi-gear-fill gear gear-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NotFound