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
  let day = daysOfWeek[props.date.getDay()];
  let hour = [props.date.getHours()];
  let minute = [props.date.getMinutes()];

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
