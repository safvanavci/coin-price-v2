import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/ThemeSlice'

export default configureStore({
    reducer: {
        theme: themeReducer
    }
})