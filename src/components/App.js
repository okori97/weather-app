import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

const App = ({ location }, { forecasts }) => {
  const { city, country } = location;
  return (
    <div>
      <div>
        <LocationDetails city={city} country={country} />
        <ForecastSummary forecast={forecasts} />
      </div>
    </div>
  );
};

export default App;
