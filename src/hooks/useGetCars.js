import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGetCars = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: cars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/cars");
      return data;
    },
  });
  return { cars, refetch, isLoading };
};

export default useGetCars;
