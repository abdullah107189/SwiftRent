import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>

      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-orange-300 cursor-pointer rounded-sm checked:bg-[#f5b754] bg-white"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-orange-300 cursor-pointer rounded-sm checked:bg-[#f5b754] bg-white"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-orange-300 cursor-pointer rounded-sm checked:bg-[#f5b754] bg-white"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-orange-300 cursor-pointer rounded-sm checked:bg-[#f5b754] bg-white"
          />
          Oldest
        </label>
      </div>
      <h1 className="at-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/blog/car-rental-tips" className="underline">
          Car Rental Tips
        </Link>
        <Link to="/blog/travel-roadtrips" className="underline">
          Travel & Road Trips
        </Link>
        <Link to="/blog/electric-vehicles" className="underline">
          Electric & Hybrid Cars
        </Link>
        <Link to="/blog/customer-stories" className="underline">
          Customer Stories
        </Link>
        <Link to="/blog/company-news" className="underline">
          Company News
        </Link>
        <Link to="/blog/maintenance-guides" className="underline">
          Car Maintenance Guides
        </Link>
        <Link to="/blog/awards" className="underline">
          Awards & Recognition
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
