import React, { useEffect, useState } from "react";
import serviceBackgroundPhoto from "../../assets/heroSection/3.jpg";
import "./service.css";
import PageHeader from "../../components/shared/PageHeader";
import BookAuto from "./BookAuto";
import OtherServices from "./OtherServices";
import CarPromoVideo from "./CarPromoVideo";
import NumberCard from "../../components/shared/card/NumberCard";
import { DollarSign } from "lucide-react";

const Services = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [carType, setCarType] = useState("");
  const [fuelType, setFuelType] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const resetFilters = () => {
    setSearch("");
    setFilterBrand("");
    setPriceRange([0, 100000]);
    setCarType("");
    setFuelType("");
  };

  const filteredCars = cars
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .filter((car) => (filterBrand ? car.brand === filterBrand : true))
    .filter((car) => (carType ? car.type === carType : true))
    .filter((car) => (fuelType ? car.fuel === fuelType : true));

  return (
    <div className="relative bg-[#1B1B1B]  ">
      {/* Page Header section */}
      <PageHeader
        subTitle={"Available Cars"}
        titleWhite={"Our"}
        titleOrange={"Cars"}
        image={serviceBackgroundPhoto}
      />

      {/* Main Content Section */}
      <div className=" mxw grid grid-cols-1 md:grid-cols-5 gap-6 my-16">
        {/* Filter Section */}
        <div className="md:col-span-1 bg-[#141313] p-6 rounded-lg w-full md:w-auto">
          <h3 className="text-white text-xl mb-4">Filter</h3>
          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
          />
          <select
            className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
            onChange={(e) => setFilterBrand(e.target.value)}
          >
            <option value="">Select Brand</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
          </select>
          <select
            className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
            onChange={(e) => setCarType(e.target.value)}
          >
            <option value="">Select Car Type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
          </select>
          <select
            className="w-full p-2 mb-4 rounded bg-gray-900 text-white"
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
          <div className="text-white">
            <label className="flex items-center gap-2">
              <DollarSign color="#F5B754" size={20} />
              Price Range: {priceRange[0]} - {priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
              className="w-full accent-[#F5B754]"
            />
            <input
              type="range"
              min="0"
              max="100000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
              className="w-full accent-[#F5B754]"
            />
          </div>

          <button
            onClick={resetFilters}
            className="w-full mt-4 p-2 bg-[#F5B754] text-white rounded"
          >
            Reset Filter
          </button>
        </div>

        {/* Cars Card Section */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <NumberCard
                key={car._id}
                image={car.image || "https://via.placeholder.com/300"}
                name={car.name}
                number={(index + 1).toString().padStart(2, "0")}
              />
            ))
          ) : (
            <p className="text-white text-center col-span-full text-2xl">
              No car available
            </p>
          )}
        </div>
      </div>

      {/* Additional Components */}
      <BookAuto />
      <OtherServices />
      <CarPromoVideo />
    </div>
  );
};

export default Services;
