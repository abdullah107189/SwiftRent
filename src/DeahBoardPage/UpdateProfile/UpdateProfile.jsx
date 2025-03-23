import { useState } from 'react';
import { FaUser, FaSave, FaUpload, FaTrash } from 'react-icons/fa';
import Header from '../../components/common/Header';
import { useSelector } from 'react-redux';

const UpdateProfile = () => {
  const { users } = useSelector(state => state.auth);
  const [user, setUser] = useState({
    firstName: 'Ali',
    lastName: 'Tufan',
    email: 'alitufan@gmail.com',
    phone: '+01 4561 3214',
    dob: '03 Jun 1990',
    address: '8800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.',
    profilePic: '',
  });

  const [newEmail, setNewEmail] = useState({
    currentEmail: '',
    newEmail: '',
    confirmNewEmail: '',
  });

  const [imageError, setImageError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];

    if (file) {
      // Validate file size (Max 5MB) and dimensions (Min 150x150)
      if (file.size > 5 * 1024 * 1024) {
        setImageError('File size exceeds 5MB. Please choose a smaller image.');
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width < 150 || img.height < 150) {
          setImageError('Image dimensions must be at least 150x150.');
        } else {
          setImageError('');
          setUser({ ...user, profilePic: URL.createObjectURL(file) });
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  // const handleRemoveImage = () => {
  //   setUser({ ...user, profilePic: '' });
  // };

  const handleEmailChange = e => {
    const { name, value } = e.target;
    setNewEmail({ ...newEmail, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <>
      <Header title="Update Profile" />
      <div className="min-h-screen flex items-center justify-center p-6 ">
        <div className="shadow-xl rounded-lg p-6 w-full max-w-3xl ">
          <h1 className="text-3xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
            <FaUser /> Update Profile
          </h1>

          <div className="space-y-8 flex gap-4 ">
            {/* Personal Information Section */}
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="text-center">
                <label htmlFor="profilePic" className="cursor-pointer">
                  {users?.photoURL ? (
                    <img
                      src={users?.photoURL}
                      alt="Profile"
                      className="w-16 h-16 rounded-full mx-auto border-4 border-blue-500 object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                      No file chosen
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="profilePic"
                  className="hidden"
                  onChange={handleImageChange}
                  accept=".jpg,.png"
                />
                {/* <div className="mt-2">
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash /> Remove Image
                  </button>
                </div> */}
                {imageError && (
                  <p className="text-red-500 text-sm mt-1">{imageError}</p>
                )}
              </div>

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium pb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-orange-300 rounded-lg "
                  />
                </div>
                <div>
                  <label className="block text-white  font-medium pb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-orange-300 rounded-lg "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white  font-medium pb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-orange-300 rounded-lg "
                  readOnly
                />
              </div>

              {/* Phone number */}
              <div>
                <label className="block text-white  font-medium pb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-orange-300 rounded-lg "
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-white  font-medium pb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  className="w-full p-3 border border-orange-300 rounded-lg "
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-white  font-medium pb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-orange-300 rounded-lg "
                ></textarea>
              </div>

              {/* Save Changes Button */}
              <button
                type="submit"
                className="w-full fillBtn text-white py-3 rounded-lg flex items-center justify-center gap-2  transition duration-300"
              >
                <FaSave /> Save Changes
              </button>
            </form>

            <hr className="my-6" />

            {/* Change Email Section */}
            <form className="space-y-6 w-full">
              <h2 className="text-xl font-semibold text-white ">
                Change Email
              </h2>

              {/* Current Email */}
              <div>
                <label className="block text-white font-medium pb-1">
                  Current Email
                </label>
                <input
                  type="email"
                  name="currentEmail"
                  value={newEmail.currentEmail}
                  onChange={handleEmailChange}
                  className="w-full p-3 border border-orange-300 rounded-lg "
                />
              </div>

              {/* New Email */}
              <div>
                <label className="block text-white font-medium pb-1">
                  New Email
                </label>
                <input
                  type="email"
                  name="newEmail"
                  value={newEmail.newEmail}
                  onChange={handleEmailChange}
                  className="w-full p-3 border border-orange-300 rounded-lg "
                />
              </div>

              {/* Confirm New Email */}
              <div>
                <label className="block text-white font-medium pb-1">
                  Confirm New Email
                </label>
                <input
                  type="email"
                  name="confirmNewEmail"
                  value={newEmail.confirmNewEmail}
                  onChange={handleEmailChange}
                  className="w-full p-3 border border-orange-300 rounded-lg "
                />
              </div>

              {/* Save New Email Button */}
              <button
                type="submit"
                className="w-full fillBtn text-white py-3 rounded-lg flex items-center justify-center gap-2  transition duration-300"
              >
                <FaSave /> Save New Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
