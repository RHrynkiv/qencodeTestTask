import { Outlet } from "react-router-dom";
import { useCheckAuth } from "../../hooks/useCheckAuth";

export const AuthGuard = () => {
  useCheckAuth();

  return <Outlet />;
};
