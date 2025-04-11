import { FaCar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Header from '../../../components/common/Header';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Search } from 'lucide-react';
import Spinner from '../../../components/Spinner';

const ManageCars = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: cars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      const res = await axiosSecure.get('/manage-cars');
      return res.data;
    },
  });

  const [filteredCar, setFilteredCars] = useState([]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter(
        car =>
          car.name.toLowerCase().includes(term) ||
          (car.model && car.model.toLowerCase().includes(term))
      );
      setFilteredCars(filtered);
    }
  };

  const handleDelete = async id => {
    try {
      await axiosSecure.delete(`/cars/${id}`);
      toast.success('Car deleted successfully!');
      refetch();
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header title="Manage Car" />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Cars List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cars..."
              className="bg-[#f5b754]/10 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-[#f5b754]/10 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Car Name</th>
                <th className="py-3 px-4 text-left">Model</th>
                <th className="py-3 px-4 text-left">Price/Day</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCar.length > 0 ? (
                filteredCar.map((car, index) => (
                  <tr key={car._id} className="border-b hover:bg-gray-800">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium">{car.name}</td>
                    <td className="py-3 px-4">{car.model || car.type}</td>
                    <td className="py-3 px-4">${car.price}</td>
                    <td className="py-3 px-4 space-x-2">
                      <button className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500">
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(car._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    {cars.length === 0
                      ? 'No cars available.'
                      : 'No matching cars found.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Optional Pagination UI */}
        <div className="join flex justify-end pt-6">
          <button className="join-item btn bg-[#f5b754]">1</button>
          <button className="join-item btn btn-active bg-[#f5b754]">2</button>
          <button className="join-item btn bg-[#f5b754]">3</button>
        </div>
      </div>
    </>
  );
};

export default ManageCars;
