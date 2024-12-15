import React from "react";
import { useStore } from "./store/useStore";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import ChatHeader from "./components/ChatHeader";
import { APP_CONFIG } from "./config/constants";

function App() {
  const { messages, clearChat } = useStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ChatHeader onClearChat={clearChat} />

          <div
            className={`h-[${APP_CONFIG.CHAT_MAX_HEIGHT}px] overflow-y-auto p-4 bg-gray-50`}
          >
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p>{APP_CONFIG.DEFAULT_MESSAGE}</p>
              </div>
            ) : (
              messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))
            )}
          </div>

          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default App;
