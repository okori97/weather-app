import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  test("renders react app properly", async () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
