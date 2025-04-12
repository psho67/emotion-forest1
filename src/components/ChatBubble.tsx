import React from 'react';

interface ChatBubbleProps {
  text: string;
  from: 'me' | 'you';
}

export default function ChatBubble({ text, from }: ChatBubbleProps) {
  const isMe = from === 'me';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isMe ? 'flex-end' : 'flex-start',
        margin: '8px 0',
      }}
    >
      <div
        style={{
          maxWidth: '60%',
          padding: '10px 14px',
          borderRadius: '20px',
          backgroundColor: isMe ? '#DCF8C6' : '#FFF',
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
