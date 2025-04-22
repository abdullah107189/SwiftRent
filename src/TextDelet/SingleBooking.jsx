import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxiosSecure from "../hooks/useAxiosSecure";
import moment from "moment";

const SingleBooking = () => {
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

  const handlePayment = async (bookingId) => {
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
      // console.error("Payment error:", err);
      alert("Could not initiate payment.");
    } finally {
      setPayLoadingId(null);
    }
  };

  if (loading) return <div>Loading your bookings…</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b._id}
            className="p-4 border rounded bg-gray-800  flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Car:</strong> {b.carName} ({b.carBrand})
              </p>
              <p>
                <strong>Pickup:</strong>{" "}
                {moment(b.pickUpDate).format("YYYY-MM-DD")}
              </p>
              <p>
                <strong>Return:</strong>{" "}
                {moment(b.returnDate).format("YYYY-MM-DD")}
              </p>
              <p>
                <strong>Price:</strong> ${b.price}
              </p>
            </div>
            <button
              onClick={() => handlePayment(b._id)}
              disabled={payLoadingId === b._id}
              className="px-4 py-2 bg-[#f5b754] text-black rounded hover:bg-[#e0a33d] disabled:opacity-50"
            >
              {payLoadingId === b._id ? "Processing…" : "Pay Now"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SingleBooking;
