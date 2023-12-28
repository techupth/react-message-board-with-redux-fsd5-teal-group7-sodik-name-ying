// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardReducer from "../slices/messageBoardSlice";
import inputTextSlice from "../slices/getinputslice";

export const store = configureStore({
  reducer: {
    messageBoard: messageBoardReducer,
    input: inputTextSlice,
  },
});
