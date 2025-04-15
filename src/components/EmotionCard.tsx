'use client';
import { useState } from 'react';

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
  const [error, setError] = useState('');

  const handleShare = async () => {
    if (!navigator.share) {
      alert('Web Share API가 지원되지 않는 브라우저입니다.');
      return;
    }
    const shareText = `${name}의 감정카드\n\n${mood}\n\n${message}\n\n${date}`;
    try {
      await navigator.share({ title: '감정카드', text: shareText });
    } catch (err) {
      console.error('공유 실패:', err);
    }
  };

  const handleReplySubmit = () => {
    if (reply.trim() === '') {
      setError('답장이 비어 있습니다. 내용을 입력해주세요.');
      return;
    }
    if (reply.length > 200) {
      setError('답장이 너무 깁니다. 200자 이내로 입력해주세요.');
      return;
    }
    setError('');
    setSubmittedReply(reply);
    setReply('');
  };

  const styles = {
    cardContainer: {
      marginTop: '20px',
      padding: '16px',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.9)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    title: { marginBottom: '4px' },
    text: { marginBottom: '8px' },
    date: { fontSize: '12px', color: '#666' },
    input: {
      marginTop: '12px',
      padding: '6px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      width: '100%',
      fontSize: '13px',
      marginBottom: '8px',
    },
    button: {
      padding: '6px 12px',
      borderRadius: '6px',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '13px',
    },
    primaryButton: { backgroundColor: '#2196f3' },
    secondaryButton: { backgroundColor: '#4CAF50', marginTop: '12px' },
    errorText: { color: 'red', fontSize: '13px', marginTop: '8px' },
    replyText: { marginTop: '10px', fontSize: '14px' },
  };

  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.title}>{name}의 감정카드</h3>
      <p style={styles.text}>{mood}</p>
      <p style={styles.text}>{message}</p>
      <p style={styles.date}>{date}</p>

      <input
        type="text"
        placeholder="따뜻한 답장을 적어주세요"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        style={styles.input}
        aria-label="답장 입력"
      />

      <button
        onClick={handleReplySubmit}
        style={{ ...styles.button, ...styles.primaryButton }}
      >
        답장 보내기
      </button>

      {error && <div style={styles.errorText}>{error}</div>}

      {submittedReply && (
        <div style={styles.replyText}>
          <strong>내 답장:</strong> {submittedReply}
        </div>
      )}

      <button
        onClick={handleShare}
        style={{ ...styles.button, ...styles.secondaryButton }}
      >
        공유하기
      </button>
    </div>
  );
}
