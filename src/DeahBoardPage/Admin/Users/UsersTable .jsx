/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaRegTrashAlt } from 'react-icons/fa';
import Spinner from '../../../components/Spinner';
import Swal from 'sweetalert2';

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  const role = 'customer';

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users', role],
    queryFn: async () => {
      const { data } = await axiosSecure(`/customers/${role}`);
      return data;
    },
  });

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  //  Search
  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter(
      u =>
        u?.userInfo?.name?.toLowerCase().includes(term) ||
        u?.userInfo?.email?.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  const handelUserDelete = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'User will be deleted',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/user-delete/${id}`);
          refetch();
          Swal.fire({
            title: 'Deleted!',
            text: 'Customer has been deleted.',
            icon: 'success',
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong.',
            icon: 'error',
          });
        }
      }
    });
  };

  if (isLoading) return <Spinner />;

  return (
    <motion.div
      className="shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Customers Lists</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-[#f5b754]/10 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
              {['Name', 'Email', 'Phone', 'Status', 'Actions'].map(heading => (
                <th
                  key={heading}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map(u => (
              <motion.tr
                key={u._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={u?.userInfo?.photoURL}
                      alt="user"
                      className="w-10 h-10 rounded-full border border-yellow-800"
                    />
                    <div className="text-sm font-medium text-gray-100">
                      {u?.userInfo?.name}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    {u?.userInfo?.email}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-[#f5b754] text-white cursor-pointer">
                    +8801703500000
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      u.isActive
                        ? 'bg-green-800 text-green-100'
                        : 'bg-red-800 text-red-100'
                    }`}
                  >
                    {u.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    onClick={() => handelUserDelete(u._id)}
                    className="text-[#f5b754] hover:text-red-300 cursor-pointer"
                  >
                    <FaRegTrashAlt />
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

export default UsersTable;
