import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Spinner";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import CustomerFeedback from "./CustomerFeedback";
import CustomerReviews from "./CustomerReviews";
import BookingModal from "../Modal/BookingModal";

const CarDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [car, setCar] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");
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
      } catch (err) {
        // console.error(err);
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
    <div className="mxw px-4 pt-18 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Images */}
      <div>
        <div className="border rounded-xl overflow-hidden shadow-lg group relative">
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
      <div className="space-y-6 p-6">
        <h2 className="text-3xl font-bold">{car.name}</h2>
        <div className="flex items-center gap-1 orange">
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
            <strong>Transmission:</strong> {car.transmission}
          </p>
          <p>
            <strong>Seats:</strong> {car.seats}
          </p>
          <p>
            <strong>Fuel:</strong> {car.fuel}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="orange" />
            <span>
              <strong>City:</strong> {car.location?.city}
            </span>
          </p>
          <p>
            <strong>Pickup Point:</strong> {car.location?.pickupPoint}
          </p>
          <p>
            <strong>Drop-off:</strong> {car.location?.dropOffPoint}
          </p>
          <p>
            <strong>Availability:</strong> {car.availability}
          </p>
        </div>

        <div className="pt-4 border-t flex justify-between items-center">
          <p className="text-2xl font-bold text-green-600">
            ${car.price}{" "}
            <span className="text-sm font-normal text-gray-500">/day</span>
          </p>
          <button onClick={() => setIsModalOpen(true)} className="fillBtn">
            Book Now
          </button>
        </div>

        <CustomerReviews onReviewSubmit={refetch} />

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
