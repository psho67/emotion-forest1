import { useState } from 'react';

type EmotionCardProps = {
  name: string;
};

const moods = ['😊 행복해요', '😥 조금 지쳤어요', '🙏 고마워요'];

export default function EmotionCard({ name }: EmotionCardProps) {
  const [selectedMood, setSelectedMood] = useState('');
  const [message, setMessage] = useState('');
  const [watered, setWatered] = useState(false);

  const handleWater = (mood: string) => {
    if (watered) return;
    setSelectedMood(mood);
    setWatered(true);
    alert(`${name}에게 '${mood}' 감정과 함께 따뜻한 말을 전했어요!`);
  };

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.85)',
        padding: '16px',
        borderRadius: '12px',
        marginBottom: '16px',
      }}
    >
      <strong>{name} 🌱</strong>
      <div style={{ margin: '8px 0', fontSize: '14px' }}>
        오늘 기분은 어떤가요?
      </div>

      {!watered && (
        <>
          <input
            placeholder="따뜻한 한마디를 적어주세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              padding: '8px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginBottom: '12px',
            }}
          />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => handleWater(mood)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                {mood}
              </button>
            ))}
          </div>
        </>
      )}

      {watered && (
        <div style={{ marginTop: '12px', fontSize: '14px', color: '#333' }}>
          🌿 오늘 감정: <strong>{selectedMood}</strong>
          <br />
          💌 메시지: <em>"{message}"</em>
        </div>
      )}
    </div>
  );
}
