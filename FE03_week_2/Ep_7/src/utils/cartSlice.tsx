import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    // name of the slice 
    name: "card",
    // the initial state 
    initialState: {
        items: ["a", 1]
    },
    reducers: {
        // it takes 2 parameters, state is the initialState at start, e.g when user clicks on button, and when dispatcher calls action which maps to the reducer function, 
        // the data which is sent while click on button is sent as "action" parameter 
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        // reducer fn me you never return anything, it auomatically modifies the state
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer