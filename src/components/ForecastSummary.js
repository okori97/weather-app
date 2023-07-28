import React from "react";

export default function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temperature">{`${temperature.max}°C`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}
