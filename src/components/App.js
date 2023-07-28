import "../styles/App.css";
import "../styles/index.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ location, forecasts }) => {
  return (
    <div className="forecasts">
      <div>
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummaries forecasts={forecasts} />
      </div>
    </div>
  );
};

export default App;
