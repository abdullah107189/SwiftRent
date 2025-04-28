/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaClipboardList } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Header from '../../components/common/Header';

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['all-bookings'],
    queryFn: async () => {
      const res = await axiosSecure.get('/customers-booking');
      return res.data;
    },
  });
  // console.log(bookings);
  // const handleAssignDriver = async (bookingId, driverId) => {
  //   try {
  //     const res = await axiosSecure.patch(`/bookings/assign/${bookingId}`, {
  //       driverId,
  //     });
  //     toast.success('Driver assigned!');
  //     refetch();
  //   } catch (err) {
  //     toast.error('Failed to assign driver');
  //   }
  // };

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
                <th className="py-3 px-4 text-left">Status</th>
                {/* <th className="py-3 px-4 text-left">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="border-b dark:border-white/20 border-black/20 hover:bg-[#f5b754]/10"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{booking.fullName}</td>
                  <td className="py-3 px-4">{booking.carName}</td>
                  <td className="py-4 px-6 text-center text-sm ">
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">
                        {booking.pickUpDate}
                      </span>
                      <span className="">to</span>
                      <span className="font-semibold">
                        {booking.returnDate}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">${booking.price}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
      ${booking.paymentStatus === 'Success' ? ' bg-green-700' : ''}
      ${booking.paymentStatus === 'Pending' ? ' bg-orange-500' : ''}
    `}
                    >
                      {booking.paymentStatus}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    {/* <button
                      onClick={() =>
                        handleAssignDriver(booking._id, 'driver123')
                      }
                      className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                    >
                      Assign Driver
                    </button> */}
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
