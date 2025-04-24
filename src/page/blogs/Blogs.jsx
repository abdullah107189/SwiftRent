import React, { useState } from "react";
import PostList from "../../components/blog/PostList";
import SideMenu from "../../components/blog/SideMenu";

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="mxw ">
        <h1 className=" pt-25 text-3xl md:text-4xl font-bold text-gray-900  dark:text-white ">
          Uncover Our Most Recent{" "}
          <span className="text-[#f5b754]">Blog Posts</span>
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Dive into trending topics, expert advice, and updates designed to keep
          you ahead of the curve.
        </p>
      </div>

      <div className="mxw pt-20">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-[#f5b754] text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
        >
          {open ? "Close" : "Filter or Search"}
        </button>
        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="md:w-4/5 w-full">
            <PostList
              sortOrder={sortOrder}
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
            />
          </div>
          <div className={`${open ? "block" : "hidden"} md:block`}>
            <SideMenu
              setSortOrder={setSortOrder}
              setSelectedCategory={setSelectedCategory}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
