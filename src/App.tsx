React, {usageState}를 "react"에서 가져옵니다;

친구들 = [
 { 이름: "잎사귀1", 물에 담근오늘: 거짓 },
 { 이름: "감정이", 물에 담근오늘: 거짓 },
 { 이름: "푸름이", 물에 담근오늘: 거짓 }
];

기본 기능 내보내기 App() {
 const [friendList, setFriendList] = useState(친구);

 const waterFriend = (지수: 숫자) => {
 만약 (friendList[index].물이 든오늘) 복귀;

 const newList = [...friendList];
 newList[index].물이 든오늘 = true;
 setFriendList(새 목록);

 alert('${newList[index]).name}의 감정 나무에 따뜻한 물을 주었어요!`);
 };

 반품 (
 <div 스타일={{ 패딩: "20 px", 최대 너비: "480 px", 여백: "0 auto"}}>
 <h1 스타일={{ 폰트사이즈: "24 px", 여백 하단: "16 px"}}>
 감정 숲 - 친구의 나무에 물 주기
 </h1>
 <p 스타일={{ 색상: "#666", 여백 하단: "24 px"}}>
 마음을 담아 친구의 감정 나무에 물을 주세요. 하루 한 번만 가능해요.
 </p>

 <div>
 {friendList.map((친구, 인덱스)) => (
 <div
 key={index}
 스타일={{
 배경: "#e0fbe0",
 패딩: "12 px 16 px",
 경계 반경: "12px",
 여백 하단: "12px",
 디스플레이: "플렉스",
 정당화 내용: "공간 사이",
 정렬 항목: "가운데"
 }}
 >
 <div>
 <strong>{friend.name }<strong>
 <div style={{ 폰트사이즈: "13 px", 색상: "#555"}}>
 친구.물이 든오늘은
 ? "오늘 이미 물을 주었어요"
 : "아직 물을 줄 수 있어요"}
 </div>
 </div>
 버튼
 클릭 = {(() => 워터프렌드(지수))}
 장애인={친구}.물이 든오늘}
 스타일={{
 배경색: 친구.물이 든오늘? "#ccc": "#4CAF50",
 색상: "흰색",
 경계: "none",
 패딩: "8 px 12 px",
 경계 반경: "8px",
 커서: 친구.물이 든오늘? "허용되지 않음" : "포인트"
 }}
 >
 물 주기
 </버튼>
 </div>
 ))}
 </div>
 </div>
 );
}
