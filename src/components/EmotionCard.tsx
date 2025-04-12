import React, { useState } from 'react';

type EmotionCardProps = {
  name: string;
  mood: string;
  message: string;
  date: string;
};

export default function EmotionCard({ name, mood, message, date }: EmotionCardProps) {
  const [reply, setReply] = useState('');
  const [submittedReply, setSubmittedReply] = useState('');

  const handleShare = async () => {
    const shareText = `${name}의 감정카드\n\n${mood}\n\n${message}\n\n${date}`;
    try {
      await navigator.share({ title: '감정카드', text: shareText });
    } catch (err) {
      console.log('공유 실패', err);
    }
  };

  const handleReplySubmit = () => {
    setSubmittedReply(reply);
    setReply('');
  };

  return (
    <div
      style={{
        background: 'white',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '16px',
      }}
    >
      <h3>{name}의 감정카드</h3>
      <p>{mood}</p>
      <p>{message}</p>
      <p style={{ fontSize: '12px', color: '#888' }}>{date}</p>

      <div style={{ marginTop: '12px' }}>
        <input
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="답장을 적어주세요"
          style={{
            padding: '6px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '13px',
            marginBottom: '8px',
          }}
        />
        <button
          onClick={handleReplySubmit}
          style={{
            padding: '6px 12px',
            borderRadius: '6px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '13px',
          }}
        >
          답장 보내기
        </button>
        {submittedReply && (
          <p style={{ marginTop: '8px', fontStyle: 'italic' }}>답장: {submittedReply}</p>
        )}
      </div>

      <button
        onClick={handleShare}
        style={{
          marginTop: '12px',
          padding: '6px 10px',
          borderRadius: '8px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '13px',
        }}
      >
        공유하기
      </button>
    </div>
  );
}
