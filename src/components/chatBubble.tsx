import React from 'react';
import './chatBubble.css';

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
}

function chatBubble({ message, isUser = false }: ChatBubbleProps) {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'other'}`}>
      <div className={`chat-bubble${isUser ? ' Chat-bubble_user' : ''}`}>
        {message}
      </div>
    </div>
  );
}

export default chatBubble;
