import React, { useState } from 'react';

const friends = [
  { name: '잎사귀1', wateredToday: false },
  { name: '감정이', wateredToday: false },
  { name: '푸름이', wateredToday: false },
];

export default function App() {
  const [friendList, setFriendList] = useState(friends);

  const waterFriend = (index: number) => {
    if (friendList[index].wateredToday) return;

    const newList = [...friendList];
    newList[index].wateredToday = true;
    setFriendList(newList);

    alert(`${newList[index].name}의 감정 나무에 따뜻한 물을 주었어요!`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '480px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>
        감정 숲 - 친구의 나무에 물 주기
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        마음을 담아 친구의 감정 나무에 물을 주세요. 하루 한 번만 가능해요.
      </p>

      <div>
        {friendList.map(
          (
            friend: { name: string; wateredToday: boolean },
            index: number
          ) => (
            <div
              key={index}
              style={{
                background: '#e0fbe0',
                padding: '12px 16px',
                borderRadius: '12px',
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <strong>{friend.name}</strong>
                <div style={{ fontSize: '13px', color: '#555' }}>
                  {friend.wateredToday
                    ? '오늘 이미 물을 주었어요'
                    : '아직 물을 줄 수 있어요'}
                </div>
              </div>
              <button
                onClick={() => waterFriend(index)}
                disabled={friend.wateredToday}
                style={{
                  backgroundColor: friend.wateredToday ? '#ccc' : '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  cursor: friend.wateredToday ? 'not-allowed' : 'pointer',
                }}
              >
                물 주기
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

