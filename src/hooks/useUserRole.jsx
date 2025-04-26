import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useSelector } from "react-redux";

const useUserRole = () => {
  const { user } = useSelector((state) => state.auth);
  const axiosPublic = useAxiosPublic();

  const { data: userRole, isLoading } = useQuery({
    queryKey: [user?.email, "userRole"],

    queryFn: async () => {
      const res = await axiosPublic.get(`/users/role/${user?.email}`);
      return res?.data?.role;
    },
    enabled: !!user?.email,
  });
  // console.log(userRole);
  return [userRole, isLoading];
};

export default useUserRole;
