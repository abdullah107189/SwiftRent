import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}`,
});

const useAxiosePublic = () => {
  return axiosPublic;
};
export default useAxiosePublic;
