import React from "react";

export default function LocationDetails(props) {
  const { city, country } = props;
  return (
    <>
      <h1 className="location-name">{`${city}, ${country}`}</h1>
    </>
  );
}
