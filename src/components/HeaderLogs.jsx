import React from "react";
import { useNavigate } from "react-router";

const HeaderLogs = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-danger justify-content-center bg-black p-3">
      <div className="d-flex align-items-center gap-2" onClick={navigateToHome} role="button">
        <i className="bi bi-bicycle fs-3"></i>
        <span className="text-light fw-bolder fs-5">DuZéMotors</span>
      </div>
    </nav>
  );
};

export default HeaderLogs;
