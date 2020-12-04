import React, { ChangeEvent, FC, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(''); // need to fix any
  const [error, setError] = useState<boolean>(false); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setError(false);
    const userName = e.currentTarget.value.trim();
    setName(userName); // need to fix
  };
  const addUser = () => {
    if (name) {
      addUserCallback(name);
      alert(`Hello ${name}!`); // need to fix
      setName('');
    } else {
      setError(true);
    }
  };

  const totalUsers = users.length; // need to fix

  return (
    <Greeting name={name} setNameCallback={setNameCallback} addUser={addUser} error={error} totalUsers={totalUsers} />
  );
};

export default GreetingContainer;
