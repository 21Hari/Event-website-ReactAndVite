import { createSlice } from "@reduxjs/toolkit";



const upcomingEventElement = createSlice({
    name: "upcomingEventElement",
    initialState: {
        addEvent: [],
        loading: true,
        error: false,
        searchElement: ''

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
        upcomingEventData: (state, action) => {
            state.loading = false
            state.error = false
            state.addEvent = action.payload
        },
        setSearchElement: (state, action) => {
            state.searchElement = action.payload
        }
    }
})
export default upcomingEventElement