import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Header from '../../../components/common/Header';
import imageUploade from '../../../components/CarImageUploade/ImageChanges';
import {
  fetchCar,
  updateCar,
  setCarField,
  setCarLocationField,
  setCarImage,
} from '../../../redux/features/car/carSlice';

const UpdateCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { car, loading } = useSelector(state => state.car);

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [dispatch, id]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (['city', 'pickupPoint', 'dropOffPoint'].includes(name)) {
      dispatch(setCarLocationField({ field: name, value }));
    } else {
      dispatch(setCarField({ field: name, value }));
    }
  };

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = await imageUploade(file);
    if (url) {
      dispatch(setCarImage({ index, url }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await dispatch(updateCar({ id, data: car }));
      if (res.payload.modifiedCount > 0) {
        Swal.fire('Success!', 'Car updated successfully!', 'success');
        navigate('/dashboard/manage-cars');
      } else {
        Swal.fire('No Changes', 'No changes were made.', 'info');
      }
    } catch (error) {
      Swal.fire('Error!', 'Failed to update car data.', error);
    }
  };

  if (!car) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen text-white">
      <Header title="Update Car" />
      <div className="px-4 pb-4">
        <h1 className="text-xl font-bold py-6 text-center">
          Update Car Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="name"
              value={car.name}
              onChange={handleChange}
              label="Car Name"
            />
            <InputField
              name="brand"
              value={car.brand}
              onChange={handleChange}
              label="Brand"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4">
            {car.image.map((img, i) => (
              <div key={i} className="w-full">
                <label className="block text-sm font-medium pb-1.5">
                  Image {i + 1}
                </label>
                <input
                  type="file"
                  onChange={e => handleImageChange(e, i)}
                  className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border-2 border-dashed border-white"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="type"
              value={car.type}
              onChange={handleChange}
              label="Car Type"
            />
            <InputField
              name="year"
              value={car.year}
              onChange={handleChange}
              label="Year"
              type="number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="transmission"
              value={car.transmission}
              onChange={handleChange}
              label="Transmission"
            />
            <InputField
              name="seats"
              value={car.seats}
              onChange={handleChange}
              label="Seats"
              type="number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="fuel"
              value={car.fuel}
              onChange={handleChange}
              label="Fuel Type"
            />
            <InputField
              name="price"
              value={car.price}
              onChange={handleChange}
              label="Price"
              type="number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="city"
              value={car.location.city}
              onChange={handleChange}
              label="City"
            />
            <InputField
              name="pickupPoint"
              value={car.location.pickupPoint}
              onChange={handleChange}
              label="Pickup Point"
            />
            <InputField
              name="dropOffPoint"
              value={car.location.dropOffPoint}
              onChange={handleChange}
              label="Drop-off Point"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 w-full py-3 bg-[#f5b754] text-white font-semibold rounded-lg hover:bg-[#d49343] transition"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Car'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ name, value, onChange, label, type = 'text' }) => (
  <div>
    <label className="block text-sm font-medium pb-1.5">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full p-4 bg-[#222222] text-gray-400 rounded-full border border-white focus:outline-none"
      required
    />
  </div>
);

export default UpdateCar;
