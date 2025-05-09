import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import Header from '../../components/common/Header';
import imageUploade from '../../components/CarImageUploade/ImageChanges';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddToCar = () => {
  const axiosSecure = useAxiosSecure();
  const [carData, setCarData] = useState({
    name: '',
    brand: '',
    type: '',
    year: '',
    transmission: '',
    seats: '',
    booking: true,
    fuel: '',
    location: {
      city: '',
      pickupPoint: '',
      dropOffPoint: '',
    },
    availability: 'Available',
    features: [],
    price: '',
    image: ['', '', ''],
  });

  const handleChange = e => {
    const { name, value } = e.target;
    if (name.includes('location')) {
      const locationField = name.split('.')[1];
      setCarData(prevState => ({
        ...prevState,
        location: {
          ...prevState.location,
          [locationField]: value,
        },
      }));
    } else {
      setCarData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleImageChange = async (e, index) => {
    const imageCarUpload = e.target.files[0];

    if (!imageCarUpload) return;

    const uploadedUrl = await imageUploade(imageCarUpload);
    if (uploadedUrl) {
      setCarData(prevData => {
        const updatedImages = [...prevData.image];
        updatedImages[index] = uploadedUrl;
        return { ...prevData, image: updatedImages };
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(carData);

    try {
      const car = await axiosSecure.post('/add-car', carData);

      // console.log(car);

      // Success Alert
      Swal.fire({
        title: 'Success!',
        text: 'Car added successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.log(error);

      // Error Alert
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add car. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      setCarData('');
    }
  };

  return (
    <div className="min-h-screen ">
      <Header title="Admin Dashboard" text="Welcome to SwiftRent " />
      <div className="px-4 pb-4">
        <h1 className="text-xl font-bold py-6 text-center">Add Car list</h1>
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
                onChange={handleChange}
                placeholder="Car Name"
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                className="w-full p-4 sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            {carData?.image.map((_, index) => (
              <div key={index} className="w-full">
                <label className="block text-sm font-medium pb-1.5">
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  onChange={e => handleImageChange(e, index)}
                  className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0 border-2 border-dashed border-white/20 "
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
                onChange={handleChange}
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                placeholder="Car Type"
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
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                placeholder="Year"
                required
              />
            </div>
          </div>

          {/* Transmission and Seats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium pb-1.5">
                Transmission
              </label>
              <input
                type="text"
                name="transmission"
                value={carData.transmission}
                onChange={handleChange}
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                required
                placeholder=" Transmission"
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">Seats</label>
              <input
                type="number"
                name="seats"
                value={carData.seats}
                onChange={handleChange}
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                placeholder="Seats"
                required
              />
            </div>
          </div>

          {/* Fuel and Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium pb-1.5">
                Fuel Type
              </label>
              <input
                type="text"
                name="fuel"
                value={carData.fuel}
                onChange={handleChange}
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                placeholder="Fuel Type"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">Price</label>
              <input
                type="number"
                name="price"
                value={carData.price}
                onChange={handleChange}
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                placeholder="Price"
                required
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium pb-1.5">City</label>
              <input
                type="text"
                name="location.city"
                value={carData.location.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">
                Pickup Point
              </label>
              <input
                type="text"
                name="location.pickupPoint"
                value={carData.location.pickupPoint}
                onChange={handleChange}
                className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
                placeholder=" Pickup Point"
                required
              />
            </div>
          </div>

          {/* Drop-off Point */}
          <div>
            <input
              type="text"
              name="location.dropOffPoint"
              placeholder="Drop-off Point"
              value={carData.location.dropOffPoint}
              onChange={handleChange}
              className="w-full  p-4  sBgBlack tBlack rounded-full focus:outline-none focus:ring-0  "
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="fillBtn w-full flex justify-center"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToCar;
