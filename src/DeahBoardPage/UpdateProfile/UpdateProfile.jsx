import { useState } from "react";
import { FaUser, FaSave } from "react-icons/fa";
import useSingleUser from "../../hooks/useSingleUser";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateProfileUser } from "../../redux/auth/authSlice";

const UpdateProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { userInfo, refetch } = useSingleUser();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: userInfo?.userInfo?.name || "",
    phone: userInfo?.userInfo?.phone || "",
    dob: userInfo?.userInfo?.dob || "",
    address: userInfo?.userInfo?.address || "",
    profilePic: userInfo?.userInfo?.profilePic || "",
    email: userInfo?.userInfo?.email || "",
  });

  const [imageError, setImageError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        updateProfileUser({ name: user?.name, photo: user?.profilePic })
      ).unwrap();

      const res = await axiosPublic.patch(
        `/update-profile/${userInfo?.userInfo?.email}`,
        user
      );

      if (res.status === 200) {
        refetch();
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to update profile.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center md:p-6 p-3 ">
        <div className="rounded-3xl p-6 w-full ">
          <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <FaUser /> Update Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* Profile Image Upload */}

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block font-medium ">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={userInfo?.userInfo?.name}
                  placeholder="write your name"
                  onChange={handleChange}
                  className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent outline-none rounded-2xl"
                />
              </div>
              <div className="text-center mt-3 rounded-full border">
                <label htmlFor="profilePic" className="cursor-pointer">
                  {user?.profilePic ? (
                    <img
                      src={user?.profilePic}
                      alt="Profile"
                      className="rounded-2xl w-12 h-12 ml-1 border-blue-500 object-cover"
                    />
                  ) : (
                    <div className=" border p-3 rounded-full flex items-center justify-center text-gray-500">
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
                {imageError && (
                  <p className="text-red-500 text-sm ">{imageError}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium pb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="write your number"
                defaultValue={user?.phone}
                onChange={handleChange}
                className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent outline-none rounded-2xl"
              />
            </div>

            <div>
              <label className="block font-medium pb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                defaultValue={user?.dob}
                onChange={handleChange}
                className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent outline-none rounded-2xl"
              />
            </div>

            <div>
              <label className="block font-medium pb-1">Address</label>
              <textarea
                name="address"
                defaultValue={user?.address}
                onChange={handleChange}
                rows="3"
                placeholder="write your present address"
                className="w-full p-3 dark:border border-orange-300 tBgBlack dark:bg-transparent outline-none rounded-2xl"
              ></textarea>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full fillBtn py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-300"
            >
              <FaSave /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
