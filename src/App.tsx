import { useState } from 'react';
import EmotionCard from './components/EmotionCard';
const moods = ['😊 행복해요', '😥 조금 지쳤어요', '🙏 고마워요'];
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
    currentFriend.message = messages[index];
    currentFriend.level = newLevel;
    currentFriend.history.push({ date: today, mood: mood, message: messages[index] });

    setFriendList(newList);

    alert(`${currentFriend.name}의 감정 나무에 따뜻한 물을 주고, '${mood}'라고 말했어요!\n메시지: ${currentFriend.message}\n나무 레벨이 ${newLevel}이 되었어요!`);
  };

  const handleMessageChange = (index: number, value: string) => {
    const newMessages = [...messages];
    newMessages[index] = value;
    setMessages(newMessages);
  };

  const getTreeStage = (level: number) => {
    if (level >= 10) return '🌳';
    if (level >= 5) return '🌿';
    return '🌱';
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
      <h1
        style={{
          fontSize: '24px',
          marginBottom: '16px',
          backgroundColor: 'rgba(255,255,255,0.6)',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        감정 숲 - 친구의 나무에 물 주기
      </h1>
      <p
        style={{
          color: '#444',
          marginBottom: '24px',
          backgroundColor: 'rgba(255,255,255,0.5)',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        마음을 담아 친구의 감정 나무에 물을 주세요. 하루 한 번만 가능해요.
      </p>

      <div>
        {friendList.map((friend, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255,255,255,0.8)',
              padding: '12px 16px',
              borderRadius: '12px',
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div>
              <strong>{friend.name} {getTreeStage(friend.level)}</strong>
              <div style={{ fontSize: '13px', color: '#555' }}>
                {friend.wateredToday
                  ? `오늘 감정: ${friend.mood}\n메시지: ${friend.message}`
                  : '오늘 기분은 어떤가요?'}
              </div>
            </div>

            {!friend.wateredToday && (
              <input
                type="text"
                value={messages[index]}
                onChange={(e) => handleMessageChange(index, e.target.value)}
                placeholder="따뜻한 한마디를 적어주세요"
                style={{
                  padding: '6px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '13px',
                }}
              />
            )}

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

            {friend.history.length > 0 && (
              <div style={{ fontSize: '12px', color: '#333', marginTop: '8px' }}>
                <strong>감정 히스토리</strong>
                <ul style={{ paddingLeft: '16px' }}>
                  {friend.history.map((entry, i) => (
                    <li key={i}>
                      {entry.date}: {entry.mood} - "{entry.message}"
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
<EmotionCard
  name="잎사귀1"
  mood="😊 행복해요"
  message="오늘도 좋은 하루 보내~"
  date="2025-04-13"
/>
