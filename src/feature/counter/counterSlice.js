import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    number: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state, action) => {
            state.number += 1;
        },
        substract: (state) => {
            state.number -= 1;
        }
    }
})

export const {add, substract} = counterSlice.actions; 
export default counterSlice.reducer;