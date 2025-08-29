import React, { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { GiHummingbird } from "react-icons/gi";
import { FiTrash2 } from "react-icons/fi";
import api from "../config/Api";
import toast from "react-hot-toast";
import socketAPI from "../config/WebSocket";

const Chatting = ({ friend }) => {
  const { user } = useAuth();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [ReceiverID, setReceiverID] = useState("");
  const [SenderID, setSenderID] = useState("");
  const bottom = useRef(null);

  // ✅ Send Message
  const SendNewMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const messagePack = {
        senderID: SenderID,
        receiverID: ReceiverID,
        text: newMessage,
        timestamp: new Date().toISOString(),
      };

      socketAPI.emit("SendMessage", messagePack);

      const res = await api.post(`/user/sendMessage/${ReceiverID}`, {
        messagePack,
      });

      setMessages((prev) => [...prev, res.data.data]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending Message:", error);
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  // ✅ Delete For Everyone
  const deleteMessageForEveryone = async (id) => {
    try {
      await api.delete(`/user/deleteMessage/${id}`);
      setMessages((prev) => prev.filter((m) => m._id !== id));
      toast.success("Deleted for everyone");
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message");
    }
  };

  // ✅ Delete For Me (Frontend Only)
  const deleteMessageForMe = (id) => {
    setMessages((prev) => prev.filter((m) => m._id !== id));
    toast.success("Deleted for me");
  };

  // ✅ Date formatting
  const format_date = (ISO_Date) => {
    const date = new Date(ISO_Date);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // ✅ Fetch Messages
  const fetchMessages = async () => {
    try {
      const res = await api.get(`/user/receiveMessage/${ReceiverID}`);
      setMessages(res.data.data);
    } catch (error) {
      console.error("Error fetching Chat:", error);
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  // ✅ Socket listener
  const handleReceiveMessage = (msgPacket) => {
    if (msgPacket.from === ReceiverID) {
      setMessages((prev) => [
        ...prev,
        {
          _id: Date.now(),
          senderID: msgPacket.from,
          receiverID: msgPacket.to,
          text: msgPacket.text,
          timestamp: msgPacket.timestamp,
        },
      ]);
    }
  };

  // ✅ Auto scroll bottom
  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socketAPI.on("ReceiveMessage", handleReceiveMessage);
    return () => socketAPI.off("ReceiveMessage", handleReceiveMessage);
  }, [ReceiverID]);

  useEffect(() => {
    setSenderID(user._id);
    setReceiverID(friend._id || "");
  }, [user._id, friend._id]);

  useEffect(() => {
    if (ReceiverID) {
      fetchMessages();
    }
  }, [ReceiverID]);

  return (
    <div className="w-full">
      {ReceiverID ? (
        <>
          {/* Chat Header */}
          <div className="flex gap-3 items-center mx-3 mt-5 bg-gray-900 p-2 text-white rounded h-[10vh]">
            <img
              src={friend.photo}
              alt=""
              className="w-12 h-12 rounded-full border border-green-500 "
            />
            <span className="text-lg">{friend.fullName}</span>
          </div>

          {/* Chat Body */}
          <div className="bg-gray-800 my-2 h-[75vh] mx-3 rounded p-3 overflow-y-auto">
            {messages && messages.length > 0 ? (
              messages.map((message, index) => {
                const isSender =
                  (message.senderID._id || message.senderID) === SenderID;

                return (
                  <div
                    key={index}
                    className={`flex mb-3 ${
                      isSender ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`group relative max-w-xs px-4 py-2 rounded-2xl text-sm shadow ${
                        isSender
                          ? "bg-green-500 text-white rounded-br-none"
                          : "bg-gray-300 text-black rounded-bl-none"
                      }`}
                    >
                      <span>{message.text}</span>
                      <span className="text-[10px] opacity-70 block text-right mt-1">
                        {format_date(message.timestamp)}
                      </span>

                      {/* Show delete only for sender */}
                      {isSender && (
                        <div className="absolute top-0 -left-6 hidden group-hover:flex flex-col gap-1">
                          <button
                            onClick={() => deleteMessageForMe(message._id)}
                            className="bg-gray-700 text-xs text-white px-2 py-1 rounded hover:bg-gray-600"
                          >
                            Me
                          </button>
                          <button
                            onClick={() => deleteMessageForEveryone(message._id)}
                            className="bg-red-600 text-xs text-white px-2 py-1 rounded hover:bg-red-700"
                          >
                            All
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center h-full italic text-gray-400">
                Send messages to Start Conversation
              </div>
            )}
            <div ref={bottom}></div>
          </div>

          {/* Chat Input */}
          <div className="bg-gray-900 my-2 mx-3 h-[8vh] rounded flex gap-5 items-center px-3">
            <input
              type="text"
              name="newMessage"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="bg-gray-700 text-white w-full rounded-xl p-2 outline-none"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && SendNewMessage()}
            />
            <button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3"
              onClick={SendNewMessage}
            >
              <GiHummingbird />
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] text-gray-400">
          <div>Select the Friend to Start Chatting</div>
        </div>
      )}
    </div>
  );
};

export default Chatting;
