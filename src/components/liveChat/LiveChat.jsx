import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import useUserRole from "../../hooks/useUserRole";
import axios from "axios";
import { MdOutlineSms } from "react-icons/md";

const socket = io(import.meta.env.VITE_BASEURL);

const LiveChat = () => {
  const { user } = useSelector((state) => state.auth);
  const [role] = useUserRole();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [fallbackUserInfo, setFallbackUserInfo] = useState(null);
  const chatBoxRef = useRef(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!user?.displayName && user?.uid) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_BASEURL}/all-user`
          );
          const matchedUser = res.data.find(
            (u) => u?.userInfo?.uid === user.uid
          );
          if (matchedUser) {
            setFallbackUserInfo(matchedUser.userInfo);
          }
        } catch (err) {
          // console.error("Failed to fetch user info:", err);
        }
      }
    };

    fetchUserInfo();
  }, [user]);

  useEffect(() => {
    if (user?.uid && role) {
      socket.emit("join", { uid: user.uid, role });
    }

    socket.on("initialMessages", (data) => {
      setMessages(data);
    });

    socket.on("chatMessage", (data) => {
      if (
        role === "Admin" ||
        data.senderUid === user?.uid ||
        data.receiverUid === user?.uid
      ) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => {
      socket.off("chatMessage");
      socket.off("initialMessages");
    };
  }, [user, role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    const msgData = {
      message,
      role,
      senderUid: user?.uid,
      senderName: user?.displayName || fallbackUserInfo?.name || "Unknown",
      senderPhoto:
        user?.photoURL ||
        fallbackUserInfo?.photo ||
        "https://i.ibb.co.com/ZzZWppmV/blank-profile-picture-973460-1280.webp",
      time: new Date(),
    };

    if (role === "Admin" && selectedCustomer) {
      msgData.receiverUid = selectedCustomer.uid;
    }

    socket.emit("chatMessage", msgData);

    if (role === "Admin") {
      setMessages((prev) => [...prev, msgData]);
    }

    setMessage("");
  };

  const customersMap = {};

  messages.forEach((msg) => {
    if (msg.role === "customer") {
      const uid = msg.senderUid;
      if (
        !customersMap[uid] ||
        new Date(msg.time) > new Date(customersMap[uid].time)
      ) {
        customersMap[uid] = {
          uid,
          name: msg.senderName,
          photo:
            msg.senderPhoto ||
            "https://i.ibb.co.com/ZzZWppmV/blank-profile-picture-973460-1280.webp",
          time: msg.time,
        };
      }
    }
  });

  const customers = Object.values(customersMap).sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  useEffect(() => {
    if (role === "Admin" && customers.length > 0 && !selectedCustomer) {
      setSelectedCustomer(customers[0]);
    }
  }, [role, customers, selectedCustomer]);

  const visibleMessages = messages.filter((msg) =>
    role === "Admin"
      ? selectedCustomer
        ? msg.senderUid === selectedCustomer.uid ||
          msg.receiverUid === selectedCustomer.uid
        : false
      : msg.senderUid === user?.uid || msg.receiverUid === user?.uid
  );

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="mxw rounded h-full flex overflow-hidden relative">
      {/* Sidebar for Admin - Large devices */}
      {role === "Admin" && (
        <div className="hidden sm:block w-1/4 bg-[#1f1f1f]  border-r border-gray-700 overflow-y-auto custom-scrollbar">
          <h3 className="text-lg font-semibold p-4 orange border-b border-gray-200 mb-4">
            Chat
            <span className="ml-2 bgOrange text-white text-xs font-semibold px-2 py-1 rounded-full">
              NEW
            </span>
          </h3>
          {customers.map((c) => {
            const lastMessage = messages
              .filter(
                (msg) => msg.senderUid === c.uid || msg.receiverUid === c.uid
              )
              .slice(-1)[0];

            return (
              <div
                key={c.uid}
                className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                  selectedCustomer?.uid === c.uid
                    ? "bg-[#493e34]"
                    : "hover:bg-[#2c2c2c]"
                }`}
                onClick={() => setSelectedCustomer(c)}
              >
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-500"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-white truncate">
                    {c.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate max-w-[160px]">
                    {lastMessage?.message || "No messages yet"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sidebar Drawer for small devices */}
      {role === "Admin" && (
        <>
          <button
            onClick={() => setShowDrawer(true)}
            className="absolute top-3 right-3 z-50 sm:hidden bg-[#1f1f1f] p-2 rounded"
          >
            <MdOutlineSms size={18} color="#fff" />
          </button>

          {showDrawer && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
              onClick={() => setShowDrawer(false)}
            ></div>
          )}

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#1f1f1f] p-2 z-50 transition-transform duration-300 sm:hidden overflow-y-auto custom-scrollbar ${
              showDrawer ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h3 className="text-lg font-semibold p-4 orange border-b border-gray-200 mb-4">
              Chat
              <span className="ml-2 bgOrange text-white text-xs font-semibold px-2 py-1 rounded-full">
                NEW
              </span>
            </h3>
            {customers.map((c) => {
              const lastMessage = messages
                .filter(
                  (msg) => msg.senderUid === c.uid || msg.receiverUid === c.uid
                )
                .slice(-1)[0];

              return (
                <div
                  key={c.uid}
                  className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedCustomer?.uid === c.uid
                      ? "bg-[#493e34]"
                      : "hover:bg-[#2c2c2c]"
                  }`}
                  onClick={() => {
                    setSelectedCustomer(c);
                    setShowDrawer(false);
                  }}
                >
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-500"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white truncate">
                      {c.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate max-w-[140px]">
                      {lastMessage?.message || "No messages yet"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Chat Section */}
      <div
        className={`flex flex-col w-full h-[calc(100vh-10px)] ${
          role !== "Admin" ? "lg:w-full" : ""
        }`}
      >
        <div className="sBgBlack  py-4 border-b border-gray-700 flex items-center">
          <h2 className="text-lg font-semibold ml-18 md:ml-8">
            {role === "Admin"
              ? selectedCustomer?.name || "Select a Customer"
              : "SwiftRent Live Support"}
          </h2>
        </div>

        <div
          ref={chatBoxRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 pb-40 "
        >
          {visibleMessages.map((msg, index) => {
            const isOwn = msg.senderUid === user?.uid;
            return (
              <div
                key={index}
                className={`flex items-end gap-2 ${
                  isOwn ? "justify-end" : "justify-start"
                }`}
              >
                {!isOwn && (
                  <img
                    src={msg.senderPhoto}
                    alt={msg.senderName}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-xl max-w-[70%] text-sm ${
                    isOwn ? "bg-[#f5b754] text-black" : "bg-gray-700 text-white"
                  }`}
                >
                  <p>{msg.message}</p>
                </div>
                {isOwn && (
                  <img
                    src={
                      user?.photoURL ||
                      fallbackUserInfo?.photo ||
                      "https://i.ibb.co.com/ZzZWppmV/blank-profile-picture-973460-1280.webp"
                    }
                    alt="You"
                    className="w-8 h-8 rounded-full"
                  />
                )}
              </div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center p-3 border-t border-gray-700 bg-[#1a1a1a] sticky bottom-0 z-10"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2  rounded-full sBgBlack border border-gray-600 focus:outline-none text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2  text-black font-semibold bg-white px-3 py-2  rounded-full text-sm md:text-base transform duration-300 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
