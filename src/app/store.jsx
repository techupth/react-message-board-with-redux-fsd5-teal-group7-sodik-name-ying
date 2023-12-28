// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardSlice from "../slices/messageBoardSlice";
import InputMessage  from "../slices/getInputTextSlice";

export const store = configureStore ({
    reducer:{
        message:messageBoardSlice,
        input:InputMessage
    },
})