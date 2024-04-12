import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({
    searched: false,
  });
  

  function showWeather(response) {
    console.log(response)
    setWeather({
      searched: true,
      city: response.data.city,
      time: new Date(response.data.time * 1000),
      temp: Math.round(
        response.data.temperature.current
      ),
      description:
        response.data.condition.description,
      humidity:
        response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }

  function search() {
    const apiKey = `b3b36of7f40tfb2fc5ea76728725e80c`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.searched) {
    return (
      <div className="Weather">
        <h1>Sarah's Weather App</h1>
        <div className="form-container">
      <form
        className="search-form"
        onSubmit={handleSubmit}
      >
        <div className="row city-search">
          <div className="col-9 city">
            <input
              type="search"
              placeholder="Search for a City"
              autoComplete="off"
              autoFocus
              className="form-control change-city"
              onChange={updateCity}
            />
          </div>
          <div className="col-3 submit">
            <input
              type="submit"
              className="form-control search"
              value="🔍"
            />
          </div>
        </div>
      </form>
        </div>
     <WeatherInfo weather={weather}/>
        </div>
    );
  } else {
    search();
    return (<div className="Loading">
      <h1>Sarah's Weather App</h1>
      <p className="text-center">Loading...</p></div>)}}
