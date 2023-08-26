import axios from "axios";

export default function getForecasts(
  setErrorMessage,
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
    .catch(Error)
    .then((Error) => {
      let is404Error = new RegExp(/404/i).test(Error);
      let is500Error = new RegExp(/500/i).test(Error);

      if (!is404Error && !is500Error) {
        setErrorMessage("");
      }

      if (is404Error) {
        setErrorMessage(
          <>
            <p className="error-message">
              Sorry,<span className="error-message__span"> {place} </span> could
              not be found.
            </p>
          </>
        );
      }
      if (is500Error) {
        setErrorMessage(
          "The server is currently unable to handle your request"
        );
      }
    });
}
