import { useState } from "react";
import { FaUser, FaSave, FaUpload, FaTrash } from "react-icons/fa";

const UpdateProfile = () => {
  const [user, setUser] = useState({
    firstName: "Ali",
    lastName: "Tufan",
    email: "alitufan@gmail.com",
    phone: "+01 4561 3214",
    dob: "03 Jun 1990",
    address: "8800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
    profilePic: "",
  });

  const [newEmail, setNewEmail] = useState({
    currentEmail: "",
    newEmail: "",
    confirmNewEmail: "",
  });

  const [imageError, setImageError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file size (Max 5MB) and dimensions (Min 150x150)
      if (file.size > 5 * 1024 * 1024) {
        setImageError("File size exceeds 5MB. Please choose a smaller image.");
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width < 150 || img.height < 150) {
          setImageError("Image dimensions must be at least 150x150.");
        } else {
          setImageError("");
          setUser({ ...user, profilePic: URL.createObjectURL(file) });
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  // const handleRemoveImage = () => {
  //   setUser({ ...user, profilePic: '' });
  // };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setNewEmail({ ...newEmail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center md:p-6 p-3 ">
        <div className="rounded-3xl p-6 w-full ">
          <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <FaUser /> Update Profile
          </h1>

          <div className="space-y-8 flex gap-4 ">
            {/* Personal Information Section */}
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="text-center">
                <label htmlFor="profilePic" className="cursor-pointer">
                  {user.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt="Profile"
                      className="w-16 h-16 rounded-full mx-auto border-4 border-blue-500 object-cover"
                    />
                  ) : (
                    <div className="w-full border py-2 rounded-full flex items-center justify-center text-gray-500">
                      <svg
                        className="w-6 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path>
                      </svg>
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
                  <label className="blockfont-medium pb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent outline-none rounded-lg "
                  />
                </div>
                <div>
                  <label className="block font-medium pb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block   font-medium pb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                  readOnly
                />
              </div>

              {/* Phone number */}
              <div>
                <label className="block   font-medium pb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block   font-medium pb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block   font-medium pb-1">Address</label>
                <textarea
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                ></textarea>
              </div>

              {/* Save Changes Button */}
              <button
                type="submit"
                className="w-full fillBtn  py-3 rounded-lg flex items-center justify-center gap-2  transition duration-300"
              >
                <FaSave /> Save Changes
              </button>
            </form>

            <hr className="my-6" />

            {/* Change Email Section */}
            <form className="space-y-6 w-full">
              <h2 className="text-xl font-semibold  ">Change Email</h2>

              {/* Current Email */}
              <div>
                <label className="block  font-medium pb-1">Current Email</label>
                <input
                  type="email"
                  name="currentEmail"
                  value={newEmail.currentEmail}
                  onChange={handleEmailChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                />
              </div>

              {/* New Email */}
              <div>
                <label className="block  font-medium pb-1">New Email</label>
                <input
                  type="email"
                  name="newEmail"
                  value={newEmail.newEmail}
                  onChange={handleEmailChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                />
              </div>

              {/* Confirm New Email */}
              <div>
                <label className="block  font-medium pb-1">
                  Confirm New Email
                </label>
                <input
                  type="email"
                  name="confirmNewEmail"
                  value={newEmail.confirmNewEmail}
                  onChange={handleEmailChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent rounded-lg  outline-none"
                />
              </div>

              {/* Save New Email Button */}
              <button
                type="submit"
                className="w-full fillBtn  py-3 rounded-lg flex items-center justify-center gap-2  transition duration-300"
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
