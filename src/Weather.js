import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Wroclaw",
    temperature: 9,
    date: "Friday 10:00",
    description: "Partly Cloudy",
    imgUrl:
      "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 30,
  };
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row city-search">
          <div className="col-9 city">
            <input
              type="search"
              placeholder="Search for a City"
              autocomplete="off"
              autofocus="on"
              className="form-control change-city"
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
      <button>use current location</button>
      <hr />
      <h1>{weatherData.city} Weather</h1>
      <h2>Currently</h2>
      <h3>{weatherData.date}</h3>
      <h4>{weatherData.description}</h4>

      <div className="row">
        <div className="col-6 current-temp">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
          />
          <span className="temp">
            {weatherData.temperature}
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
              Humidity: {weatherData.humidity}%
            </li>

            <li id="wind">
              Wind: {weatherData.wind} km/h
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
}
