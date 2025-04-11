import React from 'react';

type EmotionCardProps = {
  name: string;
  mood: string;
  message: string;
  date: string;
};

export default function EmotionCard({ name, mood, message, date }: EmotionCardProps) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#fffef7',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '20px',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{name}의 감정카드</h2>
      <div style={{ fontSize: '32px', marginBottom: '12px' }}>{mood}</div>
      <p style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '16px' }}>
        "{message}"
      </p>
      <div style={{ fontSize: '12px', color: '#888' }}>{date}</div>
    </div>
  );
}
