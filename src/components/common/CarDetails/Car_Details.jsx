import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../Spinner";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomerReviews from "./CustomerReviews";
import CustomerFeedback from "./CustomerFeedback";
import BookingModal from "../Modal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const CarDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [car, setCar] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch Car
  useEffect(() => {
    const fetchCar = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/cars/${id}`);
        setCar(res.data);
        setSelectedImg(res.data?.image?.[0] || "");
        setLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id, axiosSecure]);

  // Fetch Reviews
  const {
    data: reviews = [],
    isLoading: reviewsLoading,
    refetch,
  } = useQuery({
    queryKey: ["carReviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get("/car/review");
      return res.data;
    },
    enabled: !!id,
  });

  if (loading || reviewsLoading) return <Spinner />;

  if (!car)
    return (
      <p className="text-center text-red-600 font-semibold">Car not found</p>
    );

  return (
    <div className="mxw px-4 py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Images */}
      <div>
        <div className="border rounded-xl overflow-hidden shadow-lg bg-white group relative">
          <img
            src={selectedImg}
            alt="car"
            className="w-full h-[400px] object-cover cursor-zoom-in transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {car.image?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setSelectedImg(img)}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                selectedImg === img ? "border-[#f5b754]" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="hidden md:block mt-8">
          <h3 className="font-semibold text-xl mb-4 border-b pb-2">
            Customer Feedback
          </h3>
          <CustomerFeedback reviews={reviews} />
        </div>
      </div>

      {/* Right: Car Info */}
      <div className="space-y-6 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">{car.name}</h2>
        <div className="flex items-center gap-1 text-[#f5b754]">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
          <span className="text-sm ml-2">(120+ reviews)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <strong>Brand:</strong> {car.brand}
          </p>
          <p>
            <strong>Type:</strong> {car.type}
          </p>
          <p>
            <strong>Year:</strong> {car.year}
          </p>
          <p>
            <span className="font-semibold">Transmission:</span>{" "}
            {car.transmission}
          </p>
          <p>
            <strong>Seats:</strong> {car.seats}
          </p>
          <p>
            <strong>Fuel:</strong> {car.fuel}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#f5b754]" />
            <span>
              <strong>City:</strong> {car.location?.city}
            </span>
          </p>
          <p>
            <span className="font-semibold">Pickup Point:</span>{" "}
            {car.location?.pickupPoint}
          </p>
          <p>
            <span className="font-semibold">Drop-off:</span>{" "}
            {car.location?.dropOffPoint}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            {car.availability}
          </p>
        </div>

        <div className="pt-4 border-t flex justify-between items-center">
          <p className="text-2xl font-bold text-green-600">
            ${car.price}{" "}
            <span className="text-sm font-normal text-gray-500">/day</span>
          </p>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className="px-5 py-2 rounded-full bg-[#f5b754] hover:bg-[#e0a33d] text-white font-semibold shadow-md transition duration-300"
          >
            Book Now
          </button>
        </div>


        {/* Feedback Section */}
        <div>
          <CustomerReviews />
        </div>

        <div className="block md:hidden mt-8">
          <h3 className="font-semibold text-xl mb-4 border-b pb-2">
            Customer Feedback
          </h3>
          <CustomerFeedback reviews={reviews} />
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarDetails;
