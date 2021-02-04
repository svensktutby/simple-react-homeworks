import React from "react";
import { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
  // step, disable, ...
}

const RangeWithTooltip = createSliderWithTooltip(Range);

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max
      // step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <RangeWithTooltip onChange={([val1, val2]) => {
                onChangeRange && onChangeRange([val1, val2])
            }}
                value={value}
                min={min}
                max={max}
            />
        </>
    );
}

export default SuperDoubleRange;
