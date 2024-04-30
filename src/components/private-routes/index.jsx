import { Navigate, Outlet } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export const PrivateRoutes = () => {
  const { isAuth } = useGetUserInfo();

  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
