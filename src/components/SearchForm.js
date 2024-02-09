import React from "react";
import "../styles/SearchForm.css";

export default function SearchForm({
	onSubmit,
	setSearchText,
	searchText,
	isWarm,
}) {
	const handleChange = (event) => {
		let input = event.target.value;
		setSearchText(input);
	};
	return (
		<form className="form">
			<input
				id="form__input"
				className="form__input"
				placeholder="Search a city..."
				type="search"
				onChange={handleChange}
			></input>
			<input
				className={"form__button " + (isWarm ? "warm " : "cold")}
				type="button"
				value={"Submit"}
				onClick={() => onSubmit()}
			></input>
		</form>
	);
}
