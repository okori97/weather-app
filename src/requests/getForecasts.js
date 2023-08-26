import axios from "axios";

export default function getForecasts(
  setLocation,
  setForecasts,
  setSelectedDate,
  place
) {
  let endpoint;

  place
    ? (endpoint = `https://cmd-shift-weather-app.onrender.com/forecast?city=${place}`)
    : (endpoint =
        "https://cmd-shift-weather-app.onrender.com/forecast?city=Cambridge");

  axios
    .get(endpoint)
    .then((response) => {
      setLocation(response.data.location);
      setForecasts(response.data.forecasts);
      setSelectedDate(response.data.forecasts[0].date);
    })
    .catch(Error);
}
