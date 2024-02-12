import { configureStore } from '@reduxjs/toolkit'
import showCategories from './slices/showCategories'
const store = configureStore({
    reducer: {
        categoriesView: showCategories
    }
})
export default store