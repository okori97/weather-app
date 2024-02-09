import "../styles/App.css";
import "../styles/index.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import NewsBlock from "./NewsBlock";
import SearchForm from "./SearchForm";
import React, { useState, useEffect } from "react";
import getForecasts from "../requests/getForecasts";

const App = () => {
	const [location, setLocation] = useState({});
	const [forecasts, setForecasts] = useState([]);
	const [selectedDate, setSelectedDate] = useState(0);
	const [searchText, setSearchText] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isWarm, setIsWarm] = useState("");

	useEffect(() => {
		getForecasts(
			setErrorMessage,
			setLocation,
			setForecasts,
			setSelectedDate
		);
	}, []);

	useEffect(() => {
		const checkIsWarm = (forecast) => {
			let body = document.body;
			if (forecast) {
				if (forecast.temperature.max > 10) {
					setIsWarm(true);
					body.classList.remove("cold");
					body.classList.add("warm");
				} else {
					setIsWarm(false);
					body.classList.remove("warm");
					body.classList.add("cold");
				}
			}
		};
		checkIsWarm(selectedForecast);

		// eslint-disable-next-line
	}, [selectedDate]);

	const selectedForecast = forecasts.find(
		(forecast) => forecast.date === selectedDate
	);

	const handleForecastSelect = (date) => {
		setSelectedDate(date);
	};

	const handleCitySelect = () => {
		getForecasts(
			setErrorMessage,
			setLocation,
			setForecasts,
			setSelectedDate,
			searchText
		);
	};
	return (
		<div className="weather-app">
			<div className={"modal " + (isWarm ? "warm " : "cold ")}>
				<div className="search">
					<LocationDetails
						city={location.city}
						country={location.country}
						isError={errorMessage}
					/>
					<SearchForm
						onSubmit={handleCitySelect}
						searchText={searchText}
						setSearchText={setSearchText}
						isWarm={isWarm}
					/>
				</div>
				<section>
					<div className="container">
						<ForecastSummaries
							isWarm={isWarm}
							selectedDate={selectedDate}
							forecasts={forecasts}
							isError={errorMessage}
							onForecastSelect={handleForecastSelect}
						/>
					</div>
					{selectedForecast && (
						<div className="container space-between no-padding">
							<ForecastDetails
								forecast={selectedForecast}
								isError={errorMessage}
							/>
							<NewsBlock isWarm={isWarm} />
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default App;
