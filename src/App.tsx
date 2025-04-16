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
