import React, { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchUpcomingMiddleware } from '../Redux/middleware/RecommentedEventMiddleware';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UpComingEventsDetails from './EventDetailsComponent/UpComingEventsDetails';
import { TailSpin } from 'react-loader-spinner';

function UpcomingEvent() {
    const dispatch = useDispatch()

    const { loading, error, addEvent, searchElement } = useSelector((store) => store.UpcomingState);
    const upcomingEvents = addEvent?.events || [];
    console.log(loading)
    console.log(upcomingEvents)

    useEffect(function () {
        dispatch(fetchUpcomingMiddleware);
    }, [])

    const filteredElement = upcomingEvents.filter(item => (
        item.eventName.toLowerCase().includes(searchElement.toLowerCase())
    ))
    return (
        <div className='upcomingEvent-container'>
            <div className='recomed-text-icon-element'>
                <h3 className='recomed-text-icon-elementh-heading'>Upcoming event</h3>
                <FaArrowRightLong />

            </div>
            <div className="upcoming-container-element">
                {loading && <p> <TailSpin height={60} width={60} color="#000" /></p>}
                {error && <p>Error loading events</p>}
                {!loading && !error && filteredElement.map((item, idx) => (
                    <UpComingEventsDetails key={idx} futureEvents={item} idxele={idx} />
                ))

                }
            </div>


        </div>
    )
}

export default UpcomingEvent