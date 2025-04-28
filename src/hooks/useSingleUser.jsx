import { useSelector } from "react-redux";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useSingleUser = () => {
  const { user } = useSelector((state) => state.auth);
  const axiosPublic = useAxiosPublic();
  const {
    data: userInfo = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/singleUser/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });
  return { userInfo, isLoading, isFetching, refetch };
};

export default useSingleUser;
