import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import RecentBlogs from "../../components/blog/RecentBlogs";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useSelector((state) => state.auth);

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchBlog = async () => {
      try {
        const res = await axiosPublic.get(`/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Blog not found:", err);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await axiosPublic.get(`/comments/${id}`);
        setComments(res.data);
      } catch (err) {
        console.error("Failed to load comments:", err);
      }
    };

    fetchBlog();
    fetchComments();
  }, [id, axiosPublic]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    if (!user || !user.displayName || !user.email) {
      console.error("User is not logged in or missing necessary information.");
      return;
    }

    const newComment = {
      blogId: id,
      name: user.displayName,
      email: user.email,
      text: commentText,
      date: new Date().toISOString(),
    };

    try {
      const res = await axiosPublic.post("/comments", newComment);

      // toast success
      toast.success("Comment posted successfully!");

      setComments((prev) => [...prev, res.data]);

      setCommentText("");
    } catch (err) {
      console.error("Failed to post comment:", err);
      toast.error("Failed to post comment.");
    }
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();

    if (!replyText.trim()) return;

    if (!user || !user.displayName || !user.email) {
      console.error("User is not logged in or missing necessary information.");
      return;
    }

    const newReply = {
      blogId: id,
      commentId: selectedCommentId,
      name: user.displayName,
      email: user.email,
      text: replyText,
      date: new Date().toISOString(),
    };

    try {
      const res = await axiosPublic.post("/replies", newReply);

      // toast success
      toast.success("Reply posted successfully!");

      // Add reply to the respective comment
      setComments((prev) =>
        prev.map((comment) =>
          comment._id === selectedCommentId
            ? { ...comment, replies: [...(comment.replies || []), res.data] }
            : comment
        )
      );

      // Clear reply input and reset selected comment ID
      setReplyText("");
      setSelectedCommentId(null);
    } catch (err) {
      console.error("Failed to post reply:", err);
      toast.error("Failed to post reply.");
    }
  };

  if (!blog) {
    return (
      <div className="text-center text-yellow-400 py-10">
        Loading blog details...
      </div>
    );
  }

  return (
    <div className="mxw pt-20 min-h-screen">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-96 object-cover rounded"
          />
          <div className="p-4 space-y-4">
            <p className="text-sm text-gray-400">{blog.category}</p>
            <h2 className="text-3xl font-bold text-[#f5b754]">{blog.title}</h2>
            <p className="text-xs text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </p>
            <p className="text-gray-300">
              {blog.content.replace(/<[^>]+>/g, "")}
            </p>
          </div>

          {/* Comment Section */}
          <div className="mt-10 p-4 bg-[#1e1e1e] rounded-lg">
            <h3 className="text-xl font-semibold text-[#f5b754] mb-4">
              Comments ({comments.length})
            </h3>

            {/* Comment Form */}
            {user ? (
              <form onSubmit={handleCommentSubmit} className="mb-6 space-y-3">
                <textarea
                  className="w-full p-3 rounded-md bg-[#333] text-white focus:outline-none"
                  rows="3"
                  placeholder="Write your comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#f5b754] text-black px-5 py-2 rounded-full hover:bg-white transition cursor-pointer"
                >
                  Post Comment
                </button>
              </form>
            ) : (
              <p className="text-sm text-gray-400 mb-6">
                Please log in to post a comment.
              </p>
            )}

            {comments.length === 0 ? (
              <p className="text-gray-400">No comments yet.</p>
            ) : (
              <ul className="space-y-6">
                {[...comments].reverse().map((c, idx) => {
                  if (!c || !c.name || !c.text || !c.date) return null;

                  return (
                    <li
                      key={idx}
                      className="bg-[#2b2b2b] p-5 rounded-xl shadow-md border border-[#3a3a3a]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="">
                          <img
                            src={
                              user?.photoURL ||
                              "https://i.ibb.co.com/ZzZWppmV/blank-profile-picture-973460-1280.webp"
                            }
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-300 mb-1">
                            <span className="font-semibold text-white">
                              {c.name}
                            </span>{" "}
                            <span className="text-xs text-gray-500">
                              (
                              {new Date(c.date).toLocaleString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                              )
                            </span>
                          </p>
                          <p className="text-gray-300 mb-2">{c.text}</p>

                          {c.replies?.length > 0 && (
                            <div className="ml-4 space-y-3 border-l-2 border-[#444] pl-4 mt-3">
                              {c.replies.map((reply, replyIdx) => (
                                <div
                                  key={replyIdx}
                                  className="bg-[#3c3c3c] p-3 rounded-md"
                                >
                                  <p className="text-sm text-gray-200 mb-1">
                                    <span className="font-semibold text-white">
                                      {reply.name}
                                    </span>{" "}
                                    <span className="text-xs text-gray-400">
                                      (
                                      {new Date(reply.date).toLocaleString(
                                        "en-US",
                                        {
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                          hour: "2-digit",
                                          minute: "2-digit",
                                        }
                                      )}
                                      )
                                    </span>
                                  </p>
                                  <p className="text-gray-300">{reply.text}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {user && selectedCommentId === c._id ? (
                            <form
                              onSubmit={handleReplySubmit}
                              className="mt-4 space-y-2"
                            >
                              <textarea
                                className="w-full p-3 rounded-lg bg-[#333] text-white focus:outline-none"
                                rows="2"
                                placeholder="Write your reply..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                              ></textarea>
                              <button
                                type="submit"
                                className="bg-[#f5b754] text-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
                              >
                                Post Reply
                              </button>
                            </form>
                          ) : (
                            user && (
                              <button
                                onClick={() => setSelectedCommentId(c._id)}
                                className="text-sm text-[#f5b754] mt-3 hover:underline cursor-pointer"
                              >
                                Reply
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="md:w-[280px] shrink-0">
          <RecentBlogs />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
