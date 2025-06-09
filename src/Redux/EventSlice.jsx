import { createSlice } from "@reduxjs/toolkit";

const EventSlice = createSlice({
    name: "EventSlice",
    initialState: {
        recommentedEvent: [],
        loading: true,
        error: false,
    },
    reducers: {
        userLoading: (state) => {
            state.loading = true;
            state.error = false;
        },
        userError: (state) => {
            state.loading = false;
            state.error = true;
        },
        recommentedData: (state, action) => {
            state.loading = false;
            state.recommentedEvent = action.payload;;

        }


    }
})

export default EventSlice