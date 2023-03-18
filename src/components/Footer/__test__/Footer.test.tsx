import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders current year", () => {
    const { getByTestId } = render(<Footer />);
    const node = getByTestId("currentYear");

    expect(node.innerHTML).toBe("" + new Date().getFullYear());
  });
});
