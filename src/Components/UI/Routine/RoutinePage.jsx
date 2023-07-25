import React from 'react'
import "./RoutinePage.css"
export default function RoutinePage({ day }) {
    return (
        <div>
            {console.log(day)}
            <div className="day">{day}</div>
            {/*   <div className="heading">{heading}</div>
            <div className="workout_list">{list}</div> */}
        </div>
    )
}
