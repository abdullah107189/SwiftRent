import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Header from "../../../components/common/Header";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";

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
    // console.log("Initiating payment for booking ID:", bookingId);
    setPayLoadingId(bookingId);
    try {
      const { data } = await axiosSecure.post(`/create-payment/${bookingId}`);
      if (data.GatewayPageURL) {
        window.location.href = data.GatewayPageURL;
      } else {
        alert("Payment init failed. Please try again.");
        // console.error("No GatewayPageURL:", data);
      }
    } catch (err) {
      // console.error("Payment error:", err);
      alert("Could not initiate payment.");
    } finally {
      setPayLoadingId(null);
    }
  };

  // Add delete functionality
  const handleDelete = async (id, driverStatus) => {
    if (driverStatus === "Assigned") {
      Swal.fire({
        icon: "error",
        title: "Cannot be deleted.",
        text: "This booking cannot be deleted because a driver has already been assigned.",
      });
      return;
    }

    // Confirmation dialog
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "No, keep it.",
    });

    if (confirmation.isConfirmed) {
      try {
        await axiosSecure.delete(`/bookings/${id}`);
        removeBooking(id);
        Swal.fire({
          icon: "success",
          title: "Delete completed!",
          text: "Your booking has been successfully deleted.",
        });
      } catch (error) {
        console.error("Failed to delete booking:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete booking. Please try again.",
        });
      }
    }
  };

  if (loading) return <div>Loading your bookings…</div>;

  return (
    <>
      <Header title="My Bookings" />
      <div className="min-h-screen md:p-6 p-3">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FaShoppingCart className="" /> My Bookings
        </h1>
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full shadow-lg rounded-lg">
              <thead>
                <tr className="">
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
                    className="border-b dark:border-white/20 border-black/20 hover:bg-[#f5b754]/10"
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
                          booking.tripStatus !== "Started" ||
                          booking.paymentStatus === "Success" ||
                          payLoadingId === booking._id
                        }
                        className={`px-4 py-1 rounded ${
                          booking.paymentStatus === "Success"
                            ? "bg-green-500 cursor-not-allowed"
                            : booking.tripStatus !== "Started"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#f5b754] text-black hover:bg-[#e0a33d]"
                        } ${payLoadingId === booking._id ? "opacity-50" : ""}`}
                      >
                        {booking.paymentStatus === "Success"
                          ? "Paid"
                          : booking.driver === "Not Assigned"
                          ? "Driver Not Assigned"
                          : booking.tripStatus !== "Started"
                          ? "Waiting for Trip to Start"
                          : payLoadingId === booking._id
                          ? "Processing…"
                          : "Pay Now"}
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() =>
                          handleDelete(booking._id, booking.driver)
                        }
                        disabled={booking.driver === "Assigned"}
                        className={`text-red-500 hover:text-red-700 ${
                          booking.driver === "Assigned"
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
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
