import { createSlice } from "@reduxjs/toolkit"

export const dishesIDSlice = createSlice({
    name: "dishesID",
    initialState: {
        value: [],
    },
    reducers: {
        setDishesID: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setDishesID } = dishesIDSlice.actions;

export default dishesIDSlice.reducer;