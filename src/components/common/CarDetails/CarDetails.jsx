// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CarDetails = () => {
  // const axiosSecure = useAxiosSecure();
  // const { id } = useParams();
  // const [car, setCar] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCarDetails = async () => {
  //     try {
  //       const response = await axiosSecure(`/cars/${id}`);
  //       const data = response.data;
  //       console.log('Fetched Car Data:', data);
  //       setCar(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching car details:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchCarDetails();
  // }, [id, axiosSecure]);

  // if (loading) {
  //   return <p className="text-center text-white">Loading...</p>;
  // }

  // if (!car) {
  //   return <p className="text-center text-red-500">Car not found!</p>;
  // }

  return (
    <div>
      <div className="mxw">
        <DetailsCard />
      </div>
    </div>
  );
};

export default CarDetails;
