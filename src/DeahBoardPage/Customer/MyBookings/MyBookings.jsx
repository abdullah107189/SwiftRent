import { useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Header from '../../../components/common/Header';

const MyBookings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, car: 'Toyota Corolla', date: '2025-04-15', price: '$50/day' },
    { id: 2, car: 'Honda Civic', date: '2025-04-18', price: '$55/day' },
    { id: 3, car: 'Tesla Model 3', date: '2025-05-02', price: '$100/day' },
  ]);

  const removeBooking = id => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  return (
    <>
      <Header title="My Bookings" />
      <div className="min-h-screen  p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
          <FaShoppingCart className="text-white" /> My Bookings
        </h1>

        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full  shadow-lg rounded-lg">
              <thead>
                <tr className=" text-white">
                  <th className="p-3 text-left">Car Name</th>
                  <th className="p-3 text-left">Booking Date</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr
                    key={booking.id}
                    className="border-b text-white orange bg-[#f5b754]/10 hover:bg-[#f5b754]/10"
                  >
                    <td className="p-3">{booking.car}</td>
                    <td className="p-3">{booking.date}</td>
                    <td className="p-3">{booking.price}</td>
                    <td className="p-3 text-center gap-4 flex justify-center items-center">
                      <button className="fillBtn px-2 ">Cencel</button>
                      <button
                        onClick={() => removeBooking(booking.id)}
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
