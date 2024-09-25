import React from "react";
import { AppForm } from "../../components/form";
import { loginFields } from "./loginFields";

const Login: React.FC = () => {
  return (
    <>
      <h2>Login Page</h2>
      <AppForm formFields={loginFields} />
    </>
  );
};

export default Login;
