import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import QuickReplies from './QuickReplies';
import { Message, QuickReply } from '../types/chat';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
  onQuickReply: (reply: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping, onQuickReply }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const lastMessage = messages[messages.length - 1];
  const quickReplies: QuickReply[] = lastMessage?.quickReplies?.map(reply => ({
    text: reply,
    onClick: () => onQuickReply(reply)
  })) || [];

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isTyping && (
        <div className="flex items-center space-x-2 text-gray-500 mb-4">
          <div className="bg-gray-100 rounded-lg px-4 py-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}
      <QuickReplies replies={quickReplies} />
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;