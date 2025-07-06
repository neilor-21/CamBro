import React, { useState, useRef, useEffect } from 'react';
import './AIBot.css';

function AIBot() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am Campbro. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/askBot', { // Calling our secure function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });
      const data = await response.json();
      const botMessage = { role: 'bot', text: data.reply || "Sorry, I couldn't get a response." };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { role: 'bot', text: 'Oops! Something went wrong.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        {isLoading && <div className="message bot"><span className="loading-dots"><span>.</span><span>.</span><span>.</span></span></div>}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about library hours, events..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  );
}

export default AIBot;