import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: "111",
    temperature: {
      max: 12,
      min: 4,
    },
    icon: 800,
    wind: {
      speed: 60,
    },
    humidity: 40,
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct value for props", () => {
    const { getByText } = render(<ForecastDetails forecasts={validProps} />);

    expect(getByText("Thu 1st Jan")).toBeInstanceOf(HTMLHeadingElement);
    expect(getByText("12°c")).toHaveClass("forecast-details--item");
    expect(getByText("4°c")).toHaveClass("forecast-details--item");
    expect(getByText("60")).toHaveClass("forecast-details--item");
    expect(getByText("40%")).toHaveClass("forecast-details--item");
  });
});
