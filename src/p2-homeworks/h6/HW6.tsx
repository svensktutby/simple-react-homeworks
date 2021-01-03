import React, { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { restoreState, saveState } from './localStorage/localStorage';
import s from './HW6.module.css';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    const localStoreValue = restoreState<string>('editable-span-value', 'Write here...');
    setValue(localStoreValue);
  };

  return (
    <div>
      <hr />
      homeworks 6{/*should work (должно работать)*/}
      <div className={s.wrapper}>
        <div>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{
              children: value ? undefined : 'enter text...',
            }}
          />
        </div>
        <div className={`${s.actions}`}>
          <SuperButton onClick={save}>save</SuperButton>
          <SuperButton onClick={restore}>restore</SuperButton>
        </div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr />
    </div>
  );
}

export default HW6;
