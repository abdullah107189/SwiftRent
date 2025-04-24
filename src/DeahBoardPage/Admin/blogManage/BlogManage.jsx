import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import Spinner from "../../../components/Spinner";

const BlogManager = () => {
  const axiosPublic = useAxiosPublic();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosPublic.get("/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [axiosPublic]);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This blog post will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "small-popup",
      },
      willOpen: () => {
        document.querySelector(".swal2-popup").style.width = "300px";
        document.querySelector(".swal2-popup").style.height = "300px";
        document.querySelector(".swal2-popup").style.fontSize = "12px";
      },
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosPublic.delete(`/blogs/${id}`);
        if (res.data.success) {
          setBlogs((prev) => prev.filter((blog) => blog._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "The blog post has been removed successfully.",
            icon: "success",
            customClass: {
              popup: "small-popup",
            },
            willOpen: () => {
              document.querySelector(".swal2-popup").style.width = "300px";
              document.querySelector(".swal2-popup").style.height = "300px";
              document.querySelector(".swal2-popup").style.fontSize = "12px";
            },
          });
        }
      } catch (error) {
        console.error("Failed to delete blog", error);
        Swal.fire({
          title: "Error!",
          text: "There was a problem deleting the blog post.",
          icon: "error",
          customClass: {
            popup: "text-sm max-w-xs",
          },
        });
      }
    }
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Blogs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-[#1e1e1e] text-sm border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-[#333] text-left">
              <th className="px-4 py-2 border-r">Title</th>
              <th className="px-4 py-2 border-r">Category</th>
              <th className="px-4 py-2 border-r">Date</th>
              <th className="px-4 py-2 border-r">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog._id}
                className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a2a2a]"
              >
                <td className="px-4 py-2 border-r">{blog.title}</td>
                <td className="px-4 py-2 border-r">{blog.category}</td>
                <td className="px-4 py-2 border-r">
                  {new Date(blog.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 flex items-center text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManager;
