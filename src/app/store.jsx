// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardSlice from "../slices/messageBoardSlice";
import getInputSlice from "../slices/getInputSlice";

export const store = configureStore({
  reducer: {
    messageList: messageBoardSlice,
    userMessageInput: getInputSlice,
  },
});
