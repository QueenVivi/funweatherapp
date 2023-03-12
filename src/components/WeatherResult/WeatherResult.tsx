import { FC, useState } from "react";
import Image from "next/image";
import { Theme } from "@/lib/theme";
import quicksand from "@/lib/quicksand";
import WeatherData from "@/interfaces/WeatherData";

interface Props {
  data: WeatherData | undefined;
  theme?: Theme;
}

const WeatherResult: FC<Props> = ({ data, theme = Theme.Fallback }) => {
  const [isCelsiusShown, setIsCelsiusShown] = useState(true);

  const dateString = data?.current.last_updated || Date();
  const date = new Date(dateString);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const hour = date.getHours();
  const toggleUnitHandler = () => {
    setIsCelsiusShown(!isCelsiusShown);
  };

  return (
    <article>
      {data && (
        <div>
          <div className="mb-2">
            <h2 className={`${quicksand.className} text-2xl font-bold`}>
              {data.current.condition.text}
            </h2>
            <p className="text-sm font-normal">
              in {data.location.name} • {weekday} {hour}
              {hour >= 12 ? "pm" : "am"}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <h2>
              {isCelsiusShown
                ? `${data.current.temp_c}°C`
                : `${data.current.temp_f}°F`}
            </h2>
            <Image
              src="images/toggle.svg"
              alt="toggle button to switch between celcius and farenheit"
              width="16"
              height="16"
              onClick={toggleUnitHandler}
            />
            {/* <h2>{data.current.temp_f}°F</h2> */}
          </div>
          <ul>
            <li>{data.current.wind_kph}km/h</li>
            <li>{data.current.humidity}%</li>
            <li>{data.current.precip_mm}mm</li>
          </ul>
        </div>
      )}
      <Image
        src={`images/${theme}.svg`}
        alt="Illustration showing four seasons"
        width="327"
        height="327"
        className="mx-auto"
      />
    </article>
  );
};

export default WeatherResult;
