import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbFidgetSpinner } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Header from "../../components/common/Header";
import { FiImage } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function WriteBlog() {
  const navigate = useNavigate();
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
        toast.success("Blog posted successfully!", {
          autoClose: 600,
          onClose: () => navigate("/blogs"),
        });

        // Reset form
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
    <div className=" bg-white dark:bg-[#1a1a1a] text-black dark:text-white rounded-xl  space-y-6">
      <Header title="Admin Dashboard" text="Welcome to SwiftRent " />
      <h1 className="text-3xl font-bold text-[#f5b754]">
        Write a New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 text-xl font-semibold rounded-lg bg-gray-100 dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
        />

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <label htmlFor="category" className="text-sm font-medium">
            Choose a Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-3 rounded-lg bg-white dark:bg-[#2a2a2a] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
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
          className="w-full p-4 h-28 bg-gray-100 dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#f5b754]"
        />

        <div className="flex flex-col items-start">
          <div className="">
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

            <label
              htmlFor="file"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-dashed 
                border-[#f5b754] rounded-lg cursor-pointer hover:bg-[#f5b754]/10 transition"
            >
              <FiImage className="text-2xl text-[#f5b754]" />
              <span className="font-medium text-sm text-gray-800 dark:text-white">
                {image ? image.name : "Click here to upload a cover image"}
              </span>
            </label>
          </div>

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
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Selected: <span className="font-semibold">{image.name}</span>
            </p>
          )}
        </div>

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="bg-white dark:bg-white/90 text-black rounded-lg"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="h-10 w-40 bg-[#f5b754] hover:bg-[#f5b754]/90 text-white hover:text-black py-2 px-6 rounded-full font-medium cursor-pointer transition-all flex items-center justify-center"
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
