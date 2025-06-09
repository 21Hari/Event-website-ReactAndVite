import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
    name: "signupSlice",
    initialState: {
        userName: '',
        email: '',
        password: '',
        button: false
    },
    reducers: {
        handleUserName: (state, action) => {
            state.userName = action.payload
        },
        handleEmail: (state, action) => {
            state.email = action.payload
        },
        handlePassword: (state, action) => {
            state.password = action.payload
        },
        handleButton: (state) => {
            state.button = true
        }

    }
})

export default signupSlice