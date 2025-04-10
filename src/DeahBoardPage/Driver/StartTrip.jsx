import { FaCar, FaClock, FaMapMarkedAlt, FaRoute } from 'react-icons/fa';
import Header from '../../components/common/Header';

const StartTrip = () => {
  const trip = {
    carName: 'Toyota Corolla',
    carImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROywEwo4S2_bitDGhl3NArx4qrbpUjtiYPMw&s',
    pickupLocation: 'Dhaka City Center',
    startTime: '2025-04-10 10:00 AM',
    route: 'Dhaka → Chattogram',
  };

  const handleStartTrip = () => {
    alert('Trip Started! 🚗');
  };

  return (
    <div className="max-w-4xl mx-auto  pb-10">
      <Header title="Trip Started! 🚗" />
      <h2 className="text-3xl font-bold text-center text-[#f5b754] mb-8 flex items-center justify-center gap-2 pt-4">
        <FaRoute /> Start Your Trip
      </h2>

      <div className="bg-[#1B1B1B] rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Car Image */}
        <div>
          <img
            src={trip.carImage}
            alt={trip.carName}
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

        {/* Trip Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold ">{trip.carName}</h3>
          <p className="flex items-center gap-2 ">
            <FaClock className="text-[#f5b754]" /> Start Time: {trip.startTime}
          </p>
          <p className="flex items-center gap-2 ">
            <FaMapMarkedAlt className="text-[#f5b754]" /> Pickup:{' '}
            {trip.pickupLocation}
          </p>
          <p className="flex items-center gap-2 ">
            <FaRoute className="text-[#f5b754]" /> Route: {trip.route}
          </p>

          <button
            onClick={handleStartTrip}
            className="mt-6 w-full bg-[#f5b754] hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Confirm & Start Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartTrip;
