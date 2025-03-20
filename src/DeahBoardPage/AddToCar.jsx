import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddToCar = () => {
  const [startDate, setStartDate] = useState(new Date());
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    type: '',
    year: '',
    transmission: '',
    seats: '',
    fuel: '',
    pricePerDay: '',
    location: {
      city: '',
      pickupPoint: '',
      dropOffPoint: '',
    },
    availability: 'available',
    features: [],
    userRating: 0,
    reviews: [],
    image: ['', '', ''],
    startDate,
  });
  console.log(formData);
  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    if (name in formData.location) {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle features input (comma-separated)
  const handleFeaturesChange = e => {
    const featuresArray = e.target.value
      .split(',')
      .map(feature => feature.trim());
    setFormData({
      ...formData,
      features: featuresArray,
    });
  };

  // Handle image URLs input
  const handleImageChange = (e, index) => {
    const newImages = [...formData.image];
    newImages[index] = e.target.value;
    setFormData({
      ...formData,
      image: newImages,
    });
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     'http://localhost:5000/api/cars',
    //     formData
    //   );
    //   alert('Car data submitted successfully!');
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   alert('Failed to submit car data.');
    // }
  };

  return (
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Add Car Details</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Car Name and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Car Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
          </div>
          {/* Image URLs */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            {formData.image.map((img, index) => (
              <div key={index} className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Image URL {index + 1}
                </label>
                <input
                  type="file"
                  value={img}
                  onChange={e => handleImageChange(e, index)}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                  required
                />
              </div>
            ))}
          </div>
          {/* Type and Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
          </div>

          {/* Transmission and Seats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Transmission
              </label>
              <input
                type="text"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Seats</label>
              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
          </div>

          {/* Fuel and Price Per Day */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Fuel Type
              </label>
              <input
                type="text"
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Price Per Day
              </label>
              <input
                type="number"
                name="pricePerDay"
                value={formData.pricePerDay}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.location.city}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Pickup Point
              </label>
              <input
                type="text"
                name="pickupPoint"
                value={formData.location.pickupPoint}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Dropoff Point
              </label>
              <input
                type="text"
                name="dropOffPoint"
                value={formData.location.dropOffPoint}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
                required
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Features (comma-separated)
            </label>
            <input
              type="text"
              value={formData.features.join(', ')}
              onChange={handleFeaturesChange}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#f5b754] text-white px-6 py-3 rounded-lg hover:bg-[#bfa781] transition duration-300"
            >
              Submit Car Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToCar;
