import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import LoadingSpinner from '../components/LoadingSpinner'; // Create this component

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useSelector(state => state.auth);
  const axiosSecure = useAxiosSecure();
  const location = useLocation();

  // Fproper error handling
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['userRole', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
    staleTime: 1000 * 60 * 5,
  });

  // Loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Error fetching role
  if (isError) {
    return <Navigate to="/error" state={{ from: location }} replace />;
  }

  //  required role
  const userRole = userData?.userInfo?.role;
  const hasAccess = allowedRoles.includes(userRole);

  if (!hasAccess) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  //  - render children
  return children;
};

export default ProtectedRoute;
