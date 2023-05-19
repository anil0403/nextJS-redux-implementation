import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
interface createData {
  data: Array<any>;
  currentData: Object;
  textColor: string;
  backgroundColor: string;
  border: string;
  color: string;
}
// Define the initial state using that type
const initialState: createData = {
  data: [],
  currentData: {},
  textColor: "black",
  backgroundColor: "white",
  border: "black",
  color: "black",
};
export const formSlice = createSlice({
  name: "createFormData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Object>) => {
      state.data.push(action.payload);
    },
    createCurrentData: (state, action: PayloadAction<Object>) => {
      state.currentData = action.payload;
    },
    deleteCurrentData: (state) => {
      state.currentData = {};
    },
    deleteData: (state, action: PayloadAction<Object>) => {
      const elementToRemove = action.payload;
      const newArray = state.data.filter((element) => {
        return element.email !== (elementToRemove as any).email;
      });
      state.data = newArray;
    },
    update: (state, action: PayloadAction<Object>) => {
      const newData = action.payload;
      const updatedData = state.data.filter((item) => {
        if (item?.email !== (newData as any)?.email) {
          return item;
        }
      });
      updatedData.push(newData);
      state.data = updatedData;
    },
    changeColor: (state, action: PayloadAction<Object>) => {
      // change color
    },
    inputColor: (state, action: PayloadAction<Object>) => {
      // change color
    },
    changeMode: (state, action: PayloadAction<Object>) => {
      // change color
    },
  },
});
export const {
  create,
  createCurrentData,
  deleteData,
  update,
  deleteCurrentData,
} = formSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.formdata.data;
export default formSlice.reducer;
