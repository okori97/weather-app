import React from "react";
import GetDate from "../helpers/getDate";
import addSuffix from "../helpers/addSuffix";
export default function ForecastDetails({ forecasts }) {
  const { date, temperature, humidity, wind } = forecasts[0];
  console.log(forecasts[0]);

  // Converts unix into date and adds suffix to month
  const { day, monthNum, monthString } = GetDate(date);
  let convertedDate = `${day} ${addSuffix(monthNum)} ${monthString}`;

  return (
    <div>
      <h1>{convertedDate}</h1>
      <div>
        <span className="bold">Max Temperature: </span>
        {temperature.max}
      </div>
      <div>
        <span className="bold">Min Temperature: </span>
        {temperature.min}
      </div>
      <div>
        <span className="bold">Humidity: </span>
        {humidity}
      </div>
      <div>
        <span className="bold">Wind: </span>
        {wind.speed}
      </div>
    </div>
  );
}