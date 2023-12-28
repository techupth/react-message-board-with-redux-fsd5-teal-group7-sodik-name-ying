// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit"

const initiallState = []

export const  InputMessage = createSlice({
name: "InputMessage",
initialState : initiallState,
reducers :{

    getInputMessage:(state,action) =>{
        return state = action.payload
}
}
})

export const {getInputMessage} = InputMessage.actions

export default InputMessage.reducer;