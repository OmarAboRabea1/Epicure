import { createSlice } from "@reduxjs/toolkit"

export const disheSlice = createSlice({
    name: "dishArray",
    initialState: {
        value: [],
    },
    reducers: {
        setDishArray: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setDishArray } = disheSlice.actions;


export default disheSlice.reducer;