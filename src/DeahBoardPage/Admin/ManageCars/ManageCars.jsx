import { FaCar, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Header from '../../../components/common/Header';
import toast from 'react-hot-toast';
import { Search } from 'lucide-react';
import Spinner from '../../../components/Spinner';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCars,
  deleteCar,
  changeCarStatus,
  setSearchTerm,
} from '../../../redux/Slice/carSlice';

const ManageCars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carIdToDelete, setCarIdToDelete] = useState(null);
  const openModal = id => {
    setCarIdToDelete(id);
    setIsOpen(true);
  };
  const closeModal = () => {
    setCarIdToDelete(null);
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const { cars, loading, searchTerm } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSearch = e => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleDelete = async () => {
    if (carIdToDelete) {
      const res = await dispatch(deleteCar(carIdToDelete));
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success('Car deleted successfully!');
        closeModal();
      } else {
        toast.error('Failed to delete car!');
      }
    }
  };

  const handleCarStatusChanges = async (currentStatus, id) => {
    const res = await dispatch(changeCarStatus({ currentStatus, id }));
    if (res.meta.requestStatus === 'fulfilled') {
      toast.success(`Status changed to ${res.payload.newStatus}`);
    } else {
      toast.error('Failed to update status');
    }
  };

  const filteredCars = cars.filter(
    car =>
      car.name.toLowerCase().includes(searchTerm) ||
      (car.model && car.model.toLowerCase().includes(searchTerm))
  );

  if (loading) return <Spinner />;

  return (
    <>
      <Header title="Manage Car" />
      <div className="mxw px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold tBlack flex items-center gap-2">
            <FaCar className="orange" /> Cars List
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cars..."
              className="bg-[#f5b754]/10 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search className="absolute left-3 top-2.5 tBlack" size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full shadow-lg rounded-xl overflow-hidden">
            <thead className="sBgBlack">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Brand</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">City</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.length > 0 ? (
                filteredCars.map((car, index) => (
                  <tr
                    key={car._id}
                    className="border-b dark:border-white/20 border-black/20 hover:bg-[#f5b754]/10"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium">{car.name}</td>
                    <td className="py-3 px-4">{car.brand}</td>
                    <td className="py-3 px-4">${car.price}</td>
                    <td className="py-3 px-4">{car.city}</td>
                    <td className="py-3 px-4">
                      <span
                        onClick={() =>
                          handleCarStatusChanges(car.availability, car._id)
                        }
                        className={`px-2 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                          car.availability === 'Available'
                            ? 'bg-green-600/20 text-green-600'
                            : 'bg-red-600/20 text-red-600'
                        }`}
                      >
                        {car.availability}
                      </span>
                    </td>
                    <td className="flex py-3 space-x-4">
                      <Link
                        to={`/dashboard/update-car/${car._id}`}
                        className="text-green-600 py-1 hover:text-yellow-500"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        className="hover:text-red-600"
                        onClick={() => openModal(car._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 tBlack">
                    {cars.length === 0
                      ? 'No cars available.'
                      : 'No matching cars found.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="join flex justify-end pt-6">
          <button className="join-item btn bg-[#f5b754]">1</button>
          <button className="join-item btn btn-active bg-[#f5b754]">2</button>
          <button className="join-item btn bg-[#f5b754]">3</button>
        </div>
      </div>

      {/* Modal for Delete Confirmation */}
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative p-4 text-center  rounded-lg shadow bg-[#302a20] orange  sm:p-5">
              <button
                onClick={closeModal}
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <svg
                className="text-[#f5b754]  w-11 h-11 mb-3.5 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <p className="mb-4 text-white">
                Are you sure you want to delete this car?
              </p>

              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={closeModal}
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="py-2 px-3 text-sm font-medium text-center text-black hover:bg-white bg-[#f5b754] rounded-lg hover:hover:bg-[#f5b754] focus:ring-4 focus:outline-none focus:ring-red-300  dark:hover:bg-red-600 dark:focus:ring-red-900 cursor-pointer"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageCars;
