import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";


export default function WeatherInfo(props) {
    return  (<div className="WeatherInfo">
    <hr />
    <h1>{props.weather.city} Weather</h1>
    <h2>Currently</h2>
    <h3>
      <FormattedDate date={props.weather.time} />
    </h3>
    <h4 className="text-capitalize">
      {props.weather.description}
    </h4>

    <div className="row align-items-center">
      <div className="col-6 current-temp">
        <div className="d-flex">
            <div className="col weather-icon"><WeatherIcon code={props.weather.icon} /></div>
            <div className="col temp">{props.weather.temp}</div>
            <div className=" col temp-units">  <a href="/" className="active-unit">
            C
          </a>{" "}
          |<a href="/"> F</a></div>
          </div>
    



    
 
      </div>
      <div className="col-6 p-3">
        <ul>
          <li id="humidity">
            Humidity: {props.weather.humidity}%
          </li>

          <li id="wind">
            Wind: {props.weather.wind} km/h
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