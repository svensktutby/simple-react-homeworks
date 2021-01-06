import React, { FC } from 'react';
import s from './Preloader.module.css';

export const Preloader: FC = () => {
  return (
    <div className={s.loader}>
      <span>&#123;</span>
      <span>&#125;</span>
    </div>
  );
};
