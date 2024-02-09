import React from "react";
import iconData from "../data/iconData.json";
import "../styles/ForecastSummary.css";
import { GetDate } from "../helpers/dateUtils";
import addSuffix from "../helpers/addSuffix";

export default function ForecastSummary(props) {
	const { date, description, temperature, icon, onSelect } = props;
	const iconCode = icon.toString().slice(0, 1) + "00";

	// Converts unix into date and adds suffix to month
	const { day, monthNum, monthString } = GetDate(date);
	let convertedDate = `${day} ${addSuffix(monthNum)} ${monthString}`;

	return (
		<div className="forecast-summary" data-testid="forecast-summary">
			<div className="forecast-summary__date">{convertedDate}</div>
			<img
				className="forecast-summary__icon"
				data-testid="forecast-icon"
				src={iconData[iconCode]}
				alt="weather icon"
			></img>
			<div className="forecast-summary__temperature">{`${temperature.max}°c`}</div>
			<div className="forecast-summary__description">{description}</div>
			<button
				type="button"
				className="forecast-summary__button"
				onClick={() => onSelect(date)}
			>
				More details
			</button>
		</div>
	);
}
