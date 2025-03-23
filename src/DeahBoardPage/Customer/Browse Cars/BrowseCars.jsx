import { FaCar } from 'react-icons/fa';
import Header from '../../../components/common/Header';

const cars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    price: '$50/day',
    img: 'https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Honda Civic',
    price: '$55/day',
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'BMW X5',
    price: '$120/day',
    img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    price: '$100/day',
    img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const BrowseCars = () => {
  return (
    <>
      <Header title="Browse Cars" />
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
          <FaCar className="text-white" /> Browse Cars
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map(car => (
            <div
              key={car.id}
              className="orange bg-[#f5b754]/10 rounded-lg shadow-lg hover:shadow-2xl transition p-4 cursor-pointer"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {car.name}
                </h2>
                <p className="text-gray-600">{car.price}</p>
                <button className="mt-3 px-4 py-2 fillBtn">Rent Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseCars;
