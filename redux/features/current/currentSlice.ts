import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
interface createData {
  email: string;
  data: object;
}
// Define the initial state using that type
const initialState: createData = {
  email: "",
  data: {},
};
export const formSlice = createSlice({
  name: "sotreCurrentData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createCurrent: (state, action: PayloadAction<object>) => {
      console.log(`$ current data = ${action.payload}`);
    },
  },
});
export const { createCurrent } = formSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.currentData.data;
export default formSlice.reducer;
