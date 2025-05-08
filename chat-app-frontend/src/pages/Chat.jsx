import { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Connect to backend (update URL when backend is ready)
const socket = io('http://localhost:5000', {
  reconnection: true,
  reconnectionAttempts: 5,
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('connect', () => console.log('Connected to Socket.io server'));
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('message');
      socket.off('connect');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = {
        text: message,
        sender: 'user', // Replace with actual user ID later
        timestamp: new Date(),
      };
      socket.emit('message', msg); // Send to backend
      setMessages((prev) => [...prev, msg]); // Add to local state
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Chat Room</h1>
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-500 block mt-1">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="mt-4 flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;