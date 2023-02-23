import { useState } from "react";
import Image from "next/image";
import quicksand from "@/lib/quicksand";
import toggle from "../../../public/toggle.svg";
import WeatherData from "@/interfaces/WeatherData";

const WeatherResult = ({ data }: { data: WeatherData | null }) => {
  const [isCelciusShown, setIsCelciusShown] = useState(true);

  const dateString = data.current.last_updated;
  const date = new Date(dateString);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const hour = date.getHours();
  const toggleUnitHandler = () => {
    setIsCelciusShown(!isCelciusShown);
  };
  return (
    data && (
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
            {isCelciusShown
              ? `${data.current.temp_c}°C`
              : `${data.current.temp_f}°F`}
          </h2>
          <Image
            src={toggle}
            alt="toggle button to switch between celcius and farenheit"
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
    )
  );
};

export default WeatherResult;
