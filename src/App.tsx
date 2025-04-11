import { useState } from 'react';

const friends = [
  { name: '잎사귀1', wateredToday: false, mood: '' },
  { name: '감정이', wateredToday: false, mood: '' },
  { name: '푸름이', wateredToday: false, mood: '' },
];

const moods = ['😊 행복해요', '😥 조금 지쳤어요', '🙏 고마워요'];

export default function App() {
  const [friendList, setFriendList] = useState(friends);

  const waterFriend = (index: number, mood: string) => {
    if (friendList[index].wateredToday) return;

    const newList = [...friendList];
    newList[index].wateredToday = true;
    newList[index].mood = mood;
    setFriendList(newList);

    alert(`${newList[index].name}의 감정 나무에 따뜻한 물을 주고, '${mood}'라고 말했어요!`);
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
              marginBottom: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div>
              <strong>{friend.name}</strong>
              <div style={{ fontSize: '13px', color: '#555' }}>
                {friend.wateredToday
                  ? `오늘 감정: ${friend.mood}`
                  : '오늘 기분은 어떤가요?'}
              </div>
            </div>
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
        ))}
      </div>
    </div>
  );
}
