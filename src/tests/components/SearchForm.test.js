import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form", () => {
  const validProps = {
    setLocation: () => {},
    setForecasts: () => {},
    setSelectedDate: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        setLocation={validProps.setLocation}
        setForecasts={validProps.setForecasts}
        setSelectedDate={validProps.setSelectedDate}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  
});
