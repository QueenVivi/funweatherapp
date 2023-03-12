import { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import { Theme } from "@/lib/theme";
import WeatherData from "@/interfaces/WeatherData";
import Header from "./ResultHeader";
import Temp from "./ResultTemp";
import Details from "./ResultDetails";

interface Props {
  data: WeatherData | undefined;
  theme?: Theme;
}

const IMAGE_SIZE = 327;

const Result: FC<Props> = ({ data, theme = Theme.Fallback }) => {
  const locationName = data?.location?.name;
  const dateString = data?.current.last_updated || Date();
  const date = new Date(dateString);

  return (
    <article
      className={cn("rounded-2xl", theme !== Theme.Fallback && "bg-panel")}
    >
      <div
        className={cn(
          ["flex", "flex-col"],
          theme !== Theme.Fallback
            ? [
                "justify-center",
                `min-h-[${IMAGE_SIZE}px]`,
                "md:flex-row",
                "max-md:relative",
              ]
            : "items-center"
        )}
      >
        {data && (
          <div className="p-6 grow z-10">
            <Header theme={theme} locationName={locationName} date={date} />
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <Temp
                temp_c={data?.current?.temp_c}
                temp_f={data?.current?.temp_f}
              />
              <Details
                details={[
                  {
                    label: "Wind",
                    data: data?.current?.wind_kph,
                    metric: "km/h",
                  },
                  {
                    label: "Humidity",
                    data: data?.current?.humidity,
                    metric: "%",
                  },
                  {
                    label: "Precipitation",
                    data: data?.current?.precip_mm,
                    metric: "mm",
                  },
                ]}
              />
            </div>
          </div>
        )}
        <div>
          <Image
            className={cn(
              theme !== Theme.Fallback && [
                "max-md:absolute",
                "max-md:bottom-0",
                "max-md:right-0",
                "max-md:opacity-30",
                "max-md:z-0",
              ]
            )}
            src={`images/${theme}.svg`}
            alt="Illustration showing four seasons"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </div>
      </div>
    </article>
  );
};

export default Result;
