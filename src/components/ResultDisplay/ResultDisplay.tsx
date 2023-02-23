import ResultLayout from "../ResultLayout";
import WeatherResult from "../WeatherResult";

const ResultDisplay = () => {
  return (
    <div>
      <ResultLayout>
        <WeatherResult />
      </ResultLayout>
    </div>
  );
};

export default { ResultDisplay };
