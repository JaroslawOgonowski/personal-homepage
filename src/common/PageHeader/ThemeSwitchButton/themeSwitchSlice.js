import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: "themeSwitch",
    initialState: {
        darkModeOn: false,
    },
    reducers: {
        toggleMode: state => {
            state.darkModeOn = !state.darkModeOn;
        }
    },    
});

export const {toggleMode} = themeSwitchSlice.actions;

export const selectModeState = state => state.themeSwitch;
export const selectMode = state => selectModeState(state).darkModeOn;

export default themeSwitchSlice.reducer;