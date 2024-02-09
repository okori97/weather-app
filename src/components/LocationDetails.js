import React from "react";

export default function LocationDetails(props) {
	const { city, country, isError } = props;

	//Returns nothing if there is an error
	if (isError) {
		return <>{isError}</>;
	}

	return (
		<>
			<h1 className="center">{`${city}, ${country}`}</h1>
		</>
	);
}
