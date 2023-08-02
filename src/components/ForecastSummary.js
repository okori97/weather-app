import React from "react";

export default function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;

  // Converts unix into day and month
  let newDate = new Date(date);
  const monthNum = newDate.getDate();
  const monthString = newDate.toLocaleString("en-US", { month: "short" });
  const day = newDate.toLocaleString("en-US", { weekday: "short" });

  // grabs date and adds the proper suffix
  const dateFormat = (month) => {
    if (month > 3 && month < 21) return `${month}th`;
    switch (month) {
      case 1:
        return `${month}st`;
      case 2:
        return `${month}nd`;
      case 3:
        return `${month}rd`;

      default:
        return `${month}th`;
    }
  };

  let convertedDate = `${day} ${dateFormat(monthNum)} ${monthString}`;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{convertedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temperature">{`${temperature.max}°C`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}
