import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { storeData } from "@/storage/data";

// Define a type for the slice state
interface createData {
  data: object;
}
// Define the initial state using that type
const initialState: createData = {
  data: {},
};
export const formSlice = createSlice({
  name: "createFormData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    create: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
      console.log(state.data);

      storeData(state.data);
    },
  },
});
export const { create } = formSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.formdata.data;
export default formSlice.reducer;
