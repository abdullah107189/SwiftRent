import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye } from 'lucide-react';

const carData = [
  {
    id: 'CAR001',
    model: 'Toyota Camry',
    brand: 'Toyota',
    year: '2022',
    pricePerDay: 50,
    status: 'Available',
    city: 'New York',
    total: 150, // Added total
  },
  {
    id: 'CAR002',
    model: 'Honda Civic',
    brand: 'Honda',
    year: '2021',
    pricePerDay: 45,
    status: 'Rented',
    city: 'Los Angeles',
    total: 135, // Added total
  },
  {
    id: 'CAR003',
    model: 'BMW X5',
    brand: 'BMW',
    year: '2023',
    pricePerDay: 120,
    status: 'Available',
    city: 'Chicago',
    total: 360, // Added total
  },
  {
    id: 'CAR004',
    model: 'Audi A4',
    brand: 'Audi',
    year: '2020',
    pricePerDay: 70,
    status: 'Rented',
    city: 'San Francisco',
    total: 210, // Added total
  },
  {
    id: 'CAR005',
    model: 'Ford Mustang',
    brand: 'Ford',
    year: '2022',
    pricePerDay: 150,
    status: 'Available',
    city: 'Miami',
    total: 450, // Added total
  },
  {
    id: 'CAR006',
    model: 'Mercedes-Benz C-Class',
    brand: 'Mercedes-Benz',
    year: '2021',
    pricePerDay: 90,
    status: 'Available',
    city: 'Dallas',
    total: 270, // Added total
  },
  {
    id: 'CAR007',
    model: 'Chevrolet Camaro',
    brand: 'Chevrolet',
    year: '2022',
    pricePerDay: 110,
    status: 'Rented',
    city: 'Los Angeles',
    total: 330, // Added total
  },
  {
    id: 'CAR008',
    model: 'Tesla Model S',
    brand: 'Tesla',
    year: '2023',
    pricePerDay: 200,
    status: 'Available',
    city: 'New York',
    total: 600, // Added total
  },
];

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(carData);

  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = carData.filter(
      order =>
        order.id.toLowerCase().includes(term) ||
        order.model.toLowerCase().includes(term) ||
        order.brand.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide divide-gray-700">
            {filteredOrders.map(order => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.brand}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.total ? `$${order.total.toFixed(2)}` : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Rented'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {order.city}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersTable;
