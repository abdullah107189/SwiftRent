import React, { useEffect, useState, useRef } from "react";
import serviceBackgroundPhoto from "../../assets/heroSection/3.jpg";
import "./service.css";
import PageHeader from "../../components/shared/PageHeader";
import BookAuto from "./BookAuto";
import OtherServices from "./OtherServices";
import CarPromoVideo from "./CarPromoVideo";
import NumberCard from "../../components/shared/card/NumberCard";
import { DollarSign, X } from "lucide-react";
import { IoFilter } from "react-icons/io5";

const Services = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filterBrand, setFilterBrand] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [carType, setCarType] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("default");

  const filterRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetFilters = () => {
    setSearch("");
    setFilterBrand([]);
    setPriceRange([0, 100000]);
    setCarType([]);
    setFuelType([]);
  };

  const filteredCars = cars
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .filter((car) =>
      filterBrand.length ? filterBrand.includes(car.brand) : true
    )
    .filter((car) => (carType.length ? carType.includes(car.type) : true))
    .filter((car) => (fuelType.length ? fuelType.includes(car.fuel) : true))
    .filter((car) => car.price >= priceRange[0] && car.price <= priceRange[1]);

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    if (sortOption === "nameAsc") return a.name.localeCompare(b.name);
    if (sortOption === "nameDesc") return b.name.localeCompare(a.name);
    return 0;
  });

  const toggleFilterOption = (filter, setFilter) => {
    setFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="relative bg-[#1B1B1B]">
      {/* Page Header */}
      <PageHeader
        subTitle="Available Cars"
        titleWhite="Our"
        titleOrange="Cars"
        image={serviceBackgroundPhoto}
      />

      {/* Filter Button */}
      <div className="mxw flex justify-between items-center p-4 rounded-lg mt-16  mb-1 ">
        <h2 className="text-white text-xl font-bold">
          {filteredCars.length} Results for Cars
        </h2>

        <div className="flex items-center gap-4 text-[12px] p-4">
          {/* Sorting Dropdown */}
          <select
            className="sBgBlack text-white p-2 rounded cursor-pointer "
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
            <option value="nameDesc">Name: Z to A</option>
          </select>
          {/* Filter */}
          <button
            onClick={() => setShowFilter(true)}
            className="md:hidden flex items-center gap-2 sBgBlack text-white px-3 py-2 rounded cursor-pointer"
          >
            <IoFilter size={20} />
            Filter
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mxw grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 ">
        <div
          ref={filterRef} // Added ref to the filter section
          className={`fixed mt-15 md:mt-0 text-[12px] md:static top-0 left-0 w-72 h-full md:w-auto md:h-auto bg-[#141313] p-6 rounded-lg transition-transform ${
            showFilter ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-40`}
        >
          {/* Close Button (Only for small screens) */}
          <button
            onClick={() => setShowFilter(false)}
            className="absolute top-4 right-4 text-white md:hidden cursor-pointer"
          >
            <X size={24} />
          </button>

          <h3 className="text-white text-md mb-4">Filter</h3>
          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-gray-900 text-white cursor-pointer"
          />

          {/* Brand Filter with Checkboxes */}
          <div className="mb-4 text-white ">
            <h4 className="mb-2">Select Brand</h4>
            {["Toyota", "Honda", "BMW"].map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 mb-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filterBrand.includes(brand)}
                  onChange={() => toggleFilterOption(brand, setFilterBrand)}
                  className="accent-[#F5B754] cursor-pointer"
                />
                {brand}
              </label>
            ))}
          </div>

          {/* Car Type Filter with Checkboxes */}
          <div className="mb-4 text-white ">
            <h4 className="mb-2">Select Car Type</h4>
            {["SUV", "Sedan", "Truck"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 mb-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={carType.includes(type)}
                  onChange={() => toggleFilterOption(type, setCarType)}
                  className="accent-[#F5B754] cursor-pointer"
                />
                {type}
              </label>
            ))}
          </div>

          {/* Fuel Type Filter with Checkboxes */}
          <div className="mb-4 text-white">
            <h4 className="mb-2">Select Fuel Type</h4>
            {["Petrol", "Diesel", "Electric"].map((fuel) => (
              <label
                key={fuel}
                className="flex items-center gap-2 mb-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={fuelType.includes(fuel)}
                  onChange={() => toggleFilterOption(fuel, setFuelType)}
                  className="accent-[#F5B754] cursor-pointer"
                />
                {fuel}
              </label>
            ))}
          </div>

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
              className="w-full accent-[#F5B754] cursor-pointer"
            />
          </div>

          <button
            onClick={resetFilters}
            className="w-full mt-4 p-2 bg-[#F5B754] text-white rounded cursor-pointer"
          >
            Reset Filter
          </button>
        </div>

        {/* Car Cards */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
          {sortedCars.length > 0 ? (
            sortedCars.map((car, index) => (
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
