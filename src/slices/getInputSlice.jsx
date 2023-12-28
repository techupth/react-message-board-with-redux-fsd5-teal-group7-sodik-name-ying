import { createSlice } from "@reduxjs/toolkit";

export const getInputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    userMessage: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { userMessage } = getInputSlice.actions;
export default getInputSlice.reducer;
