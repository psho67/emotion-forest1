import React, { useState } from 'react';

// 감정 카드에 들어갈 데이터 타입 정의
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
    const shareText = `${name}의 감정카드\n${mood}\n${message}\n${date}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: '감정카드 공유',
          text: shareText,
        });
      } catch (err) {
        alert('공유에 실패했어요.');
      }
    } else {
      alert('현재 브라우저는 공유 기능을 지원하지 않아요.');
    }
  };

  const handleReplySubmit = () => {
    if (reply.trim()) {
      setSubmittedReply(reply);
      setReply('');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: '16px',
        borderRadius: '12px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0' }}>{name}의 감정카드 🌱</h3>
      <p style={{ margin: '4px 0' }}>오늘 기분: <strong>{mood}</strong></p>
      <p style={{ margin: '4px 0' }}>{message}</p>
      <p style={{ margin: '4px 0', fontSize: '12px', color: '#555' }}>{date}</p>

      <button
        onClick={handleShare}
        style={{
          padding: '6px 12px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        공유하기
      </button>

      <div style={{ marginTop: '12px' }}>
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="답장을 입력해주세요"
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
          <p style={{ marginTop: '8px', color: '#333' }}>💌 답장: {submittedReply}</p>
        )}
      </div>
    </div>
  );
}

