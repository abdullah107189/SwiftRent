/* eslint-disable no-unused-vars */

import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import imageUploade from "../../components/CarImageUploade/ImageChanges";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user?.displayName);

  const dispatch = useDispatch();
  const [image, setImage] = useState(user?.photoURL || "");
  const [imageFile, setImageFile] = useState(null);
  const [updateProfile, setUpadteProfile] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const uploadedImageUrl = await imageUploade(file);
        setImage(uploadedImageUrl);
        setImageFile(file);
      } catch (error) {
        // console.error("Error uploading image:", error);
      }
    }
  };
  const handelEditProfile = () => {
    setUpadteProfile(!updateProfile);
  };
  return (
    <>
      <SettingSection icon={User} title={"Profile"}>
        <div className="flex flex-col sm:flex-row items-center mb-6">
          {/* Profile Image */}
          <label htmlFor="file-upload" className="cursor-pointer">
            <img
              src={user?.photoURL || ""}
              alt="Profile"
              referrerPolicy="no-referrer"
              className="rounded-full w-20 h-20 object-cover mr-4"
            />
          </label>

          {/* Hidden file input */}
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />

          <div>
            <h3 className="text-lg font-semibold">{user?.displayName}</h3>
            <p className="tBlack">{user?.email}</p>
          </div>
        </div>

        <button onClick={handelEditProfile} className="fillBtn ">
          Edit Profile
        </button>
        {updateProfile && <UpdateProfile />}
      </SettingSection>
    </>
  );
};
export default Profile;
