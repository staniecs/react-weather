import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo() {
    return  (<div className="WeatherInfo">
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
  </div>)}