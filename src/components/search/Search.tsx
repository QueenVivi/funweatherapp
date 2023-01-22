import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const apiKey = `6e3c80dd3f1ec415fbe9f7176142a50c`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
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

export default Search;
