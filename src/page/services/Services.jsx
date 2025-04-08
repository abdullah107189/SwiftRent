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
import useGetCars from "../../hooks/useGetCars";

const Services = () => {
  const [search, setSearch] = useState("");
  const [filterBrand, setFilterBrand] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [carType, setCarType] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const filterRef = useRef(null);

  const { cars, isFetching } = useGetCars(
    { search },
    { filterBrand },
    { priceRange },
    { carType },
    { fuelType },
    { sortOption }
  );

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

      <div className="relative">
        {/* cars count and sort */}
        <div className=" mxw flex justify-between items-center rounded-lg mt-16 md:sticky fBgBlack md:top-12 md:z-10">
          <h2 className="text-white text-4xl my-5 font-bold">
            {cars.length} Results for Cars
          </h2>

          <div className="flex items-center gap-4 text-[12px] px-2">
            {/* Sorting Dropdown */}
            <select
              className="sBgBlack text-white p-2 rounded-3xl cursor-pointer "
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="priceAsc ">Price: Low to High</option>
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
        <div className=" mxw grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {/* filtering left side  */}
          <div
            ref={filterRef}
            className={`fixed mt-15 md:mt-0 text-[12px] md:sticky top-35 left-0 w-72 h-full md:w-auto md:h-[600px] sBgBlack p-6 rounded-3xl transition-transform ${
              showFilter ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 z-0`}
          >
            <div>
              {/* Close Button (Only for small screens) */}
              <button
                onClick={() => setShowFilter(false)}
                className="absolute top-4 right-4 text-white md:hidden cursor-pointer"
              >
                <X size={24} />
              </button>

              <input
                type="text"
                placeholder="Search cars..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-2 block bg-[#222222] text-gray-400 border border-tBgBlack rounded-full focus:outline-none focus:ring-0"
              />

              {/* Brand Filter with Checkboxes */}
              <div className="mb-4 text-white">
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
                  onChange={(e) =>
                    setPriceRange([
                      Math.min(Number(e.target.value), priceRange[1]),
                      priceRange[1],
                    ])
                  }
                  className="w-full accent-[#F5B754] cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Math.max(Number(e.target.value), priceRange[0]),
                    ])
                  }
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
          </div>

          {/* Car Cards */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
            {isFetching ? (
              <>
                {Array.from({ length: 6 }, (_, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[420px] rounded-3xl overflow-hidden group border border-gray-700 shadow-lg shadow-gray-900"
                  >
                    {/* Image Section */}
                    <div className="relative w-full h-[65%] rounded-t-3xl overflow-hidden transition-transform duration-300 hover:scale-100 animate-pulse">
                      <div className="bg-gray-700 w-full h-full"></div>
                    </div>

                    {/* Bottom Dark Gradient Overlay */}
                    <div className="absolute bottom-[35%] left-0 w-full h-[35%] bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

                    <div className="flex items-center absolute bottom-[35%] left-0 animate-pulse">
                      <div className="relative p-4 rounded-[0_40px_0_0] bg-[#1b1b1b]">
                        <div className="w-[60px] h-[60px] leading-[60px] border border-[#F5B754] bg-gray-700 rounded-full overflow-hidden text-transparent font-bold text-[14px] text-center">
                          {/* Placeholder for number */}
                        </div>
                        <div className="absolute -top-[19px] -left-[4px] rotate-[-90deg]">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-5"
                          >
                            <path
                              d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                              fill="#1b1b1b"
                            ></path>
                          </svg>
                        </div>
                        <div className="absolute -bottom-[2px] -right-[22px] rotate-[-90deg]">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                          >
                            <path
                              d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                              fill="#1b1b1b"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 pb-7 text-white relative bg-[#1b1b1b] rounded-b-3xl animate-pulse">
                      <div className="bg-gray-700 h-6 w-3/4 rounded mb-2"></div>
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <div className="bg-gray-700 h-4 w-1/3 rounded"></div>
                        <div className="bg-gray-700 h-4 w-1/3 rounded"></div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-3 flex gap-4 justify-center">
                        <div className="bg-gray-700 h-10 w-1/3 rounded"></div>
                        <div className="bg-gray-700 h-10 w-1/3 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {cars.length > 0 ? (
                  cars.map((car, index) => (
                    <NumberCard
                      key={car._id}
                      image={car.image[0] || "https://via.placeholder.com/300"}
                      name={car.name}
                      number={(index + 1).toString().padStart(2, "0")}
                      brand={car.brand}
                      price={car.price}
                      _id={car._id}
                      // --------------------------
                    />
                  ))
                ) : (
                  <p className="text-white text-center col-span-full text-2xl">
                    No car available
                  </p>
                )}
              </>
            )}
          </div>
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
