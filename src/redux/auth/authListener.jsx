/* eslint-disable react-hooks/rules-of-hooks */
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./authSlice";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const axiosPublic = useAxiosPublic();
export const authStateListener = (dispatch) => {
  onAuthStateChanged(auth, (currentUser) => {
    // redux state set
    dispatch(setUser(currentUser));
    const updateUserStatus = async () => {
      try {
        if (currentUser) {
          localStorage.setItem("userEmail", currentUser?.email);
          await axiosPublic.patch(
            `/changeActiveState?status=true&email=${currentUser?.email}`
          );
        } else {
          const getEmail = localStorage.getItem("userEmail");
          await axiosPublic.patch(
            `/changeActiveState?status=false&email=${getEmail}`
          );
          localStorage.removeItem("userEmail");
        }
      } catch (error) {
        console.error("Error updating user status:", error);
      }
    };

    updateUserStatus();
  });
};
