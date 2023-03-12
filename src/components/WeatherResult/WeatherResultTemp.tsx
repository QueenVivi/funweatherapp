import { FC, useState } from "react";
import quicksand from "@/lib/quicksand";
import Icon from "@/components/Icon";

enum Metric {
  C = "C",
  F = "F",
}

interface Props {
  temp_c: number | undefined;
  temp_f: number | undefined;
}

const WeatherResultTemp: FC<Props> = ({ temp_c, temp_f }) => {
  const [metric, setMetric] = useState<Metric>(Metric.C);

  const isC = metric === Metric.C;

  const toggleUnitHandler = () => {
    setMetric(isC ? Metric.F : Metric.C);
  };

  if (!temp_c || !temp_f) return null;

  return (
    <div>
      <button className="flex-none" onClick={toggleUnitHandler}>
        <div className={`${quicksand.className} flex flex-row items-center`}>
          <span className="text-4xl md:text-7xl font-bold text-title">
            {isC ? temp_c : temp_f}
          </span>
          <span className="text-2xl md:text-4xl font-bold text-title">
            °{isC ? "C" : "F"}
          </span>
          <div className="ml-4">
            <Icon.Toggle />
          </div>
        </div>
      </button>
    </div>
  );
};

export default WeatherResultTemp;
