import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Catalogo from './pages/Catalogo';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Chekout from './Pages/Chekout.jsx'
import Cadastro from './Pages/Cadastro.jsx'
import Login from './Pages/Login.jsx'
import NotFound from './Pages/NotFound.jsx'
import Sobre from './Pages/Sobre.jsx'
import Perfil from './components/Login/Perfil.jsx'
import DetalhesMoto from './Pages/DetalhesMoto.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Checkout" element={<Chekout />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/moto/:id" element={<DetalhesMoto />} />
      
      <Route path="*" element={<NotFound />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)