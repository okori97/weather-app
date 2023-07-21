import React from "react";
import forecast from "../data/forecast.json";

const { forecasts } = forecast;

export default function ForecastSummary() {
  const { temperature } = forecasts[0];
  return (
    <div>
      <h1>{temperature.max}</h1>
    </div>
  );
}
