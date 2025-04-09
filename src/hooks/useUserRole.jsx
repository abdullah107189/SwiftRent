import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useSelector } from 'react-redux';

const useUserRole = () => {
  const { user } = useSelector(state => state.auth);
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const { data: userRole, isLoading } = useQuery({
    queryKey: [user?.email, 'userRole'],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      console.log('Fetched Role:', res.data?.role);
      return res?.data?.role;
    },
    enabled: !!user?.email,
  });

  return [userRole, isLoading];
};

export default useUserRole;
