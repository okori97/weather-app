/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "stubDescription",
    icon: 800,
    temperature: {
      max: 11,
      min: 4,
    },
    onSelect: () => {},
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct value for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon.toString()}
        temperature={validProps.temperature}
      />
    );

    expect(getByText("Thu 1st Jan")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("stubDescription")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByText("11°c")).toHaveClass("forecast-summary__temperature");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
  });
});
