import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import { AppStoreType } from '../h10/bll/store';
import { changeThemeAC, ThemeType } from './bll/themeReducer';

const themes = ['default', 'dark', 'red', 'some'];

function HW12() {
  const theme = useSelector<AppStoreType, ThemeType>(
    (state) => state.theme.theme,
  );

  const dispatch = useDispatch();

  const onChangeCallback = (theme: ThemeType) => {
    dispatch(changeThemeAC(theme));
  };

  return (
    <div className={s[theme]}>
      <hr />
      <div className={s.wrapper}>
        <span className={s[theme + '-text']}>homeworks 12</span>

        <SuperSelect
          className={s.themeSelect}
          options={themes}
          value={theme}
          onChangeOption={onChangeCallback}
        />
      </div>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr />
    </div>
  );
}

export default HW12;
