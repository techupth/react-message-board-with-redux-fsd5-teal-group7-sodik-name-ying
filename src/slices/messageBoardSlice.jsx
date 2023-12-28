// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initiallState = [];

export const Message = createSlice({
  name: "disPlayMessage",
  initialState: initiallState,
  reducers: {
    addMessage: (state, action) => {
      action.payload ? (state = [...state, action.payload]) : (state = state);
      return state;
    },
    deleteMessage: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const { addMessage, deleteMessage } = Message.actions;

export default Message.reducer;
