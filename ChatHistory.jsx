import React from "react";

const ChatHistory = ({ messages }) => {
  return (
    <div className="chat-history">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;