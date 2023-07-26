import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "stubDescription",
    icon: "stubIcon",
    temperature: {
      max: 11,
      min: 4,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct value for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(getByText("1111111")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("stubDescription")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByText("stubIcon")).toHaveClass("forecast-summary__icon");
    expect(getByText("11°C")).toHaveClass("forecast-summary__temperature");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
  });
});
