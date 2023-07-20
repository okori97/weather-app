import "../styles/App.css";
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
