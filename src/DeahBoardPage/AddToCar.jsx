import { useState } from 'react';
import ReactSelect from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/common/Header';

const AddToCar = () => {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    carName: '',
    location: '',
    shortDescription: '',
    image: null,
    date: new Date(),
    category: null,
  });

  const carCategories = [
    { value: 'BMW', label: 'BMW' },
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Tesla', label: 'Tesla' },
  ];

  // Handle Input Change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageChange = e => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="container mx-auto  rounded-lg shadow-md">
        <Header title="Add to Car" />
        <h2 className="text-center text-xl font-bold mb-4">Add Your Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          {/* User Name & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter mobile number"
                required
              />
            </div>
          </div>

          {/* Car Name & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Car Name</label>
              <input
                type="text"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter car name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          {/* Date & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <DatePicker
                selected={formData.date}
                onChange={date => setFormData({ ...formData, date })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <ReactSelect
                options={carCategories}
                value={formData.category}
                onChange={selectedOption =>
                  setFormData({ ...formData, category: selectedOption })
                }
                placeholder="Select category"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium">Car Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block mb-1 font-medium">Short Description</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Write a short description..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToCar;
