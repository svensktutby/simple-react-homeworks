import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from 'react';
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  className,
  onChange,
  onChangeOption,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const finalInputClassName = `${s.radio} ${className ? className : ''}`;

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.radioWrapper}>
          <input
            type={'radio'}
            // name, checked, value, onChange
            name={name}
            value={o}
            checked={value === o}
            onChange={onChangeCallback}
            className={finalInputClassName}
          />
          <span className={s.info}>{o}</span>
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};

export default SuperRadio;
