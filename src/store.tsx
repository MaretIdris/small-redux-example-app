import { configureStore } from "@reduxjs/toolkit";
import { reducerFn } from "./ReducerFn";

export const store = configureStore({
  reducer: reducerFn,
});
