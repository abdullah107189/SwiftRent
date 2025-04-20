import { FaCar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Search } from "lucide-react";
import Spinner from "../../../components/Spinner";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageCars = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: cars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manage-cars");
      return res.data;
    },
  });

  const [filteredCar, setFilteredCars] = useState([]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter(
        (car) =>
          car.name.toLowerCase().includes(term) ||
          (car.model && car.model.toLowerCase().includes(term))
      );
      setFilteredCars(filtered);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/cars/${id}`);
      toast.success("Car deleted successfully!");
      refetch();
    } catch (err) {
      toast.error(err.message);
    }
  };

  // car status changes

  const handleCarStatusChanges = async (currentStatus, status) => {
    console.log(status);
    const newStatus =
      currentStatus === "Available" ? "Unavailable" : "Available";
    console.log(newStatus);
    try {
      const response = await axiosSecure.patch(
        `/car-status/${status}/availability`,
        {
          availability: newStatus,
        }
      );

      if (response.data.modifiedCount > 0) {
        toast.success(`Status changed to ${newStatus}`);
        refetch();
      }
    } catch (error) {
      toast.error("Failed to update status");
      console.error(error);
    }
  };

  if (isLoading) return <Spinner />;

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
            <thead className="sBgBlack ">
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
              {filteredCar.length > 0 ? (
                filteredCar.map((car, index) => (
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
                          car.availability === "Available"
                            ? "bg-green-600/20 text-green-600 "
                            : "bg-red-600/20 text-red-600 "
                        }`}
                      >
                        {car.availability}
                      </span>
                    </td>
                    <td className="flex py-3  space-x-4 ">
                      <Link
                        to={`/dashboard/update-car/${car._id}`}
                        className=" text-green-600  py-1  hover:text-yellow-500"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        className="   hover:text-red-600"
                        onClick={() => handleDelete(car._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-6 tBlack">
                    {cars.length === 0
                      ? "No cars available."
                      : "No matching cars found."}
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
