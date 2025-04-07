/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

// Thunks for async actions
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, userInfo }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const response = await axiosPublic.post("/add-user", {
        ...userInfo,
        uid: userCredential.user.uid,
      });
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.code === "auth/email-already-in-use"
          ? "This email is already registered"
          : "Registration failed: " + error.message
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await axiosPublic.patch("/update-last-login", { email });
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(
        error.code === "auth/invalid-credential"
          ? "Incorrect Email/Password"
          : "Login failed: " + error.message
      );
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await signOut(auth);
});

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ newPassword }, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No user is currently logged in");
      await updatePassword(user, newPassword);
      return "Password updated successfully";
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      // change password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
