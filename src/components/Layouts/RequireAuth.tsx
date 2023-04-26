import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth_context";

const RequireAuth = ({ allowedRoles }: any) => {
  const { user } = useAuth();
  const location = useLocation();

  return allowedRoles?.includes(user.user_type) ? (
    <Outlet />
  ) : user.id ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
