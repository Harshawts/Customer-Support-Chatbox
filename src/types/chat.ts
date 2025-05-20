export type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
  quickReplies?: string[];
};

export type ChatState = {
  messages: Message[];
  isTyping: boolean;
};

export type QuickReply = {
  text: string;
  onClick: () => void;
};