import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useStore } from '../store/useStore';
import { sendMessage } from '../services/chatService';

const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const addMessage = useStore((state) => state.addMessage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    addMessage({
      content: userMessage,
      sender: 'user',
    });

    try {
      const botMessage = await sendMessage(userMessage);
      addMessage(botMessage);
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage({
        content: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-200 p-4 bg-white"
    >
      <div className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          disabled={isLoading}
        >
          <Send size={16} />
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;