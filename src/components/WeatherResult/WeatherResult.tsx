import WeatherData from "@/interfaces/WeatherData";

const WeatherResult = ({ data }: { data: WeatherData | null }) => {
  return (
    data && (
      <article>
        <h2>{data.current.condition.text}</h2>
        <p>
          in {data.location.name} • {data.current.last_updated}{" "}
        </p>
        <h2>{data.current.temp_c}°C</h2>
        <h2>{data.current.temp_f}°F</h2>
        <ul>
          <li>{data.current.wind_kph}km/h</li>
          <li>{data.current.humidity}%</li>
          <li>{data.current.precip_mm}mm</li>
        </ul>
      </article>
    )
  );
};

export default WeatherResult;
