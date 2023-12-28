// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

export const messageBoardSlice = createSlice({
  name: "input",
  initialState: [],
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
      console.log(state);
      return state;
    },
    deleteText: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});
export const { addText, deleteText } = messageBoardSlice.actions;
export default messageBoardSlice.reducer;
