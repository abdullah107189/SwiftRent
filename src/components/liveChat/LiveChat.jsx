import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import useUserRole from "../../hooks/useUserRole";
import axios from "axios";
import { FaBars } from "react-icons/fa";

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
          console.error("Failed to fetch user info:", err);
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

  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

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

  const visibleMessages = messages.filter((msg) =>
    role === "Admin"
      ? selectedCustomer
        ? msg.senderUid === selectedCustomer.uid ||
          msg.receiverUid === selectedCustomer.uid
        : false
      : msg.senderUid === user?.uid || msg.receiverUid === user?.uid
  );

  return (
    <div className="mxw  text-white rounded   h-[550px] flex overflow-hidden relative">
      {/* Sidebar for Admin - Large devices */}
      {role === "Admin" && (
        <div className="hidden sm:block w-1/4 bg-[#1f1f1f] p-6 border-r border-gray-700 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4">👤 Customers</h3>
          {customers.map((c) => (
            <div
              key={c.uid}
              className={`flex items-center gap-3 p-4 rounded-lg mb-4 cursor-pointer ${
                selectedCustomer?.uid === c.uid
                  ? "bg-blue-600"
                  : "hover:bg-[#333]"
              }`}
              onClick={() => setSelectedCustomer(c)}
            >
              <img
                src={c.photo}
                alt={c.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">{c.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sidebar Drawer for small devices */}
      {role === "Admin" && (
        <>
          <button
            onClick={() => setShowDrawer(true)}
            className="absolute top-3 left-3 z-50 sm:hidden bg-[#1f1f1f] p-4 rounded"
          >
            <FaBars size={20} />
          </button>

          {showDrawer && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
              onClick={() => setShowDrawer(false)}
            ></div>
          )}

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#1f1f1f] p-6 z-50 transition-transform duration-300 sm:hidden ${
              showDrawer ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h3 className="text-lg font-bold mb-4">👤 Customers</h3>
            {customers.map((c) => (
              <div
                key={c.uid}
                className={`flex items-center gap-3 p-4 rounded-lg mb-4 cursor-pointer ${
                  selectedCustomer?.uid === c.uid
                    ? "bg-blue-600"
                    : "hover:bg-[#333]"
                }`}
                onClick={() => {
                  setSelectedCustomer(c);
                  setShowDrawer(false);
                }}
              >
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Chat Section */}
      <div
        className={`flex flex-col w-full ${
          role !== "Admin" ? "lg:w-full" : ""
        }`}
      >
        <div className="bg-black  py-4 border-b border-gray-700 flex items-center">
          <h2 className="text-lg font-semibold ml-8 md:ml-0">
            {role === "Admin"
              ? selectedCustomer?.name || "Select a Customer"
              : "SwiftRent Live Support"}
          </h2>
        </div>

        <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-6 space-y-4 ">
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
          className="flex items-center mb-1  bg-black"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2  rounded-full bg-[#2c2c2c] text-white border border-gray-600 focus:outline-none text-sm"
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
