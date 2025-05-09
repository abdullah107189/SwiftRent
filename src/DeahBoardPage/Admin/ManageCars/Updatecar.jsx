import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../../../components/common/Header';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import imageUploade from '../../../components/CarImageUploade/ImageChanges';
import Spinner from '../../../components/Spinner';

const UpdateCar = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({
    name: '',
    brand: '',
    type: '',
    year: '',
    transmission: '',
    seats: '',
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get(`/cars/${id}`);
        setCarData(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to fetch car data.',
          icon: 'error',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchCarData();
  }, [id, axiosSecure]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name.includes('location.')) {
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

    try {
      const uploadedUrl = await imageUploade(imageCarUpload);
      if (uploadedUrl) {
        setCarData(prevData => {
          const updatedImages = [...prevData.image];
          updatedImages[index] = uploadedUrl;
          return { ...prevData, image: updatedImages };
        });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to upload image.',
        icon: 'error',
      });
    }
  };

  const handleFeaturesChange = e => {
    const { value, checked } = e.target;
    setCarData(prevState => {
      if (checked) {
        return { ...prevState, features: [...prevState.features, value] };
      } else {
        return {
          ...prevState,
          features: prevState.features.filter(f => f !== value),
        };
      }
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axiosSecure.patch(`/cars-update/${id}`, carData);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Car updated successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/dashboard/manage-cars');
        });
      } else {
        Swal.fire({
          title: 'No Changes',
          text: 'No changes were made to the car details.',
          icon: 'info',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error updating car data:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to update car data.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

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
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
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
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            {carData.image.map((img, index) => (
              <div key={index} className="w-full">
                <label className="block text-sm font-medium pb-1.5">
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  onChange={e => handleImageChange(e, index)}
                  className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border-2 border-dashed border-white"
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
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
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
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
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
                placeholder="Transmission"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium pb-1.5">Seats</label>
              <input
                type="number"
                name="seats"
                value={carData.seats}
                onChange={handleChange}
                placeholder="Seats"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
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
                placeholder="Fuel Type"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
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
                placeholder="Price"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium pb-1.5">City</label>
              <input
                type="text"
                name="location.city"
                value={carData.location.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
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
                placeholder="Pickup Point"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium pb-1.5">
                Drop Off Point
              </label>
              <input
                type="text"
                name="location.dropOffPoint"
                value={carData.location.dropOffPoint}
                onChange={handleChange}
                placeholder="Drop Off Point"
                className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white"
                required
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium pb-1.5">Features</label>
            <div className="flex flex-wrap gap-4">
              {[
                'GPS',
                'Bluetooth',
                'Air Conditioning',
                'Heated Seats',
                'Backup Camera',
                'Cruise Control',
              ].map((feature, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={feature}
                    checked={carData.features.includes(feature)}
                    onChange={handleFeaturesChange}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 rounded-full bg-[#f5b754]  hover:bg-[#a68f6c]  transition-all font-semibold text-white"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
