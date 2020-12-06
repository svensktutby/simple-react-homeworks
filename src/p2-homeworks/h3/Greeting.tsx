import React, { FC } from 'react';
import s from './Greeting.module.css';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (value: string) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: boolean; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers }, // деструктуризация пропсов
) => {


  return (
    <div className={s.bg}>
      <div className={s.greetingBlock}>
        <div className={s.greetingWrapper}>
          <SuperInputText
            value={name}
            onChangeText={setNameCallback}
            onEnter={addUser}
            error={error ? 'Username should not be empty!' : ''}
            placeholder="Write here..."
          />
          <SuperButton red={error} onClick={addUser}>
            Add
          </SuperButton>
        </div>
        <span className={s.totalUsers}>{`Total users: ${totalUsers}`}</span>
      </div>
    </div>
  );
};

export default Greeting;
