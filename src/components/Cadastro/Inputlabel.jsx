import React from "react";

const Inputlabel = (props) => {
  return (
    <div className="w-75">
      <label htmlFor={props.label} className="mb-2 mx-2">
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        id={props.label}
        className="form-control mb-3 border-bottom"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange} // <-- Mantém o evento intacto
      />
    </div>
  );
};

export default Inputlabel;
