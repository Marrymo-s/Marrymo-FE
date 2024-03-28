import React, {ChangeEvent, useState, useRef, useEffect} from 'react';
import * as styles from './index.css';
import {MAX_INVITATION_MESSAGE_LENTGH} from '@/constants';
import {MAX_LINES} from '@/constants'


const maxLineBreaks = MAX_LINES
const InvitationMessage = () => {
  const [message, setMessage] = useState(
    '우리의 사랑이 꽃피는 순간\n\n서로의 마음을 확인하며\n\n약속의 말을 건넵니다.\n\n이 행복을 여러분과 나누고 싶어\n\n여러분을 초대합니다.'
  );
  const [alertMessage, setAlertMessage] = useState('');
  const textAreaRef = useRef(null);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    const lineBreaks = (inputText.match(/\n/g) || []).length;
    setMessage(inputText);

    if (inputText.length === 0) {
      setAlertMessage('초대 문구는 필수로 작성하셔야 합니다.')
    } else if (inputText.length > MAX_INVITATION_MESSAGE_LENTGH) {
      setAlertMessage('초대 문구는 100자까지만 가능해요.');
    } else if (lineBreaks > maxLineBreaks) {
      setAlertMessage('최대 10줄까지만 가능해요');
      // Prevent further line breaks by removing last entered character
      const lastCharIndex = inputText.lastIndexOf('\n');
      const newText = inputText.substring(0, lastCharIndex);
      setMessage(newText);
    } else {
      setAlertMessage('');
      setMessage(inputText);
    }
  };

  return (
    <div className={styles.textareaContainer}>초대 문구 작성하기
      <textarea
        ref={textAreaRef}
        value={message}
        onChange={handleMessageChange}
        className={styles.textarea}
        maxLength={MAX_INVITATION_MESSAGE_LENTGH}
        placeholder='초대 문구를 입력해주세요.'
        rows={MAX_LINES}
      />
      <div className={styles.charCounter}>
        {message.length} / {MAX_INVITATION_MESSAGE_LENTGH}
      </div>
      {alertMessage && <div className={styles.alertMessage}>{alertMessage}</div>}
    </div>
  );
};

export default InvitationMessage;