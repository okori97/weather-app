import React from "react";

export default function LocationDetails(props) {
  const { city, country, isError } = props;
  console.log(isError);

  return (
    <>
      <h1>{`${city}, ${country}`}</h1>
      {isError && <>{isError}</>}
    </>
  );
}
