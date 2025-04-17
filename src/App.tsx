import React, { useState } from 'react';
import ChatBubble from './components/chatBubble';

function App() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleShare = async () => {
    const shareText = `${name}의 감정카드\n\n${mood}\n\n${message}\n${date}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: '감정카드', text: shareText });
        setSuccessMessage('공유가 성공적으로 완료되었습니다!');
      } catch (err: any) {
        setError('공유 실패: ' + err.message || '알 수 없는 오류');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setSuccessMessage('공유할 텍스트가 클립보드에 복사되었습니다!');
      } catch (err: any) {
        setError('클립보드 복사 실패: ' + err.message || '알 수 없는 오류');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="기분을 입력하세요"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <textarea
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleShare}>공유하기</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
