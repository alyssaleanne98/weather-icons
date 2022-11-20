import React from 'react'


const WeatherForecast = ({conditions, time, img }) => {
    return (
        <div className= "weather">
            <img src={img} alt="weather" />
            <h5 className="weather-conditions">{conditions}</h5>
            <p className="weather-time">{time}</p>
        </div>
    );
}

export default WeatherForecast