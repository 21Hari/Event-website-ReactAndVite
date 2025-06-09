import React from 'react'
import './index.css'
import { IoLocationSharp } from "react-icons/io5";

function RecommendedEvents(props) {
    const { events } = props
    const { eventName, cityName, date, weather, distanceKm } = events
    //console.log(eventName, cityName, date, weather, imgUrl)

    const backimage = eventName.slice(0, 6)
    //console.log(backimage)


    const formatted = new Date(date).toLocaleDateString("en-US", { //Its convert the date in the format of year month, day//
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const distance = Math.round(Number(distanceKm)) + "Km" //which is used to round our distance 






    return (


        <div className={`event-card ${backimage}`}>
            <div className="card-content">
                <div className="card-content-items">
                    <h3>{eventName}</h3>
                    <p>{formatted}</p>
                </div>
                <div className="card-content-items">
                    <p><IoLocationSharp /> {cityName}</p>
                    <p>{weather}|{distance}</p>
                </div>

            </div>
        </div>


    )
}

export default RecommendedEvents