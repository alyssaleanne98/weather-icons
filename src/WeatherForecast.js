import React from 'react'


const WeatherForecast = ({ conditions, time, img }) => {
    return (
        <div className="weather-icons app">
            <img src={img} alt="weather" />
            <h3><span>Conditions:</span> {conditions}</h3>
            <h4><span>Time:</span> {time}</h4>
        </div>
    );
}

export default WeatherForecast 
