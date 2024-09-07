import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

describe("Landing Page", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    require("../index");
  });

  test("renders the load weather app button", () => {
    const button = document.querySelector("#loadWeatherApp");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Load Weather App");
  });

  test("clicking the button creates a container for the weather app", () => {
    const button = document.querySelector(
      "#loadWeatherApp"
    ) as HTMLButtonElement;
    fireEvent.click(button);
    const container = document.querySelector("#weatherAppContainer");
    expect(container).toBeInTheDocument();
  });
});
