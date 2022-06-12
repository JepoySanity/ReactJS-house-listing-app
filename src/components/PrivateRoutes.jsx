import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoutes = () => {
  const { loggedIn, chackingStatus } = useAuthStatus();
  if (chackingStatus) {
    return <h3>loading...</h3>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
