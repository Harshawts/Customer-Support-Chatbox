import React, { useState, useCallback } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { Message, ChatState } from '../types/chat';
import { generateResponse, simulateTyping } from '../utils/chatbot';

const ChatWidget: React.FC = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isTyping: false,
  });

  const addMessage = (content: string, sender: 'user' | 'bot', quickReplies?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: Date.now(),
      quickReplies,
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  };

  const handleSendMessage = useCallback((content: string) => {
    addMessage(content, 'user');
    setChatState(prev => ({ ...prev, isTyping: true }));

    simulateTyping(() => {
      const response = generateResponse(content);
      addMessage(response.content, 'bot', response.quickReplies);
      setChatState(prev => ({ ...prev, isTyping: false }));
    });
  }, []);

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <div className="flex flex-col h-[600px] w-[400px] bg-white rounded-lg shadow-xl">
      <ChatHeader />
      <MessageList
        messages={chatState.messages}
        isTyping={chatState.isTyping}
        onQuickReply={handleQuickReply}
      />
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default ChatWidget;