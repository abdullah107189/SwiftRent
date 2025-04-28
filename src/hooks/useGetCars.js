import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import qs from "qs";

const useGetCars = (
  searchInput = {},
  filter = {},
  sortOption = {},
  size,
  page = 1
) => {
  const axiosPublic = useAxiosPublic();

  const queryParams = qs.stringify({
    search: searchInput,
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
    queryKey: ["cars", searchInput, filter, sortOption, size, page],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/cars?${queryParams}`);
      return data;
    },
  });

  return { cars, refetch, isLoading, isFetching };
};

export default useGetCars;
