import { Outlet } from 'react-router-dom';

import useUserRole from '../hooks/useUserRole';
import Spinner from './Spinner';

const ProtectedRoute = () => {
  const [userRole, isLoading] = useUserRole();

  // role
  if (isLoading) {
    return <Spinner />;
  }

  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  // Render child routes
  return <Outlet />;
};

export default ProtectedRoute;
