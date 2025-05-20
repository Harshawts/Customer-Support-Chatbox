import React from 'react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  const time = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] ${isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'} rounded-lg px-4 py-2`}>
        <p className="text-sm">{message.content}</p>
        <span className={`text-xs ${isBot ? 'text-gray-500' : 'text-blue-100'} block mt-1`}>
          {time}
        </span>
      </div>
    </div>
  );
}

export default MessageBubble;