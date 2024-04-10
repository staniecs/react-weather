import React from "react";

export default function FormattedDate(props) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
 console.log(props.date)
  const day = daysOfWeek[props.date.getDay()];
  const hour = [props.date.getHours()];
  const minute = [props.date.getMinutes()];

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <p>
      {day} {hour}:{minute}
    </p>
  );
}
