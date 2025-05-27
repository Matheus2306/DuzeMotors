import React from 'react'
import HeaderLogs from '../components/HeaderLogs'
import Footer from '../components/Footer'
import FormCadastro from '../components/Cadastro/FormCadastro'

const Cadastro = () => {
  return (
    <div className='w-100 vh-100'>
      <HeaderLogs/>
      <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
        <FormCadastro/>
      </div>
      <Footer/>
    </div>
  )
}

export default Cadastro