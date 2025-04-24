import React, { useState, useEffect } from "react";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaSearch } from "react-icons/fa";

const SideMenu = ({ setSortOrder, setSelectedCategory, setSearchTerm }) => {
  const [categories, setCategories] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/blogs")
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.map((blog) => blog.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [axiosPublic]);

  return (
    <div className="h-max sticky top-18 border border-[#2a2a2a] dark:border-[#444] pl-4 pr-14 py-6 rounded-lg">
      <div className="flex items-center border rounded-xl p-2 bg-white shadow-md">
        <input
          type="text"
          placeholder="Search blog..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-black text-sm outline-none"
        />
        <FaSearch className="text-gray-400 mr-2" />
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>

      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            onChange={() => setSortOrder("newest")}
            className="appearance-none w-4 h-4 border-[1.5px] border-orange-300 cursor-pointer rounded-sm checked:bg-[#f5b754] bg-white"
          />
          Newest
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            onChange={() => setSortOrder("oldest")}
            className="appearance-none w-4 h-4 border-[1.5px] border-orange-300 cursor-pointer rounded-sm checked:bg-[#f5b754] bg-white"
          />
          Oldest
        </label>
      </div>

      <h1 className="at-8 mb-4 mt-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className="text-left text-black dark:text-white underline cursor-pointer hover:text-[#f5b754]"
            >
              {category
                .replace(/-/g, " ")
                .replace(/^./, (char) => char.toUpperCase())}
            </button>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
