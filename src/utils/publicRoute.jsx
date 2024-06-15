import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import NavBar from "../components/navbar";

function PublicRoutes() {
  const token = useAuth();
  return token ? (
    <Navigate to="/home" />
  ) : (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default PublicRoutes;
