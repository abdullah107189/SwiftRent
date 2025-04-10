import { FaCar, FaClock, FaRoute, FaClipboardList } from 'react-icons/fa';
import Header from '../../components/common/Header';

const TripHistory = () => {
  const tripHistory = [
    {
      id: 1,
      car: 'Toyota Corolla',
      date: '2025-03-10 09:00 AM',
      route: 'Dhaka → Chattogram',
      status: 'Completed',
    },
    {
      id: 2,
      car: 'Honda Civic',
      date: '2025-02-25 04:30 PM',
      route: 'Sylhet → Dhaka',
      status: 'Cancelled',
    },
    {
      id: 3,
      car: 'Nissan Sunny',
      date: '2025-01-12 01:15 PM',
      route: 'Khulna → Barisal',
      status: 'Completed',
    },
  ];

  return (
    <>
      <Header title="Trip History" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-[#f5b754] mb-8 flex items-center justify-center gap-2">
          <FaClipboardList /> Trip History
        </h2>

        <div className=" shadow-lg rounded-xl overflow-hidden">
          <table className="w-full table-auto text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">Car</th>
                <th className="px-4 py-3">Date & Time</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {tripHistory.map(trip => (
                <tr key={trip.id} className="border-b ">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <FaCar className="text-[#f5b754]" />
                    {trip.car}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <FaClock className="text-[#f5b754]" />
                    {trip.date}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <FaRoute className="text-[#f5b754]" />
                    {trip.route}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                        trip.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TripHistory;
