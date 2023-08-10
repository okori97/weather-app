import "../styles/App.css";
import "../styles/index.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import React, { useState } from "react";

const App = ({ location, forecasts }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <div>
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        <ForecastDetails forecast={selectedForecast} />
      </div>
    </div>
  );
};

export default App;
