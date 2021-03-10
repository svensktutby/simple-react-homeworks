import React, { FC } from 'react';
import s from './Preloader.module.css';

type PreloaderPropsType = {
  text?: string;
};

export const Preloader: FC<PreloaderPropsType> = ({ text }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}>{text}</div>
    </div>
  );
};
