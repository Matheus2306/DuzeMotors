import React from 'react'

const Inputlabel = (props) => {
  return (
    <div className="w-75">
    <label htmlFor="Email" className="mb-2 mx-2">
      {props.label}
    </label>
    <input
      type="text"
      id={props.label}
      className="form-control mb-3"
      placeholder={props.placeholder}
      onChange={(e) => props.onchange(e.target.value)}
    />
  </div>
  )
}

export default Inputlabel