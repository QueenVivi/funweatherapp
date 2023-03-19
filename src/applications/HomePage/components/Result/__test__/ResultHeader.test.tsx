import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultHeader from "@/applications/HomePage/components/Result/ResultHeader";
import { Theme } from "@/lib/theme";

describe("ResultHeader", () => {
  describe("heading returns the correct text when", () => {
    it("is sunny", () => {
      const { getByText } = render(
        <ResultHeader
          theme={Theme.Sunny}
          locationName="Beijing"
          date={new Date()}
        />
      );
      expect(getByText("Yay, it's sunny!")).toBeInTheDocument();
    });

    it("is rainy", () => {
      const { getByText } = render(
        <ResultHeader
          theme={Theme.Rainy}
          locationName="Melbourne"
          date={new Date()}
        />
      );
      expect(getByText("It's rainy")).toBeInTheDocument();
    });
    it("is cloudy", () => {
      const { getByText } = render(
        <ResultHeader
          theme={Theme.Cloudy}
          locationName="Sydney"
          date={new Date()}
        />
      );
      expect(getByText("It's cloudy")).toBeInTheDocument();
    });
    it("is snowy", () => {
      const { getByText } = render(
        <ResultHeader
          theme={Theme.Snowy}
          locationName="Geelong"
          date={new Date()}
        />
      );
      expect(getByText("Brrrr… it's snowy")).toBeInTheDocument();
    });
  });

  describe("location is not showing", () => {
    it("when location is undefined", () => {
      const { queryByText } = render(
        <ResultHeader
          theme={Theme.Sunny}
          locationName={undefined}
          date={new Date()}
        />
      );

      expect(queryByText(/In/)).toBeNull();
    });
  });
});
