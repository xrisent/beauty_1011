import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IService } from "./interface";

interface IServiceState {
  services: IService[];
  servicesLoading: boolean;
  servicesError: string | null;
}

const initialState: IServiceState = {
  services: [],
  servicesLoading: false,
  servicesError: null,
};

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, thunkAPI) => {
    const response = await fetch("http://localhost:3000/services", {
      method: "GET",
    });
    if (!response.ok) {
      return thunkAPI.rejectWithValue(
        `Ошибка сервера: статус ${response.status}`,
      );
    }
    return await response.json();
  },
);

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.servicesLoading = true;
      state.servicesError = null;
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.servicesLoading = false;
      state.services = action.payload;
    });
    builder.addCase(fetchServices.rejected, (state) => {
      state.servicesLoading = false;
      state.servicesError = "Ошибка";
    });
  },
});

export default serviceSlice.reducer;
