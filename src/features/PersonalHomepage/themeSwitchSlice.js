import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: "themeSwitch",
    initialState: {
        darkModeOff: true,
    },
    reducers: {
        toggleMode: state => {
            state.darkModeOff = !state.darkModeOff;
        }
    },
});

export const { toggleMode } = themeSwitchSlice.actions;
export const selectModeState = state => state.themeSwitch;
export const selectMode = state => selectModeState(state).darkModeOff;

export default themeSwitchSlice.reducer;