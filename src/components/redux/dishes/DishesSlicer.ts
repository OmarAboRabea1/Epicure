import { createSlice } from "@reduxjs/toolkit"

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: {
        value: [],
    },
    reducers: {
        setDishes: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setDishes } = dishesSlice.actions;

export default dishesSlice.reducer;