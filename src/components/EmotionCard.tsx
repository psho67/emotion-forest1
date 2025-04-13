import React, { useState } from 'react';
const moods = ['😊 행복해요', '😥 조금 지쳤어요', '🙏 고마워요'];
const getToday = () => new Date().toLocaleDateString();

type HistoryEntry = { date: string; mood: string; message: string };
type Friend = {
  name: string;
  wateredToday: boolean;
  mood: string;
  message: string;
  level: number;
  history: HistoryEntry[];
};

const initialFriends: Friend[] = [
  { name: '잎사귀1', wateredToday: false, mood: '', message: '', level: 1, history: [] },
  { name: '감정이', wateredToday: false, mood: '', message: '', level: 1, history: [] },
  { name: '푸름이', wateredToday: false, mood: '', message: '', level: 1, history: [] },
];

export default function App() {
  const [friendList, setFriendList] = useState<Friend[]>(initialFriends);
  const [messages, setMessages] = useState<string[]>(Array(initialFriends.length).fill(''));

  const waterFriend = (index: number, mood: string) => {
    if (friendList[index].wateredToday) return;

    const newList = [...friendList];
    const currentFriend = newList[index];
    const newLevel = currentFriend.level + 1;
    const today = getToday();

    currentFriend.wateredToday = true;
    currentFriend.mood = mood;
    currentFriend.level = newLevel;
    currentFriend.history.push({ date: today, mood, message: messages[index] });

    setFriendList(newList);
    alert(`${currentFriend.name}의 감정 나무에 물을 주고 '${mood}'라고 말했어요!`);
  };

  const handleMessageChange = (index: number, value: string) => {
    const newMessages = [...messages];
    newMessages[index] = value;
    setMessages(newMessages);
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '480px',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundImage:
          'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '24px', marginBottom: '16px', backgroundColor: 'rgba(255,255,255,0.6)', padding: '8px', borderRadius: '8px' }}>
        감정 숲 - 친구의 나무에 물 주기
      </h1>
      <p style={{ color: '#444', marginBottom: '24px', backgroundColor: 'rgba(255,255,255,0.5)', padding: '8px', borderRadius: '8px' }}>
        마음을 담아 친구의 감정 나무에 물을 주세요. 하루 한 번만 가능해요.
      </p>

      {friendList.map((friend, index) => (
        <div key={index} style={{ background: 'rgba(255,255,255,0.8)', padding: '12px 16px', borderRadius: '12px', marginBottom: '12px' }}>
          <div>
            <strong>{friend.name} 🌱</strong>
            <div style={{ fontSize: '13px', color: '#555' }}>
              오늘 기분은 어떤가요?
            </div>
            <input
              type="text"
              value={messages[index]}
              onChange={(e) => handleMessageChange(index, e.target.value)}
              placeholder="따뜻한 한마디를 적어주세요"
              style={{
                padding: '6px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                width: '100%',
                fontSize: '13px',
                marginBottom: '8px',
              }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {moods.map((moodOption) => (
                <button
                  key={moodOption}
                  disabled={friend.wateredToday}
                  onClick={() => waterFriend(index, moodOption)}
                  style={{
                    backgroundColor: friend.wateredToday ? '#ccc' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    cursor: friend.wateredToday ? 'not-allowed' : 'pointer',
                    fontSize: '13px',
                  }}
                >
                  {moodOption}
                </button>
              ))}
            </div>
          </div>

          {friend.wateredToday && (
            <>
              <ChatBubble text={`${friend.name}의 감정카드`} isUser={false} />
              <ChatBubble text={`💬 ${friend.message}`} isUser={true} />
              <EmotionCard
                name={friend.name}
                mood={friend.mood}
                message={friend.message}
                date={getToday()}
              />
            </>
          )}

          {friend.history.length > 0 && (
            <ul style={{ paddingLeft: '16px' }}>
              {friend.history.map((entry, i) => (
                <li key={i}>
                  {entry.date}: {entry.mood} - "{entry.message}"
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
