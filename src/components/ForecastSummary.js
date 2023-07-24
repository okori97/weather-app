import React from "react";
import forecast from "../data/forecast.json";

const { forecasts } = forecast;

export default function ForecastSummary() {
  const { temperature } = forecasts[0];
  const { icon } = forecasts[0];
  const { description } = forecasts[0];

  // gets date
  const dateObj = new Date(forecasts[0].date * 1000);
  const dayNum = dateObj.getDate();
  const month = dateObj.toLocaleDateString("en-UK", { month: "short" });
  const day = dateObj.toLocaleDateString("en-UK", { weekday: "short" });
  const suffix = (number) => {
    if (number > 3 && number < 30) return "th";

    switch (number) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        break;
    }
  };

  const date = `${day} ${dayNum}${suffix(dayNum)} ${month}`;

  console.log(date);
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__temparature">{`${temperature.max}°C`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}
