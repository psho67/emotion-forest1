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
    alert(`${currentFriend.name}의 감정카드를 보냈어요!`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '480px', margin: '0 auto' }}>
      <h1>감정 숲 - 친구의 나무에 물 주기</h1>
      <p>마음을 담아 감정카드를 보내주세요. 하루에 한 번만!</p>

      {friendList.map((friend, index) => (
        <div key={index} style={{ marginBottom: '24px' }}>
          <EmotionCard
            name={friend.name}
            mood={friend.mood}
            message={friend.message}
            date={getToday()}
          />

          {friend.history.map((entry, i) => (
            <div key={i}>
              <ChatBubble text={`안녕! 물 줄게!`} from="you" />
              <ChatBubble text={`${entry.message}`} from="me" />
            </div>
          ))}

          <input
            type="text"
            placeholder="따뜻한 한마디를 적어주세요"
            value={messages[index]}
            onChange={(e) => {
              const newMessages = [...messages];
              newMessages[index] = e.target.value;
              setMessages(newMessages);
            }}
            disabled={friend.wateredToday}
            style={{
              width: '100%',
              marginBottom: '8px',
              padding: '8px',
              fontSize: '14px',
            }}
          />

          {moods.map((moodOption) => (
            <button
              key={moodOption}
              disabled={friend.wateredToday}
              onClick={() => waterFriend(index, moodOption)}
              style={{
                margin: '4px',
                padding: '6px 12px',
                backgroundColor: friend.wateredToday ? '#ccc' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: friend.wateredToday ? 'not-allowed' : 'pointer',
              }}
            >
              {moodOption}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
