import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="welcome">
      <h1>Welcome to UltimateAI</h1>
      <p>Your AI companion for coding, chatting, and more!</p>
      <div className="buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;