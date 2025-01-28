import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import ChatHistory from "./ChatHistory";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const chatRef = collection(db, `users/${user.uid}/chats`);
      const q = query(chatRef, orderBy("timestamp", "asc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });

      return () => unsubscribe();
    }
  }, [user]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      await addDoc(collection(db, `users/${user.uid}/chats`), {
        text: input,
        sender: user.email,
        timestamp: new Date(),
      });
      setInput("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Chat;