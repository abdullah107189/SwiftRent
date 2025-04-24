import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbFidgetSpinner } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function WriteBlog() {
  const axiosSecure = useAxiosSecure();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !desc || !content || !image) {
      toast.error("All fields including image are required.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append("image", image);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgbbData = await imgbbRes.json();
      const imageUrl = imgbbData.data.url;

      const blogData = {
        title,
        category,
        desc,
        content,
        coverImage: imageUrl,
        date: new Date().toISOString(),
      };

      // Post
      const res = await axiosSecure.post("/blogs", blogData);

      if (res.data.insertedId) {
        toast.success("Blog posted successfully!");
        setTitle("");
        setCategory("");
        setDesc("");
        setContent("");
        setImage(null);
        fileInputRef.current.value = "";
      } else {
        toast.error("Failed to post blog.");
      }
    } catch (error) {
      // console.error("Error posting blog:", error);
      toast.error("Something went wrong while posting your blog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-[#1a1a1a] text-white rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-[#f5b754]">
        Write a New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 text-xl font-semibold rounded-lg bg-[#2a2a2a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
        />

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <label htmlFor="category" className="text-sm font-medium">
            Choose a Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
          >
            <option value="">Select...</option>
            <option value="car-rental-tips">Car Rental Tips</option>
            <option value="travel-roadtrips">Travel & Road Trips</option>
            <option value="electric-vehicles">Electric & Hybrid Cars</option>
            <option value="customer-stories">Customer Stories</option>
            <option value="company-news">Company News</option>
            <option value="maintenance-guides">Car Maintenance Guides</option>
            <option value="awards">Awards & Recognition</option>
          </select>
        </div>

        <textarea
          placeholder="Write a short description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-4 h-28 bg-[#2a2a2a] border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
        />

        <div className="flex flex-col items-start">
          <label
            htmlFor="file"
            className="bg-[#f5b754] hover:bg-white hover:text-black py-2 px-6 rounded-full font-medium cursor-pointer transition-all"
          >
            Choose a cover image
          </label>

          <input
            type="file"
            accept="image/*"
            id="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setImage(file);
            }}
            className="hidden"
            ref={fileInputRef}
          />

          {image && (
            <p className="mt-2 text-sm text-gray-300">
              Selected: <span className="font-semibold">{image.name}</span>
            </p>
          )}
        </div>

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="bg-white text-black rounded-lg"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-10 w-40 bg-[#f5b754] hover:bg-white hover:text-black py-2 px-6 rounded-full font-medium cursor-pointer transition-all flex items-center justify-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Publish Post"
            )}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default WriteBlog;
