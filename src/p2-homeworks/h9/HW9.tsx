import React from 'react';
import Clock from './Clock';
import s from './HW9.module.css';

function HW9() {
  return (
    <div className={s.taskWrapper}>
      <hr />
      homeworks 9{/*should work (должно работать)*/}
      <div className={s.wrapper}>
        <Clock />
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeClock/>*/}
      <hr />
    </div>
  );
}

export default HW9;
