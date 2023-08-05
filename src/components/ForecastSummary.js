import React from "react";
import iconData from "../data/iconData.json";

console.log(iconData);

export default function ForecastSummary(props) {
  const { date, description, temperature, icon } = props;

  const iconCode = icon.slice(0, 1) + "00";
  console.log(iconCode);
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
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{convertedDate}</div>
      <img
        className="forecast-summary__icon"
        data-testid="forecast-icon"
        src={iconData[iconCode]}
      ></img>
      <div className="forecast-summary__temperature">{`${temperature.max}°c`}</div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__link-wrap">
        <button className="forecast-summary__link" href="#" target="blank">
          More details
        </button>
      </div>
    </div>
  );
}
