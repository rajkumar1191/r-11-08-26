import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token1");

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
