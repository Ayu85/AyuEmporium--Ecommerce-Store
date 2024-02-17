import { configureStore } from '@reduxjs/toolkit'
import showCategories from './slices/showCategories'
import cartSlice from './slices/cartSlice'
import login_modal from './slices/login_modal'
const store = configureStore({
    reducer: {
        categoriesView: showCategories,
        cart: cartSlice,
        loginmodal:login_modal
    }
})
export default store