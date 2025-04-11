import { useState } from

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
    const shareText = `${name}의 감정카드\n${mood}\n“${message}”\n${date}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${name}의 감정카드`,
          text: shareText,
        });
      } catch (error) {
        alert('공유가 취소되었어요.');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('공유 텍스트가 복사되었어요! 붙여넣기로 전해보세요.');
      } catch (err) {
        alert('클립보드 복사에 실패했어요 😢');
      }
    }
  };

  const handleReplySubmit = () => {
    if (reply.trim() === '') return;
    setSubmittedReply(reply);
    setReply('');
  };

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
      <div style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>{date}</div>

      <button
        onClick={handleShare}
        style={{
          padding: '10px 16px',
          borderRadius: '8px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '16px',
        }}
      >
        공유하기 💌
      </button>

      {submittedReply ? (
        <div
          style={{
            backgroundColor: '#f0f9f2',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#2e7d32',
          }}
        >
          답장: "{submittedReply}"
        </div>
      ) : (
        <div style={{ marginTop: '12px' }}>
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="답장을 입력해 주세요"
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
        </div>
      )}
    </div>
  );
}
