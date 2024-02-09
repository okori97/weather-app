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
			response.data.forecasts.pop();
			setLocation(response.data.location);
			setForecasts(response.data.forecasts);
			setSelectedDate(response.data.forecasts[0].date);
		})
		.catch(Error)
		.then((Error) => {
			//Checks for Error Code
			let is404Error = new RegExp(/404/i).test(Error);
			let is500Error = new RegExp(/500/i).test(Error);

			// If no 404 or 500 Error then set errorMessage to empty
			if (!is404Error && !is500Error) {
				setErrorMessage("");
			}

			// If Error is 404 sets appropiate error message
			if (is404Error) {
				setErrorMessage(
					<>
						<p className="error-message">
							Sorry,
							<span className="error-message__span">
								{" "}
								{place}{" "}
							</span>{" "}
							could not be found.
						</p>
					</>
				);
			}
			// If Error is 404 sets appropiate error message
			if (is500Error) {
				setErrorMessage(
					"The server is currently unable to handle your request"
				);
			}
		});
}
