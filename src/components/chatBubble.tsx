import React from 'react';
import './chatBubble.css';

interface chatBubbleProps {
  message: string;
  isUser?: boolean;
}

function chatBubble({ message, isUser = false }: chatBubbleProps) {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'other'}`}>
      <div className={`chat-bubble${isUser ? ' chat-bubble_user' : ''}`}>
        {message}
      </div>
    </div>
  );
}

export default ChatBubble;
