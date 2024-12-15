import React from 'react';
import { Message } from '../types';
import ProductCard from './ProductCard';
import { formatTimestamp } from '../utils/formatters';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div
      className={`flex ${
        isBot ? 'justify-start' : 'justify-end'
      } mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-4 ${
          isBot
            ? 'bg-white text-gray-800'
            : 'bg-blue-600 text-white'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        {message.products && (
          <div className="mt-4 grid grid-cols-1 gap-4">
            {message.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <span className="text-xs opacity-75 mt-2 block">
          {formatTimestamp(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;