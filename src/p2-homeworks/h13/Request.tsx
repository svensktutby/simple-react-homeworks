import React, { ChangeEvent, FC, useState } from 'react';

import s from './Request.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import { fetchRequest } from './RequestAPI';

export const Request: FC = () => {
  const [checked, setChecked] = useState(false);
  const [response, setResponse] = useState('There have not been any requests yet');

  const clickHandler = async () => {
    const url = 'auth/test';
    const body = JSON.stringify({ success: checked });

    const options = {
      method: 'POST' as const,
      headers: { 'Content-Type': 'application/json' },
      body,
    };

    const data = await fetchRequest(url, options);
    setResponse(data.info)
    console.log(data);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.currentTarget.checked);

  return (
    <div className={s.wrapper}>
      <h3 className={s.response}>{response}</h3>
      <SuperButton className={s.btn} onClick={clickHandler}>
        Get data
      </SuperButton>
      <SuperCheckbox onChange={changeHandler} />
    </div>
  );
};
