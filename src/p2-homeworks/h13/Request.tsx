import React, { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './Request.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import { AppStoreType } from '../h10/bll/store';
import { Preloader } from '../h10/common/Preloader/Preloader';
import { changeCheckboxStatusAC, fetchDataAsync } from './bll/requestReducer';

export const Request: FC = () => {
  const status = useSelector<AppStoreType, boolean>(
    (state) => state.request.status,
  );
  const title = useSelector<AppStoreType, string>(
    (state) => state.request.title,
  );
  const loading = useSelector<AppStoreType, boolean>(
    (state) => state.loading.status,
  );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchDataAsync(status));
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCheckboxStatusAC(e.currentTarget.checked));
  };

  return (
    <div className={s.wrapper}>
      {loading ? (
        <Preloader text="LOADING..." />
      ) : (
        <h3 className={s.title}>{title}</h3>
      )}

      <div className={s.btnWrapper}>
        <SuperButton className={s.btn} onClick={clickHandler}>
          Get data
        </SuperButton>
      </div>
      <SuperCheckbox onChange={changeHandler}>Change status</SuperCheckbox>
    </div>
  );
};
