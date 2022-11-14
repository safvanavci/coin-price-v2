import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState:{
        value: true
    },
    reducers:{
        themeSwitch: state => {
            state.value = !state.value
        }
    }

})

export const {themeSwitch} = ThemeSlice.actions;
export default ThemeSlice.reducer