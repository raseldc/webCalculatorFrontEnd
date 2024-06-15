import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";
import NavBar from "../components/navbar";

function PrivateRoutes() {
  const token = useAuth();
  return token ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
