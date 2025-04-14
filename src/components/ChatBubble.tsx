'use client';
import React from 'react';
import './ChatBubble.css'; // CSS 스타일 파일 연결

type ChatBubbleProps = {
  text: string;
  isUser: boolean;
};

export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'other'}`}>
      <div className={`chat-bubble ${isUser ? 'user' : 'other'}`}>
        {text}
      </div>
    </div>
  );
}
