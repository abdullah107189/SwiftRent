/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// import { FaRegTrashAlt } from "react-icons/fa";
import Spinner from "../../../components/Spinner";
import toast from "react-hot-toast";
import avater from "../../../assets/default-avatar.png";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  // const [userIdToDelete, setUserIdToDelete] = useState(null);

  // const openModal = (id) => {
  //   setUserIdToDelete(id);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setUserIdToDelete(null);
  //   setIsOpen(false);
  // };
  const role = "customer";
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", role],
    queryFn: async () => {
      const { data } = await axiosPublic(`/customers/${role}`);
      return data;
    },
  });

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  // Search Functionality
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  // const handleUserDelete = async () => {
  //   try {
  //     await axiosPublic.delete(`/user-delete/${userIdToDelete}`);
  //     closeModal();
  //     refetch();
  //     toast.success("Customer Deleted Successfully");
  //   } catch (error) {
  //     toast.error("Failed to delete customer");
  //   }
  // };

  // Block/Unblock Handler

  const handleBlockUnblock = async (email, isBlock) => {
    try {
      const url = isBlock ? `/unblock-user/${email}` : `/block-user/${email}`;
      await axiosPublic.patch(url);
      refetch();
      toast.success(`User ${isBlock ? "unblocked" : "blocked"} successfully`);
    } catch (error) {
      toast.error("Failed to update user status");
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <motion.div
      className="  shadow-lg rounded-xl p-6 border dark:border-white/20 border-black/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold ">Customers Management</h2>
          <p className="text-sm mt-2">View and manage all customer accounts</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-[#f5b754]/10 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 " size={18} />
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto">
        <table className="min-w-full divide-y ">
          <thead>
            <tr>
              {[
                "Customer",
                "Contact Info",
                "Joined Date",
                "Status",
                "Actions",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y ">
            {filteredUsers.map((u) => (
              <motion.tr
                key={u._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium ">
                        <img
                          src={u?.userInfo?.photoURL || avater}
                          alt="user"
                          className="w-10 h-10 rounded-full border"
                        />
                        {u?.userInfo?.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm ">
                    {u?.userInfo?.email}
                    <br />
                    <p className="pt-2 text-sm leading-5   cursor-pointer">
                      {"+8801703500000"}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 text-sm  cursor-pointer">
                    {u.creationDate}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      u.isActive
                        ? "bg-green-800 text-green-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {u.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {/* <button
                    onClick={() => openModal(u._id)}
                    className="orange hover:text-red-300 cursor-pointer"
                  >
                    <FaRegTrashAlt />
                  </button> */}

                  <button
                    onClick={() =>
                      handleBlockUnblock(u.userInfo.email, u.isBlock)
                    }
                    className={`p-2 ${
                      u.isBlock ? "bg-green-500" : "bg-red-500"
                    } text-white rounded`}
                  >
                    {u.isBlock ? "Unblock" : "Block"}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Delete Confirmation */}
        {/* {isOpen && (
          <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-[#222222]/60">
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
                  Are you sure you want to delete this Customer?
                </p>

                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={closeModal}
                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                  <button
                    onClick={handleUserDelete}
                    className="py-2 px-3 text-sm font-medium text-center text-black hover:bg-white bg-[#f5b754] rounded-lg hover:hover:bg-[#f5b754] focus:ring-4 focus:outline-none focus:ring-red-300  dark:hover:bg-red-600 dark:focus:ring-red-900 cursor-pointer"
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </motion.div>
  );
};

export default UsersTable;
