import { useState } from "react";
import axios from "axios";
import Icon from "@/components/Icon";

const Search = ({ onGetData }: { onGetData: Function }) => {
  const [city, setCity] = useState("");

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .get("/api/weather", {
        params: { q: city },
      })
      .then((res) => onGetData(res.data));
  };

  const cityHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="relative">
        <label
          className="absolute inset-y-0 left-0 pl-3 flex items-center"
          htmlFor="search"
        >
          <Icon.Search />
        </label>
        <input
          onChange={cityHandler}
          id="search"
          type="text"
          placeholder="e.g. Sydney"
          className="peer border-solid border-2 border-primary rounded-2xl bg-white py-2 px-3 block w-full leading-5 pl-10"
        />
        <button
          className="invisible peer-focus:visible bg-primary text-white absolute right-1 top-1 px-4 py-1 rounded-xl"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
