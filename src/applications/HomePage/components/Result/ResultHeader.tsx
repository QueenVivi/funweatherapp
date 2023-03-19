import { FC } from "react";
import quicksand from "@/lib/quicksand";
import { Theme } from "@/lib/theme";

interface Props {
  theme: Theme;
  locationName: string | undefined;
  date: Date;
}

export const heading = (theme: Theme): string => {
  switch (theme) {
    case Theme.Sunny:
      return "Yay, it's sunny!";
    case Theme.Rainy:
      return "It's rainy";
    case Theme.Cloudy:
      return "It's cloudy";
    case Theme.Snowy:
      return "Brrrr… it's snowy";
    default:
      return "Today's weather";
  }
};

const ResultHeader: FC<Props> = ({ theme, locationName, date }) => {
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const hour = date.getHours();

  return (
    <header className="mb-4 md:mb-6">
      <h2
        className={`${quicksand.className} text-title font-bold mb-1 md:mb-2 text-3xl md:text-4xl`}
      >
        {heading(theme)}
      </h2>
      <p className="text-title text-sm">
        {locationName && `In ${locationName} •`} {weekday} {hour}
        {hour >= 12 ? "pm" : "am"}
      </p>
    </header>
  );
};

export default ResultHeader;
