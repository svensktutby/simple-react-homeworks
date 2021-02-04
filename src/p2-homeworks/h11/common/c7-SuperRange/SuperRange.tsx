import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import s from './SuperRange.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {// и + ещё пропсы которых нет в стандартном инпуте
  onChangeRange?: (value: number) => void;
  min: number;
  max: number;
};

const setValue = (value: number, min: number, max: number)=> {
  const newValue = Number( (value - min) * 100 / (max - min) );
  const newPosition = 10 - (newValue * 0.2);
  return `calc(${newValue}% + (${newPosition}px))`;
};

const SuperRange: React.FC<SuperRangePropsType> = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeRange,
  className,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e); // сохраняем старую функциональность

    onChangeRange && onChangeRange(+e.currentTarget.value);
  };

  const finalRangeClassName = `${s.range} ${className ? className : ''}`;

  const {value, min, max} = restProps;

  return (
    <div className={s.rangeWrapper}>
      <div
        className={s.rangeValue}
        style={{ left: setValue(+value!, min, max) }}
      >
        <span>{value}</span>
      </div>
      <input
        type={'range'}
        onChange={onChangeCallback}
        className={finalRangeClassName}

        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
    </div>
  );
};

export default SuperRange;
