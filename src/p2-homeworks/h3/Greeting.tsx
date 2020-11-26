import React, { FC, ChangeEvent, MouseEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: (e: MouseEvent<HTMLButtonElement>) => void; // need to fix any
  error: boolean; // need to fix any
  totalUsers: number; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers }, // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : ''; // need to fix with (?:)

  return (
    <div className={s.bg}>
      <div className={s.usersBlock}>
        <span className={s.errorMessage}>{error && 'Username should not be empty!'}</span>
        <div className={s.inputWrapper}>
          <input value={name} onChange={setNameCallback} className={inputClass} placeholder="Write here..." />
          <button className={s.addBtn} onClick={addUser}>
            Add
          </button>
        </div>
        <span className={s.totalUsers}>{`Total users: ${totalUsers}`}</span>
      </div>
    </div>
  );
};

export default Greeting;
