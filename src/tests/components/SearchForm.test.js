import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form", () => {
  const validProps = {
    setLocation: () => {},
    setForecasts: () => {},
    setSelectedDate: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        setLocation={validProps.setLocation}
        setForecasts={validProps.setForecasts}
        setSelectedDate={validProps.setSelectedDate}
        onSubmit={validProps.onSubmit()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("submit button displays the right text", () => {
    const { getByText } = render(<SearchForm />);
    expect(getByText("Submit")).toHaveClass("form__button");
  });
});
