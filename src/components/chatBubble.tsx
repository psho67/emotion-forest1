// React의 버전에 따라 import 여부를 결정
// 필요하지 않을 경우 아래 import를 제거하세요.
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
