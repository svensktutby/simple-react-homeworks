import React, { useState } from 'react';
import { homeWorkReducer } from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';

type PersonType = { _id: number; name: string; age: number };
export type PeopleType = Array<PersonType>;

const initialPeople: PeopleType = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<PeopleType>(initialPeople);

  const finalPeople = people.map((p) => (
    <div key={p._id}>
      {p.name}, {p.age}
    </div>
  ));

  const sortUp = () =>
    setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }));

  const sortDown = () =>
    setPeople(
      homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' }),
    );

  const checkOut = () =>
    setPeople(homeWorkReducer(initialPeople, { type: 'check', payload: 18 }));

  return (
    <div>
      <hr />
      homeworks 8{/*should work (должно работать)*/}
      
      <div className={s.wrapper}>
        {finalPeople}

        <div className={s.actions}>
          <SuperButton onClick={sortUp}>sort&nbsp;up</SuperButton>
          <SuperButton onClick={sortDown}>sort&nbsp;down</SuperButton>
          <SuperButton onClick={checkOut}>check&nbsp;18</SuperButton>
        </div>
      </div>

      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  );
}

export default HW8;
