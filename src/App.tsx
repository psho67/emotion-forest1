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
