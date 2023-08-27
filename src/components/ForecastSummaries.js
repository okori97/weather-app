import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

export default function ForecastSummaries({
  forecasts,
  onForecastSelect,
  isError,
}) {
  //Returns nothing if there is an error
  if (isError) {
    return <div></div>;
  }
  return (
    <div className="forecastSummaries--list">
      {forecasts.map((forecast) => (
        <ForecastSummary
          onSelect={onForecastSelect}
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}
