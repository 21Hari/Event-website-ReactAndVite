import React from 'react'
import './index.css'
import { FaLocationDot } from "react-icons/fa6";
import upcomingEventImagesFiles from "./UpcomingEventImages.js"

function UpComingEventsDetails(props) {
    const { futureEvents, idxele } = props

    const { eventName, cityName, date, weather, distanceKm } = futureEvents

    //console.log(eventName)


    const formatted = new Date(date).toLocaleDateString("en-US", { //Its convert the date in the format of year month, day//
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const distance = Math.round(Number(distanceKm)) + "Km" //which is used to round our distance 
    const backgroundImg = upcomingEventImagesFiles[idxele]
    //console.log(backgroundImg)



    return (

        <div className="upcoming-event-card">
            <div className="upcoming-event-image" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <span className="upcoming-event-date">{formatted}</span>
            </div>
            <div className="upcoming-event-info">
                <h3 className="upcoming-event-title">{eventName}</h3>
                <p className="upcoming-event-meta"><FaLocationDot />{cityName} | {weather} | {distance}</p>

            </div>
        </div>


    )
}

export default UpComingEventsDetails