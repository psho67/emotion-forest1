import React from 'react';

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
}

export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        margin: '8px 0',
      }}
    >
      <div
        style={{
          maxWidth: '60%',
          padding: '10px 14px',
          borderRadius: '20px',
          backgroundColor: isUser ? '#DCF8C6' : '#fff',
          border: '1px solid #ccc',
          color: '#333',
          fontSize: '14px',
          wordBreak: 'break-word',
        }}
      >
        {text}
      </div>
    </div>
  );
}
