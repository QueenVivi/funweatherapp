import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultDetails from "@/applications/HomePage/components/Result/ResultDetails";

describe("ResultDetails", () => {
  it("doesn't render when there are no details", () => {
    const { container } = render(<ResultDetails details={[]} />);

    expect(container.childElementCount).toEqual(0);
  });

  it("renders an array of data", () => {
    const { container } = render(
      <ResultDetails
        details={[
          {
            label: "Wind",
            data: 3,
            metric: "km/h",
          },
          {
            label: "Humidity",
            data: 20,
            metric: "%",
          },
          {
            label: "Precipitation",
            data: 29,
            metric: "mm",
          },
        ]}
      />
    );

    expect(container.querySelectorAll(".weather-result-detail").length).toBe(3);
  });

  it("doesn't render weather detail where the data is undefined", () => {
    const { container } = render(
      <ResultDetails
        details={[
          {
            label: "Wind",
            data: undefined,
            metric: "km/h",
          },
          {
            label: "Humidity",
            data: undefined,
            metric: "%",
          },
          {
            label: "Precipitation",
            data: undefined,
            metric: "mm",
          },
        ]}
      />
    );

    expect(container.querySelectorAll(".weather-result-detail").length).toBe(0);
  });
});
