import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('잎싹이'); // 사용자 이름 또는 기본값
  const [mood, setMood] = useState('기분 좋아요!');
  const [message, setMessage] = useState('오늘은 기분이 맑고 따뜻해요.');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleShare = async () => {
    const shareText = `${name}의 감정카드\n\n${mood}\n\n${message}\n${date}`;

    // 브라우저 환경인지 먼저 체크
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: '감정카드', text: shareText });
        setSuccessMessage('공유가 성공적으로 완료되었습니다!');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError('공유 실패: ' + err.message);
        } else {
          setError('공유 실패: 알 수 없는 오류');
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setSuccessMessage('공유할 텍스트가 클립보드에 복사되었습니다.');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError('클립보드 복사 실패: ' + err.message);
        } else {
          setError('클립보드 복사 실패: 알 수 없는 오류');
        }
      }
    }
  };

  return (
    <div>
      <button onClick={handleShare}>공유하기</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
