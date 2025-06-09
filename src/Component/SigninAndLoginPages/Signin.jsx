import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { useSelector } from 'react-redux'
import signupSlice from '../../Redux/signupSlice'
import { useDispatch } from 'react-redux'

const actionEle = signupSlice.actions

function Signin() {
    const navigate = useNavigate()

    const { userName, email, password, button } = useSelector((store) => store.signinState)
    //console.log(userName, email, password, button)
    const dispatch = useDispatch()


    const handlingUserName = (event) => {
        dispatch(actionEle.handleUserName(event.target.value))
    }
    const handlingEmail = (event) => {
        dispatch(actionEle.handleEmail(event.target.value))

    }
    const handlingPassword = (event) => {
        dispatch(actionEle.handlePassword(event.target.value))
    }

    const handlingSubmitButton = (event) => {
        event.preventDefault()
        localStorage.setItem("user", JSON.stringify({ userName, email, password })) //storing the user details in local storage//
        if ((userName === "") || (email === "") || (password === "")) {
            alert("Required all the Details")
        } else {
            alert("Successfully Register")
            dispatch(actionEle.handleButton())
        }
    }

    const handlingNavigate = () => {
        navigate('/login')
    }

    return (

        <div className='signup-container'>
            <h1 className='sigup-heading'>Sign up</h1>

            <form className='singup-card-container'>
                <label htmlFor='UserName' className='login-label'>UserName</label><br />
                <input type='text' id='UserName' onChange={handlingUserName} className='login-input' /><br />
                <label htmlFor='Email' className='login-label'>Email</label><br />
                <input type="text" id='Email' onChange={handlingEmail} className='login-input' /><br />
                <label htmlFor='Password' className='login-label'>Password</label><br />
                <input type='text' id='Password' onChange={handlingPassword} className='login-input' /><br />
                <button type='submit' onClick={handlingSubmitButton} className='login-button'>Sign up</button>
                <button type='button' className='login-button' onClick={handlingNavigate} disabled={!button ? true : false}>Login</button>
            </form>
        </div >
    )
}

export default Signin