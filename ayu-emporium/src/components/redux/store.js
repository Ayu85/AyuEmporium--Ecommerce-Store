import { configureStore } from '@reduxjs/toolkit'
import showCategories from './slices/showCategories'
import cartSlice from './slices/cartSlice'
const store = configureStore({
    reducer: {
        categoriesView: showCategories,
        cart: cartSlice
    }
})
export default store