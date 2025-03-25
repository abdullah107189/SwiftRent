import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const axiosPublic = useAxiosPublic();

// Thunks for async actions
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, userInfo }, { rejectWithValue }) => {
    // console.log(userInfo);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userInfo.name,
      };
      const response = await axiosPublic.post("/add-user", newUser);

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
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
