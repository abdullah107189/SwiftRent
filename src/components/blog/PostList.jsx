import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const PostList = ({ sortOrder, selectedCategory, searchTerm }) => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let url = `/blogs?sort=${sortOrder}`;
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }
        if (searchTerm) {
          url += `&search=${searchTerm}`;
        }
        const res = await axiosPublic.get(url);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosPublic, sortOrder, selectedCategory, searchTerm]);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold py-10 text-yellow-400">
        Loading blogs...
      </div>
    );
  }

  if (blogs.length === 0) {
    return <p className="text-center text-gray-400">No blogs available.</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200 transform hover:scale-95"
        >
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
          ) : (
            <div className="w-full h-36 bg-gray-300 dark:bg-gray-500 flex items-center justify-center text-gray-700 dark:text-white text-lg">
              No Image Available
            </div>
          )}
          <div className="p-4 space-y-3">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {blog.category}
            </p>
            <h3 className="text-lg font-semibold text-[#f5b754]">
              {blog.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 line-clamp-3 text-sm">
              {blog.desc}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </p>
            <button
              className="mt-3 cursor-pointer bg-[#f5b754] text-black py-1 px-4 rounded-full dark:hover:bg-white hover:text-black transition duration-300"
              onClick={() => navigate(`/blogs/${blog._id}`)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
