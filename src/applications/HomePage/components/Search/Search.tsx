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
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Icon.Search />
        </div>
        <input
          onChange={cityHandler}
          type="text"
          placeholder="e.g. Sydney"
          className="border-solid border-2 rounded-2xl bg-white  border-border py-2 px-3 block w-full leading-5 pl-10"
        />
      </div>
    </form>
  );
};

export default Search;
