import React from 'react';
import './chatBubble.css';

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
}

function ChatBubble({ message, isUser = false }: ChatBubbleProps) {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'other'}`}>
      <div className={`Chat-bubble${isUser ? ' chat-bubble_user' : ''}`}>
        {message}
      </div>
    </div>
  );
}

export default ChatBubble;
