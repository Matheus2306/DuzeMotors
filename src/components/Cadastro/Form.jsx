import React from 'react'

const Form = (props) => {

  return (
      <form className="w-25 d-flex flex-column gap-3 p-3 bg-light rounded-3 shadow">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="fw-semibold fs-4 py-2">Entrar</span>
      </div>
      <div className="d-flex flex-column justify-content-center gap-3 align-items-center h-50">
        <div className="w-75">
          <label htmlFor="Email" className="mb-2 mx-2">
            Email
          </label>
          <input
            type="email"
            id="Email"
            className="form-control border-bottom border-2"
            onChange={(e) => props.setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="w-75">
          <label htmlFor="Senha" className="mb-2 mx-2">
            Senha
          </label>
          <input
            type="password"
            id="Senha"
            onChange={(e) => props.setSenha(e.target.value)}
            className="form-control border-bottom border-2"
            placeholder="Senha"
          />
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center gap-2 my-3">
        <span
          className="p-2 btnhover text-light rounded-2"
          role="button"
          onClick={props.handleSubmit}
        >
          Entrar
        </span>
        </div>
    <div className="d-flex justify-content-center align-items-center gap-2 my-3">
        <i className="bi bi-bicycle fs-3 text-danger"></i>
        <span className="fw-semibold fs-5">DuZéMotors</span>
      </div>
    </form>
  )
}

export default Form
