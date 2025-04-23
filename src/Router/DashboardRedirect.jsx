import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import useUserRole from '../hooks/useUserRole';

const DashboardRedirect = () => {
  const [userRole, isLoading] = useUserRole();

  if (isLoading) {
    return <Spinner />;
  }

  if (userRole === 'admin') {
    return <Navigate to="/dashboard/overview" />;
  } else if (userRole === 'customer') {
    return <Navigate to="/dashboard/user-dashboard" />;
  } else if (userRole === 'driver') {
    return <Navigate to="/dashboard/start-trip" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default DashboardRedirect;
