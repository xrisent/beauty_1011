import { configureStore } from "@reduxjs/toolkit";

import serviceReducer from "./entities/service/model/slice";

export const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});
