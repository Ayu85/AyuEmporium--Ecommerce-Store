import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'bag',
    initialState: {
        items: [],
        totalPrice: null
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
           
        },
        setPrice: (state, action) => {
            state.totalPrice += action.payload
        }

    }
})
export const { addItem, setPrice } = cart.actions;
export default cart.reducer