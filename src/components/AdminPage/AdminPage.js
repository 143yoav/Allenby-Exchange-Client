import React, { useState, useCallback } from 'react';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { sendCmd } from '../../actions/api';
import './AdminPage.scss';

const AdminPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const onKeyDown = useCallback(event => {
    if (event.key == 'Enter') {
      setText('');
      sendCmd(text).then(res => setResult(`${res}`));
    }
  });

  return (
    <div className="AdminPage__Wrapper">
      <FilledInput
        value={text}
        onKeyDown={onKeyDown}
        onChange={e => {
          setText(e.target.value);
        }}
        startAdornment={<InputAdornment position="start">></InputAdornment>}
      />
      <div className="AdminPage__Result">{result}</div>
    </div>
  );
};

export default AdminPage;
