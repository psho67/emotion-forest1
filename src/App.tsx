import React, { useState } from 'react';
import EmotionCard from './components/EmotionCard';
import ChatBubble from './components/ChatBubble';

const moods = ['😊 행복해요', '😥 조금 지쳤어요', '🙏 고마워요'];

const getToday = () => new Date().toLocaleDateString();

type HistoryEntry = {
  date: string;
  mood: string;
  message: string;
};

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
  const [messages, setMessages] = useState<string[]>(
    Array(initialFriends.length).fill('')
  );

  const waterFriend = (index: number, mood: string) => {
    if (friendList[index].wateredToday) return;

    const newList = [...friendList];
    const currentFriend = newList[index];
    const newLevel = currentFriend.level + 1;
    const today = getToday();
    const message = messages[index];

    currentFriend.wateredToday = true;
    currentFriend.mood = mood;
    currentFriend.message = message;
    currentFriend.level = newLevel;
    currentFriend.history.push({ date: today, mood, message });

    setFriendList(newList);

    alert(`${currentFriend.name}에게 "${mood}" (${message}) 라고 말하며 물을 줬어요!`);
  };

  const handleMessageChange = (index: number, value: string) => {
    const newMessages = [...messages];
    newMessages[index] = value;
    setMessages(newMessages);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '480px', margin: '0 auto' }}>
      <h1>감정 숲 - 친구의 나무에 물 주기</h1>
      <p>마음을 담아 친구의 감정 나무에 물을 주세요. 하루 한 번만 가능해요.</p>

      {friendList.map((friend, index) => (
        <div
          key={index}
          style={{
            background: '#f9f9f9',
            padding: '12px',
            borderRadius: '10px',
            marginBottom: '16px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          <strong>{friend.name} 🌱</strong>
          <div style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>
            오늘 기분은 어떤가요?
          </div>
          <input
            type="text"
            placeholder="따뜻한 한마디를 적어주세요"
            value={messages[index]}
            onChange={(e) => handleMessageChange(index, e.target.value)}
            style={{
              padding: '6px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              width: '100%',
              marginBottom: '8px',
            }}
          />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {moods.map((mood) => (
              <button
                key={mood}
                disabled={friend.wateredToday}
                onClick={() => waterFriend(index, mood)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: friend.wateredToday ? '#aaa' : '#4caf50',
                  color: 'white',
                  cursor: friend.wateredToday ? 'not-allowed' : 'pointer',
                }}
              >
                {mood}
              </button>
            ))}
          </div>

          <ul style={{ paddingLeft: '16px', marginTop: '12px' }}>
            {friend.history.map((entry, i) => (
              <li key={i}>
                {entry.date}: {entry.mood} - "{entry.message}"
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* 데모용 채팅 UI */}
      <div style={{ marginTop: '40px' }}>
        <ChatBubble text="안녕! 물 줄게!" isUser={false} />
        <ChatBubble text="고마워~ 오늘도 힘내!" isUser={true} />
      </div>

      {/* 데모용 감정 카드 */}
      <EmotionCard
        name="잎사귀1"
        mood="😊 행복해요"
        message="오늘도 좋은 하루 보내~"
        date="2025-04-13"
      />
    </div>
  );
}
