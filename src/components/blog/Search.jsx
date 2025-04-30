import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearchTerm }) => {
  return (
    <div className="flex items-center border rounded-xl p-2 bg-white shadow-md">
      <input
        type="text"
        placeholder="Search blog..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent text-black text-sm outline-none"
      />
      <FaSearch className="text-gray-400 mr-2" />
    </div>
  );
};

export default Search;
