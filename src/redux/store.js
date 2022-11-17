import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ThemeSlice";
import convertReducer from "./slices/ConvertSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    convert: convertReducer,
  },
});
