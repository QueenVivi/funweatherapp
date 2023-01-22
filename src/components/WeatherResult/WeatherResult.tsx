const WeatherResult = ({ data }) => {
  return (
    data && (
      <article>
        <h2>{data.weather[0].main}</h2>
      </article>
    )
  );
};

export default WeatherResult;
