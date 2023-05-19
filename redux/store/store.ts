import { configureStore } from "@reduxjs/toolkit";
import createSlice from "../features/create/createSlice";
import currentSlice from "../features/current/currentSlice";

// ...

export const store = configureStore({
  reducer: {
    formdata: createSlice,
    currentData: currentSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
