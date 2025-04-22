/* eslint-disable no-unused-vars */
import { FaCar } from "react-icons/fa";
import Header from "../../../components/common/Header";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import BookingModal from "../../../components/common/Modal/BookingModal";

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const navigate = useNavigate();

  const handleBookNow = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  useEffect(() => {
    axiosPublic
      .get("/all-cars")
      .then((res) => {
        setCars(res.data);
        // const selected = res.data.find(item => item._id === id);
        // setExpert(selected);
      })
      .catch((err) => console.error("Error fetching expert:", err))
      .finally(() => setLoading(false));
  }, [axiosPublic]);

  if (loading) return <p className="text-center mt-10 ">Loading...</p>;

  // Fallback if expert is not found
  if (!cars) {
    return (
      <p className="text-center mt-10 text-orange-500 font-semibold">
        Expert not found.
      </p>
    );
  }
  return (
    <>
      <Header title="Browse Cars" />
      <div className="min-h-screen md:p-6 p-3">
        <h1 className="text-3xl font-bold text-center  mb-6 flex items-center justify-center gap-2">
          <FaCar className="" /> Browse Cars
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="sBgBlack rounded-lg shadow-lg hover:shadow-2xl transition p-4 cursor-pointer"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold ">{car.name}</h2>
                <p className="">{car.price}</p>
                <div className="md:flex md:justify-between">
                  <Link
                    to={`/car-details/${car._id}`}
                    className="mt-3 px-4 py-2 fillBtn"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleBookNow(car)}
                    className="mt-3 px-4 py-2 fillBtn"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Booking Modal */}
        {selectedCar && (
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            car={selectedCar}
          />
        )}
      </div>
    </>
  );
};

export default BrowseCars;
