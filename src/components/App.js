import "../styles/App.css";
import "../styles/index.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import NewsBlock from "./NewsBlock";
import SearchForm from "./SearchForm";
import React, { useState, useEffect } from "react";
import getForecasts from "../requests/getForecasts";
import axios from "axios";

const App = () => {
	const [location, setLocation] = useState({});
	const [forecasts, setForecasts] = useState([]);
	const [selectedDate, setSelectedDate] = useState(0);
	const [searchText, setSearchText] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	console.log(searchText);

	var url =
		"https://newsapi.org/v2/everything?" +
		"q=UK AND rain And forecast&" +
		"apiKey=c1b72961cfd84e3d8369b9cabf3c6adf";

	useEffect(() => {
		getForecasts(
			setErrorMessage,
			setLocation,
			setForecasts,
			setSelectedDate
		);
	}, []);

	axios.get(url).then((response) => {
		console.log(response.data.articles[0]);
	});

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
			<div className="modal">
				<div>
					<LocationDetails
						city={location.city}
						country={location.country}
						isError={errorMessage}
					/>
					<SearchForm
						onSubmit={handleCitySelect}
						searchText={searchText}
						setSearchText={setSearchText}
					/>
				</div>
				<section>
					<div className="container">
						<ForecastSummaries
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
							<NewsBlock />
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default App;
