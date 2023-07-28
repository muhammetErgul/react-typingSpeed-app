import { configureStore } from "@reduxjs/toolkit";
import typingSpeedReducer from "./typingSpeedSlice";
export const store = configureStore({
  reducer: {
    typingSpeed: typingSpeedReducer,
  },
});
