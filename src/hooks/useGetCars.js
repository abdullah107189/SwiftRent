import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGetCars = (
  search = {},
  filterBrand = {},
  priceRange = {},
  carType = {},
  fuelType = {},
  sortOption = {}
) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: cars = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [
      "cars",
      search,
      filterBrand,
      priceRange,
      carType,
      fuelType,
      sortOption,
    ],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/cars");
      return data;
    },
  });

  return { cars, refetch, isLoading, isFetching };
};

export default useGetCars;
