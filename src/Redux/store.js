import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./EventSlice";
import upcomingEventElement from "./UpcomingEventSlice"
import login from "./loginSlice";
import signupSlice from "./signupSlice";



const store = configureStore({
    reducer: {
        EventState: EventSlice.reducer, //eventSlice is stored inside the EventState
        UpcomingState: upcomingEventElement.reducer,
        loginState: login.reducer,
        signinState: signupSlice.reducer,
    },
});


export default store