import React from "react";

export default function LocationDetails(props) {
  const { city, country } = props;
  return (
    <>
      <h1 className="city-name">{city}</h1>
      <h1 className="country-name">{country}</h1>
    </>
  );
}
