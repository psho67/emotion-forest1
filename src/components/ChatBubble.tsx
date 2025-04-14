// React import 추가 (React 17 미만 또는 설정 문제 방지용)
import React from 'react';
import PropTypes from 'prop-types';

const ChatBubble = ({ message }: { message: string }) => (
  <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
    {message}
  </div>
);

ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChatBubble;
