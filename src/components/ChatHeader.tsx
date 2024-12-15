import React from 'react';
import { MessageSquare, RotateCcw } from 'lucide-react';

interface ChatHeaderProps {
  onClearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClearChat }) => {
  return (
    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MessageSquare />
        <h1 className="text-xl font-semibold">E-commerce Assistant</h1>
      </div>
      <button
        onClick={onClearChat}
        className="p-2 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
      >
        <RotateCcw size={16} />
        Clear Chat
      </button>
    </div>
  );
};

export default ChatHeader;