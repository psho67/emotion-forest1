
'use client';
import React from 'react';
import './ChatBubble.css'; // 스타일 파일 추가

type ChatBubbleProps = {
  text: string;
  isUser: boolean;
};

export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
  return (
    <div className={`chat-bubble-container ${isUser ? 'user' : 'bot'}`}>
      <div className="chat-bubble">
        {text}
      </div>
    </div>
  );
}
