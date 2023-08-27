import React from "react";

export default function LocationDetails(props) {
  const { city, country, isError } = props;
  console.log(isError);

  //Returns nothing if there is an error
  if (isError) {
    return <>{isError}</>;
  }

  return (
    <>
      <h1>{`${city}, ${country}`}</h1>
    </>
  );
}
