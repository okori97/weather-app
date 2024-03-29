import React from "react";
import { GetDate } from "../helpers/dateUtils";
import addSuffix from "../helpers/addSuffix";
import "../styles/ForecastDetails.css";

export default function ForecastDetails({ forecast, isError }) {
	const { date, temperature, humidity, wind } = forecast;

	//Returns nothing if there is an error
	if (isError) {
		return <div></div>;
	}

	// Converts unix into date and adds suffix to month
	const { day, monthNum, monthString } = GetDate(date);
	let convertedDate = `${day} ${addSuffix(monthNum)} ${monthString}`;

	return (
		<div className="forecast-details">
			<h2>{convertedDate}</h2>
			<div className="forecast-details--item">
				<span className="bold">Max Temperature: </span>
				{`${temperature.max}°c`}
			</div>
			<div className="forecast-details--item">
				<span className="bold">Min Temperature: </span>
				{`${temperature.min}°c`}
			</div>
			<div className="forecast-details--item">
				<span className="bold">Humidity: </span>
				{`${humidity}%`}
			</div>
			<div className="forecast-details--item">
				<span className="bold">Wind: </span>
				{wind.speed}
			</div>
		</div>
	);
}
