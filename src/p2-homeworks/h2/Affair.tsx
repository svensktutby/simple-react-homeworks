import React from 'react';
import { AffairType } from './HW2';

import classes from './Affair.module.css';

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const { affair, btn, btnClose } = classes;

  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }; // need to fix

  return (
    <li className={affair}>
      <span>{props.affair.name}</span>
      <button className={`${btn} ${btnClose}`} onClick={deleteCallback}>×</button>
    </li>
  );
}

export default Affair;
