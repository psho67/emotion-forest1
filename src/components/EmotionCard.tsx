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
      console.log('공유 실패 😢', err);
    }
  };

  const handleReplySubmit = () => {
    if (reply.trim()) {
      setSubmittedReply(reply);
      setReply('');
    }
  };

  return (
    <div style={{ background: 'white', padding: '16px', borderRadius: '12px', marginTop: '24px' }}>
      <h3>{name}의 감정카드</h3>
      <p>{mood}</p>
      <p>{message}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>{date}</p>
      <button onClick={handleShare} style={{ marginTop: '8px' }}>
        공유하기
      </button>
      <div style={{ marginTop: '12px' }}>
        <input
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="따뜻한 답장을 써보세요"
          style={{
            padding: '6px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '100%',
            marginBottom: '8px',
          }}
        />
        <button
          onClick={handleReplySubmit}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          답장 보내기
        </button>
        {submittedReply && <p style={{ marginTop: '8px' }}>📩 답장: {submittedReply}</p>}
      </div>
    </div>
  );
}
