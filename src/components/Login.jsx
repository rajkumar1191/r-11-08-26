import { useContext } from "react";

import AuthContext from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const obj = {
      token: "abcd1234",
      role: "admin",
      username: "Raj",
    };

    login(obj);
    navigate("/");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
