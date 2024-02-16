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
        },
        deleteItem: (state, action) => {
            state.items.splice(action.payload, 1)
        },
        reducePrice: (state, action) => {
            state.totalPrice -= action.payload
        },

    }
})
export const { addItem, setPrice, deleteItem,reducePrice } = cart.actions;
export default cart.reducer