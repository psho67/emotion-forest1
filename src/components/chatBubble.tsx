import React from 'react';
import './chatBubble.css';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'other'}`}>
      <div className={`chat-bubble ${isUser ? 'chat-bubble_user' : ''}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
