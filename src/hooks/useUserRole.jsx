import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useSelector } from 'react-redux';

const useUserRole = () => {
  const { user } = useSelector(state => state.auth);
  const axiosSecure = useAxiosSecure();

  const { data: userRole, isLoading } = useQuery({
    queryKey: [user?.email, 'userRole'],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);

      return res?.data?.role;
    },
    enabled: !!user?.email,
  });

  return [userRole, isLoading];
};

export default useUserRole;
