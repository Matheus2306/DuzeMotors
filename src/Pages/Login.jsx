import React from "react";
import HeaderLogs from "../components/HeaderLogs";
import Formulario from "../components/Login/Formulario";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="w-100 vh-100">
      <HeaderLogs />
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Formulario />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
