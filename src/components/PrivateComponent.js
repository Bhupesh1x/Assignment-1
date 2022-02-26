import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent() {
  const authUser = localStorage.getItem("blinks-user");
  return authUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateComponent;
