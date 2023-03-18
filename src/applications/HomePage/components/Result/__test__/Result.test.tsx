import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "@/applications/HomePage/components/Result";

describe("Result", () => {
  describe("Without data", () => {
    it("renders the default theme", () => {
      const { container } = render(<Result data={undefined} />);
      const node = container.querySelector("#weatherResultData");

      expect(node).toBe(null);
    });
  });
});
