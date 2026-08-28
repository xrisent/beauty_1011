import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  service: "первое значение в redux",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
});

export default serviceSlice.reducer;
