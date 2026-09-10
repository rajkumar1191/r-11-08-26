import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const RoleProtectedRoute = ({ children, role }) => {
  // const isLoggedIn = localStorage.getItem("token1");

  const { user } = useContext(AuthContext);

  if(!user)
    return <Navigate to="/login" />

  if(user.role !== role)
    return <Navigate to="/unauthorized" />

  return children;
};

export default RoleProtectedRoute;
