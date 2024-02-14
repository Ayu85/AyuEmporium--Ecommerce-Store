import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'bag',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items = action.payload
        }
    }
})
export const { addItem } = cart.actions;
export default cart.reducer