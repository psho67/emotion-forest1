'use client';
import React from 'react';

type ChatBubbleProps = {
  text: string;
  isUser: boolean;
};

export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: '8px',
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? '#dcf8c6' : '#ffffff',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          maxWidth: '70%',
          fontSize: '14px',
        }}
      >
        {text}
      </div>
    </div>
  );
}
