import { createSlice } from "@reduxjs/toolkit"

export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: [],
    },
    reducers: {
        setChefs: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setChefs } = chefsSlice.actions;

export default chefsSlice.reducer;