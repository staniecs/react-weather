import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
const codeMapping = {
    "clear-sky-day": {icon: "CLEAR_DAY", color: "#b458d8"},
    "clear-sky-night": {icon: "CLEAR_NIGHT", color: "#69337f"},
    "few-clouds-day":  {icon: "PARTLY_CLOUDY_DAY", color: "#b458d8"},
    "few-clouds-night":  {icon: "PARTLY_CLOUDY_NIGHT", color: "#69337f"},
    "scattered-clouds-day":  {icon: "PARTLY_CLOUDY_DAY", color: "#b458d8"},
    "scattered-clouds-night":  {icon: "PARTLY_CLOUDY_NIGHT", color: "#69337f"},
    "broken-clouds-day":  {icon: "CLOUDY", color: "#b458d8"},
    "broken-clouds-night":  {icon: "CLOUDY", color: "#69337f"},
    "shower-rain-day":  {icon: "RAIN", color: "#b458d8"},
    "shower-rain-night":  {icon: "RAIN", color: "#69337f"},
    "rain-day":  {icon: "RAIN", color: "#b458d8"},
    "rain-night":  {icon: "RAIN", color: "#69337f"},
    "thunderstorm-day":  {icon: "RAIN", color: "#b458d8"},
    "thunderstorm-night":  {icon: "RAIN", color: "#69337f"},
    "snow-day":  {icon: "SNOW", color: "#b458d8"},
    "snow-night":  {icon: "SNOW", color: "#69337f"},
    "mist-day":  {icon: "FOG", color: "#b458d8"},
    "mist-night":  {icon: "FOG", color: "#69337f"}
}




 return(  <ReactAnimatedWeather
        icon={codeMapping[props.code].icon}
        color= {codeMapping[props.code].color}
        size= {52}
        animate={true}
      />)


   
}