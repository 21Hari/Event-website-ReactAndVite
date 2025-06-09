import { createSlice } from "@reduxjs/toolkit";


const login = createSlice({
    name: 'login',
    initialState: {
        userName: '',
        password: '',
        button: false,
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        handlingButton: (state) => {
            state.button = true
        }

    }
})

export default login