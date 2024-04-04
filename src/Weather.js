import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({
    searched: false,
  });
  
  let form = (
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
  );

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      searched: true,
      name: response.data.name,
      time: new Date(response.data.time * 1000),
      temp: Math.round(
        response.data.temperature.current
      ),
      description:
        response.data.condition.description,
      humidity:
        response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `b3b36of7f40tfb2fc5ea76728725e80c`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.searched) {
    return (
      <div className="Weather">
        <h1>Sarah's Weather App</h1>
        {form}
        <hr />
        <h1>{city} Weather</h1>
        <h2>Currently</h2>
        <h3>
          <FormattedDate date={weather.time} />
        </h3>
        <h4 className="text-capitalize">
          {weather.description}
        </h4>

        <div className="row">
          <div className="col-6 current-temp">
            <img
              src={weather.icon}
              alt={weather.description}
            />
            <span className="temp">
              {weather.temp}
            </span>
            <span className="temp-units">
              <a href="/" className="active-unit">
                C
              </a>{" "}
              |<a href="/"> F</a>
            </span>
          </div>
          <div className="col-6 p-3">
            <ul>
              <li id="humidity">
                Humidity: {weather.humidity}%
              </li>

              <li id="wind">
                Wind: {weather.wind} km/h
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <h2 className="text-center">
          5-Day Forecast
        </h2>
        <div className="weather-forecast">
          Forecast
        </div>
      </div>
    );
  } else {
    return (<div className="Weather">
      <h1>Sarah's Weather App</h1>{form}</div>)
  }
}
