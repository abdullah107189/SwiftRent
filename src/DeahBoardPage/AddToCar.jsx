import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/common/Header';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CarForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    type: '',
    year: '',
    transmission: '',
    seats: '',
    fuel: '',
    pricePerDay: '',
    city: '',
    pickupPoint: '',
    dropoffPoint: '',
    features: '',
    images: ['', '', ''],
    shortDescription: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/cars',
        formData
      );
      alert('Car added successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mx-auto rounded-lg shadow-md">
      <Header title="Add to Car" />
      <h2 className="text-center text-xl font-bold mb-4">Add Your Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Car Name</label>
            <input
              type="text"
              name="name"
              placeholder="Car Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Brand</label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-700"
              required
            >
              <option value="">Select a Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Ford">Ford</option>
              {/* Add more brands as necessary */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Type</label>
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <DatePicker
              selected={formData.date}
              onChange={date => setFormData({ ...formData, date })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Transmission</label>
            <input
              type="text"
              name="transmission"
              placeholder="Transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Seats</label>
            <input
              type="number"
              name="seats"
              placeholder="Seats"
              value={formData.seats}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Fuel Type</label>
            <input
              type="text"
              name="fuel"
              placeholder="Fuel Type"
              value={formData.fuel}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Price Per Day</label>
            <input
              type="number"
              name="pricePerDay"
              placeholder="Price Per Day"
              value={formData.pricePerDay}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Pickup Point</label>
            <input
              type="text"
              name="pickupPoint"
              placeholder="Pickup Point"
              value={formData.pickupPoint}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Dropoff Point</label>
            <input
              type="text"
              name="dropoffPoint"
              placeholder="Dropoff Point"
              value={formData.dropoffPoint}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Features</label>
            <input
              type="text"
              name="features"
              placeholder="Features (comma separated)"
              value={formData.features}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Image Inputs */}
        <div className="flex flex-col md:flex-row gap-4">
          {[0, 1, 2].map(index => (
            <div key={index} className="w-full">
              <label className="block mb-1 font-medium">
                Image Input {index + 1}
              </label>
              <input
                type="text"
                placeholder={`Image URL ${index + 1}`}
                value={formData.images[index]}
                onChange={e => handleImageChange(e, index)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="shortDescription"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Write a short description..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 md:col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarForm;
