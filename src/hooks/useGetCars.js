import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import qs from "qs";

const useGetCars = (searchQuery = {}, filter = {}, sortOption = {}) => {
  const axiosPublic = useAxiosPublic();

  const queryParams = qs.stringify({
    search: searchQuery,
    brand: filter.brand,
    type: filter.type,
    fuel: filter.fuel,
    minPrice: filter?.priceRange?.min,
    maxPrice: filter?.priceRange?.max,
    ...sortOption,
  });

  const {
    data: cars = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["cars", searchQuery, filter, sortOption],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/cars?${queryParams}`);
      return data;
    },
  });

  return { cars, refetch, isLoading, isFetching };
};

export default useGetCars;
