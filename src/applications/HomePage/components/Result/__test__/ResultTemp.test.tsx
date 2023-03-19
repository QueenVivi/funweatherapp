import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultTemp from "@/applications/HomePage/components/Result/ResultTemp";

describe("ResultTemp", () => {
  it("renders temperature in Celsius by default", () => {
    const { getByText } = render(<ResultTemp temp_c={20} temp_f={68} />);
    const tempDisplay = getByText("20");
    const unitDisplay = getByText("°C");

    expect(tempDisplay).toBeInTheDocument();
    expect(unitDisplay).toBeInTheDocument();
  });

  it("does not render when either temperature is undefined", () => {
    const { container } = render(
      <ResultTemp temp_c={undefined} temp_f={undefined} />
    );

    expect(container.firstChild).toBeNull();

    const { container: containerNoC } = render(
      <ResultTemp temp_c={undefined} temp_f={1} />
    );

    expect(containerNoC.firstChild).toBeNull();

    const { container: containerNoF } = render(
      <ResultTemp temp_c={1} temp_f={undefined} />
    );

    expect(containerNoF.firstChild).toBeNull();
  });

  it("shows Fahrenheit when I click it", () => {
    const { getByText, getByTestId } = render(
      <ResultTemp temp_c={20} temp_f={68} />
    );
    const toggleButton = getByTestId("temp-toggle-button");

    fireEvent.click(toggleButton);

    const temp_f = getByText("68");
    const metric_f = getByText("°F");

    expect(temp_f).toHaveTextContent("68");
    expect(metric_f).toHaveTextContent("°F");
  });

  // it("does not render Fahrenheit temperature when temp_f is undefined", () => {
  //   const { getByText } = render(
  //     <ResultTemp temp_c={20} temp_f={68} />
  //   );
  //   const tempDisplay = getByText("20");
  //   const unitDisplay = getByText("°C");
  //   const toggleButton = getByTestId("temp-toggle-button");

  //   expect(tempDisplay).toBeInTheDocument();
  //   expect(unitDisplay).toBeInTheDocument();

  //   fireEvent.click(toggleButton);

  //   expect(tempDisplay).not.toBeInTheDocument();
  //   expect(unitDisplay).not.toBeInTheDocument();
  // });
});
