import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./auth.api";

export interface AuthState {
  state: "idle" | "loading" | "error";
  isAuthenticated: boolean;
  errorMsg: string;
}

const defaultState: AuthState = {
  state: "idle",
  isAuthenticated: false,
  errorMsg: "",
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (params: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await login(params.email, params.password);
      console.log(res);
      return res;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    resetErrorMsg: (state) => {
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.state = "loading";
        state.isAuthenticated = false;
        state.errorMsg = "";
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.state = "error";
        state.isAuthenticated = false;
        state.errorMsg = action.error.message ?? "Error has occured";
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.state = "idle";
        state.isAuthenticated = true;
        state.errorMsg = "";
      });
  },
});

export const { resetErrorMsg } = authSlice.actions;
export const authReducer = authSlice.reducer;
