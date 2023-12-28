import { createSlice } from "@reduxjs/toolkit";

export const inputTextSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setUserMessage: (state, action) => {
      return (state = action.payload); // return ค่า state ใหม่
    },
  },
});

export const { setUserMessage } = inputTextSlice.actions;
export default inputTextSlice.reducer;
