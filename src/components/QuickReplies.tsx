import React from 'react';
import { QuickReply } from '../types/chat';

interface QuickRepliesProps {
  replies: QuickReply[];
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ replies }) => {
  if (!replies.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-2">
      {replies.map((reply, index) => (
        <button
          key={index}
          onClick={reply.onClick}
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full transition-colors"
        >
          {reply.text}
        </button>
      ))}
    </div>
  );
}

export default QuickReplies;