import React from "react";
// import forecast from "../data/forecast.json";
// const { forecasts } = forecast;

export default function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__temparature">{`${temperature}°C`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}
