import React from "react";
import "../styles/SearchForm.css";
import getForecasts from "../requests/getForecasts";
import axios from "axios";

export default function SearchForm({ handleCitySelect }) {
  const getInput = () => {
    let input = document.getElementById("form__input").value;

    return handleCitySelect(input);
  };
  return (
    <form className="form">
      <input
        id="form__input"
        className="form__input"
        placeholder="Search a city..."
        type="search"
      ></input>
      <input
        className="form__button"
        type="button"
        value={"Submit"}
        onClick={() => getInput()}
      ></input>
    </form>
  );
}
