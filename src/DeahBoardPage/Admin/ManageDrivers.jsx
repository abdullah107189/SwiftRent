import { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa';
import { Car, Search, User2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Spinner from '../../components/Spinner';
import toast from 'react-hot-toast';
import CountUp from 'react-countup';
import StatCard from '../../components/common/StatCard';

const ManageDrivers = () => {
  const stats = [
    {
      title: 'Average Rating',
      value: '4.6',
      details: 'Out of 5.0',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [allCars, setCars] = useState([]);
  const openModal = id => {
    setUserIdToDelete(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setUserIdToDelete(null);
    setIsOpen(false);
  };

  const role = 'driver';
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users', role],
    queryFn: async () => {
      const { data } = await axiosSecure(`/drivers/${role}`);
      return data;
    },
  });
  const fetchallCars = async () => {
    try {
      const response = await axiosSecure.get('/allCars');
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFilteredUsers(users);
    fetchallCars();
  }, [users]);

  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter(
      u =>
        u?.name.toLowerCase().includes(term) ||
        u?.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const handelDriverDelete = async () => {
    try {
      await axiosSecure.delete(`/user-delete/${userIdToDelete}`);
      closeModal();
      refetch();
      toast.success('Driver Deleted Successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete Driver');
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header title="Admin Dashboard" text="Welcome to SwiftRent " />
      <div className="pl-3 py-4">
        <h2 className="text-xl font-semibold">Manage Drivers</h2>
        <p>View and manage all driver accounts</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <StatCard
          name="Total Drivers"
          icon={User2}
          value={
            <CountUp
              end={users.length}
              duration={1.5}
              separator=","
              decimals={0}
            />
          }
          details={`Active: ${
            users.filter(u => u.isActive).length
          } | Inactive: ${users.filter(u => !u.isActive).length}`}
          color="#6366F1"
        />

        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
          >
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="text-sm mt-1">{stat.details}</p>
          </div>
        ))}
        <StatCard
          name="Total Vehicles"
          icon={Car}
          value={allCars.length}
          color="#6366F1"
          details="Across all active drivers"
        />
      </div>

      <motion.div
        className="shadow-lg rounded-xl m-4 p-4 border dark:border-white/20 border-black/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Driver Directory</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search drivers..."
              className="bg-[#f5b754]/10 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 " size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                {[
                  'Name',
                  'Email',
                  'Phone',
                  'Status',
                  'Vehicles',

                  'Actions',
                ].map(heading => (
                  <th
                    key={heading}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredUsers.map(u => (
                <motion.tr
                  key={u._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {/* <img
                        src={u?.userInfo?.photoURL}
                        alt="user"
                        className="w-10 h-10 rounded-full border border-yellow-800"
                      /> */}
                      <p className="ml-4 text-sm font-medium">
                        {u?.userInfo?.name}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{u?.userInfo?.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-sm font-semibold rounded-full bg-[#f5b754] text-white">
                      {'+8801703500000'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                        u.isActive
                          ? 'bg-green-800 text-green-100'
                          : 'bg-red-800 text-red-100'
                      }`}
                    >
                      {u.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <div className="rating rating-xs">
                      {Array.from({ length: 5 }, (_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name="rating-5"
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked={i + 1 === Math.floor(u.rating)}
                        />
                      ))}
                    </div>
                  </td> */}

                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => openModal(u._id)}
                      className="orange hover:text-red-300 cursor-pointer"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for Delete Confirmation */}
        {isOpen && (
          <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-[#222222]/60">
            <div className="relative p-4 w-full max-w-md">
              <div className="relative p-4 text-center rounded-lg shadow bg-[#302a20] sm:p-5">
                <button
                  onClick={closeModal}
                  className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 4.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <h3 className="text-lg font-medium leading-6 text-white">
                  Are you sure?
                </h3>
                <div className="mt-4">
                  <button
                    onClick={handelDriverDelete}
                    className="mr-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ManageDrivers;
