import { useState } from "react";
import axios from "axios";
import { HiMagnifyingGlass } from "react-icons/hi2";

const WeatherSearch = ({ sendData }: { sendData: Function }) => {
  const [city, setCity] = useState("");

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .get("/api/weather", {
        params: { q: city },
      })
      .then((res) => sendData(res.data));
  };

  const cityHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  return (
    <div className="relative">
      <form onSubmit={submitHandler}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <HiMagnifyingGlass className="text-gray-500" />
          </div>
          <input
            onChange={cityHandler}
            type="text"
            placeholder="e.g. Sydney"
            className="border-solid border-2 rounded-2xl bg-white  border-teal-500 mt-4 py-2 px-3 block w-full leading-5 pl-10"
          />
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
