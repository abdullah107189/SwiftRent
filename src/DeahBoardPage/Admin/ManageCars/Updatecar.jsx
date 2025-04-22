import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../../components/common/Header";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import imageUploade from "../../../components/CarImageUploade/ImageChanges";

const UpdateCar = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({
    name: "",
    brand: "",
    type: "",
    year: "",
    transmission: "",
    seats: "",
    fuel: "",
    location: {
      city: "",
      pickupPoint: "",
      dropOffPoint: "",
    },
    availability: "Available",
    features: [],
    price: "",
    image: ["", "", ""],
  });

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axiosSecure.get(`/cars/${id}`);
        setCarData(response.data);
      } catch (error) {
        // console.error("Error fetching car data:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch car data.",
          icon: "error",
        });
      }
    };
    fetchCarData();
  }, [id, axiosSecure]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("location")) {
      const locationField = name.split(".")[1];
      setCarData((prevState) => ({
        ...prevState,
        location: {
          ...prevState.location,
          [locationField]: value,
        },
      }));
    } else {
      setCarData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleImageChange = async (e, index) => {
    const imageCarUpload = e.target.files[0];
    if (!imageCarUpload) return;

    const uploadedUrl = await imageUploade(imageCarUpload);
    if (uploadedUrl) {
      setCarData((prevData) => {
        const updatedImages = [...prevData.image];
        updatedImages[index] = uploadedUrl;
        return { ...prevData, image: updatedImages };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const car = await axiosSecure.patch(`/cars-update/${id}`, carData);
      if (car.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Car updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/dashboard/manage-cars");
      } else {
        Swal.fire({
          title: "No Changes",
          text: "No changes were made.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // console.error("Error updating car data:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to update car data.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen text-white">
      <Header title="Update Car" />
      <div className="px-4 pb-4">
        <h1 className="text-xl font-bold py-6 text-center">
          Update Car Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Car Name and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium pb-1.5">
                Car Name
              </label>
              <input
                type="text"
                name="name"
                value={carData.name}
                onChange={handleChange}
                placeholder="Car Name"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full focus:outline-none focus:ring-0 border border-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">Brand</label>
              <input
                type="text"
                name="brand"
                value={carData.brand}
                onChange={handleChange}
                placeholder="Brand"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full focus:outline-none focus:ring-0 border border-white"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            {carData.image.map((_, index) => (
              <div key={index} className="w-full">
                <label className="block text-sm font-medium pb-1.5">
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, index)}
                  className="w-full p-4 bg-[#222222] text-gray-400 rounded-full focus:outline-none focus:ring-0 border-2 border-dashed border-white"
                />
              </div>
            ))}
          </div>

          {/* Type and Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium pb-1.5">
                Car Type
              </label>
              <input
                type="text"
                name="type"
                value={carData.type}
                onChange={handleChange}
                placeholder="Car Type"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full focus:outline-none focus:ring-0 border border-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">Year</label>
              <input
                type="number"
                name="year"
                value={carData.year}
                onChange={handleChange}
                placeholder="Year"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full focus:outline-none focus:ring-0 border border-white"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 w-full py-3 bg-[#f5b754] text-white font-semibold rounded-lg hover:bg-[#d49343] transition"
            >
              Update Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
