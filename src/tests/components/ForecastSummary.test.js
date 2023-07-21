import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  it("renders the correct max temperature", () => {
    const { getByText } = render(<ForecastSummary max="11" />);

    expect(getByText("11")).toBeInstanceOf(HTMLHeadingElement);
  });
});
