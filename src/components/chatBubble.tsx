import React from 'react';
import './chatBubble.css';

interface ChatBubbleProps {
  message: string;
  isUser?: boolean; // ✅ 선택적, undefined 가능
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isUser = false, // ✅ 기본값
}) => {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'other'}`}>
      <div className={`chat-bubble ${isUser ? 'chat-bubble_user' : ''}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
