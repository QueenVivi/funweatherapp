import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import { Theme } from "@/lib/theme";
import WeatherData from "@/interfaces/WeatherData";
import Header from "./WeatherResultHeader";
import Temp from "./WeatherResultTemp";

interface Props {
  data: WeatherData | undefined;
  theme?: Theme;
}

const IMAGE_SIZE = 370;

const WeatherResult: FC<Props> = ({ data, theme = Theme.Fallback }) => {
  const locationName = data?.location?.name;
  const dateString = data?.current.last_updated || Date();
  const date = new Date(dateString);

  return (
    <article
      className={cn("rounded-2xl", theme !== Theme.Fallback && "bg-panel")}
    >
      <div
        className={cn(
          ["p-6", "flex", "flex-col"],
          theme !== Theme.Fallback
            ? [
                ["justify-center", `min-h-[${IMAGE_SIZE}px]`],
                "md:flex-row",
                "max-md:relative",
              ]
            : "items-center"
        )}
      >
        {data && (
          <div className="grow">
            <Header theme={theme} locationName={locationName} date={date} />
            <Temp
              temp_c={data?.current?.temp_c}
              temp_f={data?.current?.temp_f}
            />
            <ul>
              <li>{data.current.wind_kph}km/h</li>
              <li>{data.current.humidity}%</li>
              <li>{data.current.precip_mm}mm</li>
            </ul>
          </div>
        )}
        <Image
          className={cn(
            theme !== Theme.Fallback && [
              "max-md:absolute",
              "max-md:bottom-0",
              "max-md:right-0",
              "max-md:opacity-30",
            ]
          )}
          src={`images/${theme}.svg`}
          alt="Illustration showing four seasons"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      </div>
    </article>
  );
};

export default WeatherResult;
