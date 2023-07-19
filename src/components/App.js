import "../styles/App.css";
import data from "../data/forecast.json";
import LocationDetails from "./LocationDetails";

const App = () => {
  return (
    <div>
      <div>
        <LocationDetails forecasts={data} />
        {console.log(data)}
      </div>
    </div>
  );
};

export default App;
