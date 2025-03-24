import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detaisImg from "/src/assets/details/details.png";
import PageHeader from "../../shared/PageHeader";
import DetailsCard from "./DetailsCard";

export default function CarDetails() {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);


  console.log(id)
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cars/${id}`); 
        const data = await response.json();
        setCar(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car details:", error);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (!car) {
    return <p className="text-center text-red-500">Car not found!</p>;
  }

  return (
    <div>
      <PageHeader
        subTitle="Available Cars"
        titleWhite="Car"
        titleOrange="Details"
        image={detaisImg}
      />
      <div className="mxw">
        <div>h{car.name  }</div>
        <DetailsCard car={car} />
      </div>
    </div>
  );
}
