import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./authSlice";
import auth from "../../firebase/firebase.config";

export const authStateListener = (dispatch) => {
  onAuthStateChanged(auth, (currentUser) => {
    dispatch(setUser(currentUser));
  });
};
