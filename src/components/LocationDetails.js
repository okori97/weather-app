export default function LocationDetails(props) {
  const city = props.forecasts.location.city;
  const country = props.forecasts.location.country;
  return (
    <>
      {console.log(city)}
      <h1 className="city-name">{city}</h1>
      <h1 className="country-name">{country}</h1>
    </>
  );
}
