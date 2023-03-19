import { FC } from "react";

interface Props {
  details: {
    label: string;
    data: number | string | undefined;
    metric: string;
  }[];
}

const ResultDetails: FC<Props> = ({ details }) => {
  if (!details.length) return null;

  return (
    <dl className="flex flex-col gap-1">
      {details.map(
        ({ label, data, metric }) =>
          data && (
            <div className="weather-result-detail flex gap-1" key={label}>
              <dt className="after:content-[':']">{label}</dt>
              <dd>
                {data}
                {metric}
              </dd>
            </div>
          )
      )}
    </dl>
  );
};

export default ResultDetails;
