/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaClipboardList } from "react-icons/fa";
import toast from "react-hot-toast";
import Header from "../../components/common/Header";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  const handleAssignDriver = async (bookingId, driverId) => {
    try {
      const res = await axiosSecure.patch(`/bookings/assign/${bookingId}`, {
        driverId,
      });
      toast.success("Driver assigned!");
      refetch();
    } catch (err) {
      toast.error("Failed to assign driver");
    }
  };

  return (
    <>
      <div className="">
        <Header title="Manage Bookings" />
        <h2 className="text-2xl font-semibold px-4 mb-6 ">All Bookings</h2>
        <div className="overflow-x-auto px-4">
          <table className="min-w-full  rounded-xl overflow-hidden">
            <thead className="sBgBlack">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Car</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Driver</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="border-b dark:border-white/20 border-black/20 hover:bg-[#f5b754]/10"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{booking.customerName}</td>
                  <td className="py-3 px-4">{booking.carName}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">${booking.price}</td>
                  <td className="py-3 px-4">
                    {booking.assignedDriver
                      ? booking.assignedDriver.name
                      : "Not Assigned"}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() =>
                        handleAssignDriver(booking._id, "driver123")
                      }
                      className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                    >
                      Assign Driver
                    </button>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 ">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageBookings;
