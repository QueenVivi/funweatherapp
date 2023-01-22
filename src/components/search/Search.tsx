import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative">
      <form action="">
        <div className="relative rounded-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch size={20} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="e.g. Sydney"
            className="border-solid border-2 rounded-2xl bg-white  border-teal-500 mt-4 py-2 px-4 block w-full leading-5 pl-10"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
