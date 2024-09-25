import React from "react";
import { AppForm } from "../../components/form";
import { loginFields } from "./loginFields";
import "./styles.scss";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-page-container">
        <AppForm formFields={loginFields} />
      </div>
    </div>
  );
};

export default Login;
