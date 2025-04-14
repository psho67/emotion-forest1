// 불필요한 React import 제거
import React from 'react'; // 제거 가능
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
