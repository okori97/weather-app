import ForecastSummaries from "../../components/ForecastSummaries";
import React from "react";
import { render } from "@testing-library/react";

describe("forecastSummaries", () => {
  const validProp = {
    forecasts: [
      {
        date: 111,
        description: "stubDescription",
        icon: "800",
        temperature: {
          max: 10,
          min: 10,
        },
      },
      {
        date: 222,
        description: "stubDescription",
        icon: "800",
        temperature: {
          max: 10,
          min: 10,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProp.forecasts}
        onForecastSelect={validProp.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of list items", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProp.forecasts}
        onForecastSelect={validProp.onForecastSelect}
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
