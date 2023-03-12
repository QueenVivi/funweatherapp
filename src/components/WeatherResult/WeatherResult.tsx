import { FC, useState } from "react";
import Image from "next/image";
import { Theme } from "@/lib/theme";
import WeatherData from "@/interfaces/WeatherData";
import Header from "./WeatherResultHeader";
import Temp from "./WeatherResultTemp";
interface Props {
  data: WeatherData | undefined;
  theme?: Theme;
}

const WeatherResult: FC<Props> = ({ data, theme = Theme.Fallback }) => {
  const [isCelsiusShown, setIsCelsiusShown] = useState(true);

  const locationName = data?.location?.name;
  const dateString = data?.current.last_updated || Date();
  const date = new Date(dateString);

  return (
    <article>
      {data && (
        <div>
          <Header theme={theme} locationName={locationName} date={date} />
          <Temp temp_c={data.current.temp_c} temp_f={data.current.temp_f} />

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
