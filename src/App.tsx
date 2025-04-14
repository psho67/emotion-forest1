'use client';
import { useState } from 'react';

type EmotionCardProps = {
  name: string;
  mood: string;
  message: string;
  date: string;
};

export function EmotionCard({
  name,
  mood,
  message,
  date,
}: EmotionCardProps) {
  const [reply, setReply] = useState('');
  const [submittedReply, setSubmittedReply] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleShare = async () => {
    const shareText = `${name}의 감정카드\n\n${mood}\n\n${message}\n\n${date}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: '감정카드', text: shareText });
        setSuccessMessage('공유가 성공적으로 완료되었습니다!');
      } catch (err) {
        setError('공유 실패: ' + err.message);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setSuccessMessage('공유할 텍스트가 클립보드에 복사되었습니다.');
      } catch (err) {
        setError('클립보드 복사 실패: ' + err.message);
      }
    }
  };

  const handleReplySubmit = () => {
    if (reply.trim().length === 0) {
      setError('답장이 비어 있습니다. 내용을 입력해주세요.');
      return;
    }
    if (reply.length > 100) {
      setError('답장은 최대 100자까지 입력 가능합니다.');
      return;
    }
    setError('');
    setSubmittedReply(reply);
    setReply('');
    setSuccessMessage('답장이 성공적으로 전송되었습니다!');
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
    successText: { color: 'green', fontSize: '13px', marginTop: '8px' },
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
        placeholder="따뜻한 답장을 적어주세요 (최대 100자)"
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
      {successMessage && <div style={styles.successText}>{successMessage}</div>}

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

export default function App() {
  return (
    <div>
      <EmotionCard
        name="테스트 사용자"
        mood="😊 행복해요"
        message="오늘은 기분이 정말 좋아요!"
        date="2025-04-14"
      />
    </div>
  );
}
