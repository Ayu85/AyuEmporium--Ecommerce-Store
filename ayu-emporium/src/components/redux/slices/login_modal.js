import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const login = createSlice({
  name: 'login-modal',
  initialState: {
    value: false
  },
  reducers: {
    toogleModal: (state) => {
      state.value = !state.value
    }
  }
})

export default login.reducer
export const { toogleModal } = login.actions
