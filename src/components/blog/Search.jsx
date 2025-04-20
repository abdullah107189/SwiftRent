import React from "react";

const Search = () => {
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Search blog..."
        className="w-32 p-2 rounded-xl shadow-md bg-white text-black text-sm outline-none"
      />
    </div>
  );
};

export default Search;
