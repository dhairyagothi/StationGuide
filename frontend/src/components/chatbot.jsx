import React, { useState } from "react";
import "./chatbot.css"; // Import the CSS file
import chatbotsvg from "../assets/svg/chatbot.svg"; // Import the chatbot icon

const Chatbot = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatOutput, setChatOutput] = useState([]);
  const [welcomeMessageDisplayed, setWelcomeMessageDisplayed] = useState(false);

  const responses = {
    "can you help me navigate to platform 5":
      "You can easily navigate to Platform 5 using Navigation in the menu. Anything else I can help you with?",
    "yes where can i find luggage storage facilities":
      "You can check the availability of cloakrooms in booking and book the same.",
    hello: "Hi there! How can I help you today?",
    // Add more responses as needed
  };

  const handleChatIconClick = () => {
    setChatboxOpen(!chatboxOpen);

    if (!welcomeMessageDisplayed && !chatboxOpen) {
      setChatOutput([
        ...chatOutput,
        "Hi I am Saarthi, your Platform Guide. How can I help you today?",
      ]);
      setWelcomeMessageDisplayed(true);
    }
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const userMessages = chatInput.trim().split(/[?.!]+/); // Split input by sentence terminators
      let updatedChatOutput = [];

      userMessages.forEach((message) => {
        const cleanedMessage = message
          .trim()
          .toLowerCase()
          .replace(/[?,.!]/g, ""); // Clean input
        if (cleanedMessage in responses) {
          updatedChatOutput.push(responses[cleanedMessage]);
        } else {
          updatedChatOutput.push("I'm sorry, I don't have an answer for that.");
        }
      });

      setChatOutput([...chatOutput, ...updatedChatOutput]);
      setChatInput(""); // Clear input
    }
  };

  const handleCloseChat = () => {
    setChatboxOpen(false); // Close the chatbox
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot" id="chatbotIcon" onClick={handleChatIconClick}>
        <img src={chatbotsvg} alt="Chatbot Icon" />
        <br />
      </div>

      {chatboxOpen && (
        <div className="chatbox" id="chatbox">
          <div id="chatOutput" className="chat-output">
            {chatOutput.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
          <textarea
            id="chatInput"
            rows="4"
            placeholder="Type your message..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button id="sendMessage" onClick={handleSendMessage}>
            Send
          </button>
          <button className="close-button" onClick={handleCloseChat}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
