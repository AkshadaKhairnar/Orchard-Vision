import React, { useState } from 'react';
import './ChatBot.css';
import axios from 'axios';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      // Add the user message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" }
      ]);
      setInput(""); // Clear the input field

      try {
        // Send the user message to the backend
        const response = await axios.post('http://localhost:5000/api/message', {
          message: input
        });

        // Add the bot's response to the chat after receiving it
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.response, sender: "bot" },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, there was an error.", sender: "bot" },
        ]);
      }
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Toggle Button */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Your Personal Chatbot</h3>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
