import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxiosSecure from "../hooks/useAxiosSecure";
import moment from "moment";

const SingleBooking = () => {
  const { user } = useSelector((state) => state.auth);
  const axiosSecure = useAxiosSecure();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axiosSecure
      .get(`/bookings/${user.email}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      })
      .finally(() => setLoading(false));
  }, [user, axiosSecure]);

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
            className="p-4 border rounded bg-gray-800 text-white"
          >
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
            <p>
              <strong>Pickup Location:</strong> {b.pickUpLocation}
            </p>
            <p>
              <strong>Dropoff Location:</strong> {b.dropOffLocation}
            </p>
            {b.additionalNote && (
              <p>
                <strong>Note:</strong> {b.additionalNote}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default SingleBooking;
