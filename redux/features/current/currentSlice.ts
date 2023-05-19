// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store/store";

// // Define a type for the slice state
// interface createData {
//   data: Object;
// }
// // Define the initial state using that type
// const initialState: createData = {
//   data: {},
// };
// export const fetchSlice = createSlice({
//   name: "sotreCurrentData",
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     createCurrent: (state, action: PayloadAction<Object>) => {
//       state.data = action.payload;
//       console.log(`$ current data = ${state.data}}`);
//     },
//   },
// });
// export const { createCurrent } = fetchSlice.actions;
// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.currentData.data;
// export default fetchSlice.reducer;
