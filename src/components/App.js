import "../styles/App.css";
import data from "../data/forecast.json";
import LocationDetails from "./LocationDetails";

const App = ({ location }) => {
  const { city, country } = location;
  return (
    <div>
      <div>
        <LocationDetails city={city} country={country} />
      </div>
    </div>
  );
};

export default App;
