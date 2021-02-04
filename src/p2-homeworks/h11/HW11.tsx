import React, { useState } from 'react';

import s from './HW.module.css'
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const  MIN_VALUE = 0;
    const  MAX_VALUE = 100;

    const [value1, setValue1] = useState(MIN_VALUE);
    const [value2, setValue2] = useState(MAX_VALUE);

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <div>
                    <SuperRange
                        // сделать так чтоб value1 изменялось
                        onChangeRange={setValue1}
                        value={value1}
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                    />
                </div>

                <div className={s.superDoubleRangeWrapper}>
                    <span className={s.rangeValue}>{value1}</span>
                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
                        onChangeRange={([val1, val2]) => {
                            setValue1(val1);
                            setValue2(val2);
                        }}
                        value={[value1, value2]}
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                    />
                    <span className={s.rangeValue}>{value2}</span>
                </div>
            </div>

              <hr/>
              {/*для личного творчества, могу проверить*/}
              {/*<AlternativeSuperRange/>*/}
              {/*<AlternativeSuperDoubleRange/>*/}
              <hr/>
        </div>
    );
}

export default HW11;
