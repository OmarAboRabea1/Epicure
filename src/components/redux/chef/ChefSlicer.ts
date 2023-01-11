import { createSlice } from "@reduxjs/toolkit"

export const chefSlice = createSlice({
    name: "chef",
    initialState: {
        value: [],
    },
    reducers: {
        setChef: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setChef } = chefSlice.actions;

export default chefSlice.reducer;