import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const showCategories = createSlice({
    name: 'categories',
    initialState: {
        value: false
    }
    ,
    reducers: {
        toogleCategories: (state) => {
            state.value = !state.value
        }
    }
})
export default showCategories.reducer;
export const { toogleCategories } = showCategories.actions