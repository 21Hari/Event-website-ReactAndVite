import React from 'react'
import './index.css'
import { IoLocationSharp } from "react-icons/io5";
import RecommentImages from './RecomentEventImages.js'

function RecommendedEvents(props) {
    const { events, idxele } = props
    const { eventName, cityName, date, weather, distanceKm } = events
    //console.log(eventName, cityName, date, weather, imgUrl)
    console.log(idxele)


    //console.log(backimage)


    const formatted = new Date(date).toLocaleDateString("en-US", { //Its convert the date in the format of year month, day//
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const distance = Math.round(Number(distanceKm)) + "Km" //which is used to round our distance 

    const backgroundImg = RecommentImages[idxele]
    //console.log(backgroundImg)




    return (


        <div className="event-card" style={{ backgroundImage: `URL(${backgroundImg})` }}>
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