import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import login from '../../Redux/loginSlice'

const actionsEle = login.actions
function Login() {

    const navigate = useNavigate()
    const { userName, password } = useSelector((store) => store.loginState)
    //console.log(userName, password)
    const dispatch = useDispatch()

    const nameInput = (event) => {
        //setUserName(event.target.value)
        dispatch(actionsEle.setUserName(event.target.value))
    }
    const passwordInput = (event) => {
        //setPassword(event.target.value)
        dispatch(actionsEle.setPassword(event.target.value))
    }
    const submitButton = (event) => {
        event.preventDefault()
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if ((storedUser.userName === userName) && (storedUser.password === password)) { //checking Invalid user or not //
            localStorage.setItem('isLogin', 'true')
            dispatch(actionsEle.handlingButton())
            navigate('/')
        }
        else {
            alert("Invalid User")
        }
    }


    return (
        <div className='login-container'>
            <div className='login-card-container'>
                <form>
                    <label htmlFor='User' className='login-label'>UserName</label><br />
                    <input type='text' id='User' onChange={nameInput} className='login-input' /><br />
                    <label htmlFor='Password' className='login-label'>Password</label><br />
                    <input type='text' id='Password' onChange={passwordInput} className='login-input' /><br />
                    <button type='submit' onClick={submitButton} className='login-button '>Submit</button>

                </form>

            </div>



        </div>
    )
}

export default Login