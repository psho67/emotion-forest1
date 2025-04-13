'use client';
import  { useState } from 'react';

type EmotionCardProps = {
  name: string;
  mood: string;
  message: string;
  date: string;
};

export default function EmotionCard({
  name,
  mood,
  message,
  date,
}: EmotionCardProps) {
  const [reply, setReply] = useState('');
  const [submittedReply, setSubmittedReply] = useState('');

  const handleShare = async () => {
    const shareText = `${name}의 감정카드\n\n${mood}\n\n${message}\n\n${date}`;
    try {
      await navigator.share({ title: '감정카드', text: shareText });
    } catch (err) {
      console.log('공유 실패:', err);
    }
  };

  const handleReplySubmit = () => {
    if (reply.trim() !== '') {
      setSubmittedReply(reply);
      setReply('');
    }
  };

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '16px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ marginBottom: '4px' }}>{name}의 감정카드</h3>
      <p style={{ marginBottom: '4px' }}>{mood}</p>
      <p style={{ marginBottom: '8px' }}>{message}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>{date}</p>

      <input
        type="text"
        placeholder="따뜻한 답장을 적어주세요"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        style={{
          marginTop: '12px',
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
          backgroundColor: '#2196f3',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '13px',
        }}
      >
        답장 보내기
      </button>

      {submittedReply && (
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          <strong>내 답장:</strong> {submittedReply}
        </div>
      )}

      <button
        onClick={handleShare}
        style={{
          marginTop: '12px',
          padding: '6px 12px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '13px',
          cursor: 'pointer',
        }}
      >
        공유하기
      </button>
    </div>
  );
}
