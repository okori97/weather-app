import "../styles/App.css";
import "../styles/index.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import React, { useState, useEffect } from "react";
import getForecasts from "../requests/getForecasts";

const App = () => {
  const [location, setLocation] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  useEffect(() => {
    getForecasts(setLocation, setForecasts, setSelectedDate);
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySelect = () => {
    getForecasts(setLocation, setForecasts, setSelectedDate, searchText);
  };
  return (
    <div className="weather-app">
      <div>
        <LocationDetails city={location.city} country={location.country} />
        <SearchForm
          onSubmit={handleCitySelect}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    </div>
  );
};

export default App;
