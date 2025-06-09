import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import RecommendedShow from './RecommendedShow';
import UpcomingEvent from './UpcomingEvent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import upcomingEventElement from '../Redux/UpcomingEventSlice';


const actionsElement = upcomingEventElement.actions
function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { button } = useSelector((state) => state.loginState)
    const handlingSignin = () => {
        navigate('/signup')

    }

    const searchElement = (event) => {
        dispatch(actionsElement.setSearchElement(event.target.value))
    }



    return (

        <div>
            <nav className='nav-container'>
                <div className='nav-element-container'>
                    <div>
                        <h1 className='logo '>BookUsNow</h1>
                        <div className='logo-icons'>
                            <FaLocationDot />
                            <span>Mumbai, </span>
                            <span>india</span>
                            <FaAngleRight />
                        </div>
                    </div>
                    <div className='nav-logo-container-element'><FaSearch className='nav-logo-item' />
                        <GrFavorite className='nav-logo-item' />
                        <FaUserAlt className='nav-logo-item' onClick={handlingSignin} />
                    </div>
                </div>
                <div className='nav-element-card-items'>
                    <p>Live shows</p>
                    <p>Streams</p>
                    <p>Movies</p>
                    <p>Plays</p>
                    <p>Events</p>
                </div>
            </nav>
            <nav className='nav-container-lg'>
                <div className='nav-container-lg-container'>
                    <h1 className='logo'>BookUsNow</h1>
                    <div className='nav-categories-element-container'>
                        <div className='nav-categories-container'>
                            <BsList />
                            <p>categories</p>
                        </div>
                        <div className='nav-input-container'>
                            <input type='input' className='nav-container-input ' placeholder='DJI phantom' onChange={searchElement} />
                            < IoSearchOutline />
                        </div>
                    </div>
                    <div className='nav-categories-element-signin-container'>
                        <MdOutlineFavorite className='nav-categories-element-signin-container-icon' />
                        <p>Favorites</p>
                        <button onClick={handlingSignin} disabled={button ? true : false}>{button ? "Sign out" : "Sign in"} </button>
                    </div>
                </div>
                <div className='nav-item-container-element'>
                    <div className='logo-icons'>
                        < FaLocationDot />
                        <p>Mumbai, </p>
                        <p>India</p>
                        < FaAngleRight />

                    </div>
                    <div className='nav-element-card-items'>
                        <p>Live shows</p>
                        <p>Streams</p>
                        <p>Movies</p>
                        <p>Plays</p>
                        <p>Events</p>
                    </div>

                </div>
            </nav>

            <RecommendedShow />
            <UpcomingEvent />

        </div>


    )
}

export default Navbar