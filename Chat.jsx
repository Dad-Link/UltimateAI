import React, { useState } from "react";
import ChatHistory from "./ChatHistory";
import FileUpload from "./FileUpload";
import ImageScan from "./ImageScan";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const aiResponse = { text: "Processing...", sender: "ai" };

    setMessages((prev) => [...prev, userMessage, aiResponse]);

    // Simulate API response
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg, idx) => (idx === prev.length - 1 ? { ...msg, text: "Hello from AI!" } : msg))
      );
    }, 1000);

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHistory messages={messages} />
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <FileUpload />
      <ImageScan />
    </div>
  );
};

export default Chat;