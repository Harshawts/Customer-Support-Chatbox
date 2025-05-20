import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center space-x-3">
      <MessageCircle className="w-6 h-6" />
      <div>
        <h2 className="font-semibold">Customer Support</h2>
        <p className="text-sm text-blue-100">Online • Usually responds in minutes</p>
      </div>
    </div>
  );
}

export default ChatHeader;