import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import LiveChat from "./liveChat/LiveChat";
import useUserRole from "../hooks/useUserRole";

const ChatLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useUserRole();

  if (role !== "customer") {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full shadow-lg transition-transform duration-300 border border-gray-400 bg-[#f5b754]  cursor-pointer"
        >
          <FaCommentDots size={24} />
        </button>
      </div>

      {/* Chat Panel Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] h-[600px] sBgBlack rounded-xl shadow-lg overflow-hidden  flex flex-col">
          <div className="flex justify-end p-2 border-b border-gray-600">
            <button
              onClick={() => setIsOpen(false)}
              className="dark:text-white hover:text-[#f5b754] text-xl font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <LiveChat />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatLauncher;
