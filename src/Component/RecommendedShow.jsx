import React, { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { fetchRecommentMiddleware } from '../Redux/middleware/RecommentedEventMiddleware';
import RecommendedEvents from './EventDetailsComponent/RecommendedEvents';


function RecommendedShow() {


    const { loading, error, recommentedEvent } = useSelector((store) => { return store.EventState });
    console.log(recommentedEvent)
    //console.log(loading)




    const dispatch = useDispatch()

    useEffect(function () {
        dispatch(fetchRecommentMiddleware);
    }, [])

    const tenEvents = recommentedEvent?.events ?? [];
    //console.log(tenEvents); // Logs your 8-10 events


    return (

        <div>
            <div className='background-container'>
                <div className='recomented-text-element'>
                    <h1>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
                    <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliwust odia mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
                </div>

            </div>
            <div className='recomed-text'>
                <div className='recomed-text-icon-element'>
                    <h3 className='recomed-text-icon-elementh-heading'>Recommented shows</h3>
                    <FaArrowRightLong />
                </div>

                <p>Show All </p>
            </div>
            <div className="card-scroll">

                {Array.isArray(tenEvents) &&
                    tenEvents.map((item, index) => (
                        <RecommendedEvents events={item} key={index} />
                    ))
                }




            </div>
        </div >
    )
}

export default RecommendedShow