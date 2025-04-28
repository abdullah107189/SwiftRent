import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import AuthContext from "./AuthContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileUser = (name, photo) => {
    updateProfile(auth, {
      displayName: name,
      photoURL: photo,
    })
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User logged in");
      const updateUserStatus = async () => {
        try {
          if (currentUser) {
            setUser(currentUser);
            const { data } = await axiosPublic.patch(
              `/changeActiveState?status=true`
            );
            console.log(data);
          } else {
            const { data } = await axiosPublic.patch(
              `/changeActiveState?status=false`
            );
            console.log(data);
            setUser(null);
          }
        } catch (error) {
          console.error("Error updating status:", error);
        } finally {
          setLoading(false);
        }
      };

      updateUserStatus();
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
