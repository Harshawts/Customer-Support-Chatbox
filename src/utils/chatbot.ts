import { Message } from '../types/chat';

const TYPING_DELAY = 1500;

const responses = {
  greeting: [
    "Hello! How can I help you today?",
    "Hi there! What can I assist you with?",
    "Welcome! How may I help you?",
  ],
  pricing: [
    "Our pricing plans start at $10/month for basic features. Would you like to know more about our different plans?",
  ],
  support: [
    "I can help you with technical support. What specific issue are you experiencing?",
  ],
  default: [
    "I'm not sure I understand. Could you please rephrase that?",
    "Could you provide more details about your question?",
  ],
};

const quickReplies = {
  greeting: ["Tell me about pricing", "I need technical support", "Contact human agent"],
  pricing: ["Show enterprise plans", "Compare features", "Talk to sales"],
  support: ["Reset password", "Account issues", "Billing problems"],
};

export const generateResponse = (message: string): { content: string; quickReplies?: string[] } => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return {
      content: responses.greeting[Math.floor(Math.random() * responses.greeting.length)],
      quickReplies: quickReplies.greeting,
    };
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return {
      content: responses.pricing[0],
      quickReplies: quickReplies.pricing,
    };
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
    return {
      content: responses.support[0],
      quickReplies: quickReplies.support,
    };
  }
  
  return {
    content: responses.default[Math.floor(Math.random() * responses.default.length)],
  };
};

export const simulateTyping = (callback: () => void) => {
  setTimeout(callback, TYPING_DELAY);
};