import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Header from "../../../components/common/Header";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";

const MyBookings = () => {
  const { user } = useSelector((state) => state.auth);
  const axiosSecure = useAxiosSecure();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [payLoadingId, setPayLoadingId] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axiosSecure
      .get(`/bookings/${user.email}`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [user, axiosSecure]);

  const removeBooking = (id) => {
    setBookings(bookings.filter((booking) => booking._id !== id));
  };

  const handlePayment = async (bookingId) => {
    console.log("Initiating payment for booking ID:", bookingId);
    setPayLoadingId(bookingId);
    try {
      const { data } = await axiosSecure.post(`/create-payment/${bookingId}`);
      if (data.GatewayPageURL) {
        window.location.href = data.GatewayPageURL;
      } else {
        alert("Payment init failed. Please try again.");
        console.error("No GatewayPageURL:", data);
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Could not initiate payment.");
    } finally {
      setPayLoadingId(null);
    }
  };

  if (loading) return <div>Loading your bookings…</div>;

  return (
    <>
      <Header title="My Bookings" />
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
          <FaShoppingCart className="text-white" /> My Bookings
        </h1>
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full shadow-lg rounded-lg">
              <thead>
                <tr className="text-white">
                  <th className="p-3 text-left">Car Name</th>
                  <th className="p-3 text-left">Booking Date</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-center">Payment</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b text-white orange bg-[#f5b754]/10 hover:bg-[#f5b754]/10"
                  >
                    <td className="p-3">{`${booking.carBrand} ${booking.carName}`}</td>
                    <td className="p-3">
                      {moment(booking.pickUpDate).format("YYYY-MM-DD")}
                    </td>
                    <td className="p-3">${booking.price}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handlePayment(booking._id)}
                        disabled={
                          booking.paymentStatus === "Success" ||
                          payLoadingId === booking._id
                        }
                        className={`px-4 py-1 rounded ${
                          booking.paymentStatus === "Success"
                            ? "bg-green-500 text-white cursor-not-allowed"
                            : "bg-[#f5b754] text-black hover:bg-[#e0a33d]"
                        } ${payLoadingId === booking._id ? "opacity-50" : ""}`}
                      >
                        {booking.paymentStatus === "Success"
                          ? "Paid"
                          : payLoadingId === booking._id
                          ? "Processing…"
                          : "Pay Now"}
                      </button>
                    </td>

                    <td className="p-3 text-center gap-4 flex justify-center items-center">
                      <button className="fillBtn px-2">Cancel</button>
                      <button
                        onClick={() => removeBooking(booking._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">No bookings found.</p>
        )}
      </div>
    </>
  );
};

export default MyBookings;
