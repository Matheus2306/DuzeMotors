import React from 'react'

const CardCarrinho = (props) => {
  return (
    <div className="w-75 p-3 rounded-2 shadow-sm mt-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://placehold.co/100"
                alt="Produto"
                className="rounded-2 me-2 img-fluid object-fit-fill"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="d-flex flex-column">
                <span className="fs-4 fw-semibold ">Produto 1</span>
                <span className="fs-5 text-danger fw-medium">R$100</span>
              </div>
            </div>
            <i className="bi bi-trash fs-4 text-danger mx-3"></i>
          </div>
        </div>
  )
}

export default CardCarrinho