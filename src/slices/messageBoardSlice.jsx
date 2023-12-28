// TODO: Start Create Slice Here
// Message board slice
import { createSlice } from "@reduxjs/toolkit";

export const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
      return state;
    },
    deleteMessage: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addMessage, deleteMessage } = messageBoardSlice.actions;
export default messageBoardSlice.reducer;
