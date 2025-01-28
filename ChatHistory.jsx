import React from "react";

const ChatHistory = ({ messages }) => {
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id} style={{ marginBottom: "10px" }}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;