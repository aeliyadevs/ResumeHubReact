import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  return Cookies.get("userId") ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
