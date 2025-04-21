import React from "react";
import PostList from "../../components/blog/PostList";
import SideMenu from "../../components/blog/SideMenu";
import { useState } from "react";

const Blogs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mxw pt-20">
      <h1 className="mb-8 text-2xl">Car Blogs</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
