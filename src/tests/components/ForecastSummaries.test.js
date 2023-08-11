import ForecastSummaries from "../../components/ForecastSummaries";
import React from "react";
import { render } from "@testing-library/react";

describe("forecastSummaries", () => {
  const validProp = [
    {
      date: 111,
      description: "stubDescription",
      temperature: {
        max: 10,
        min: 10,
      },
      icon: "stubIcon",
    },
    {
      date: 222,
      description: "stubDescription",
      temperature: {
        max: 10,
        min: 10,
      },
      icon: "stubIcon",
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of list items", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProp} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
