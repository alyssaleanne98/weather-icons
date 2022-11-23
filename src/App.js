import React from "react";
import weatherArray from "./weatherData";
import "./styles.css";
import WeatherForecast from "./WeatherForecast";


const weather = weatherArray.map((weather, index) => {
  return <WeatherForecast key={index} {...weather} />
})


export default function App() {
  return (
    <div className="App">
      <h1>Alyssa's Weather-Icons App</h1>
      <section className="weather">
        {weather}
      </section>
    </div>
  );
}
