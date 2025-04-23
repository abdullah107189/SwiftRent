import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate, useLocation } from "react-router-dom";

const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const currentBlogId = location.pathname.startsWith("/blogs/")
    ? location.pathname.split("/blogs/")[1]
    : null;

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const res = await axiosPublic.get("/blogs?limit=6");

        const filtered = res.data.filter((blog) => blog._id !== currentBlogId);
        setRecentBlogs(filtered.slice(0, 6));
      } catch (err) {
        console.error("Error fetching recent blogs:", err);
      }
    };

    fetchRecentBlogs();
  }, [axiosPublic, currentBlogId]);

  return (
    <div className="sticky top-18 p-4 bg-[#1b1b1b] rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold text-[#f5b754] mb-6">Recent Blogs</h3>
      <div className="grid grid-cols-1 gap-4">
        {recentBlogs.map((blog) => (
          <div
            key={blog._id}
            onClick={() => navigate(`/blogs/${blog._id}`)}
            className="cursor-pointer bg-[#2a2a2a] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-24 h-24 object-cover mr-4"
            />
            <div className="p-4 flex-1">
              <h4 className="text-xs font-bold text-[#f5b754] mb-1">
                {blog.title}
              </h4>
              <p className="text-xs text-gray-500">
                {new Date(blog.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
