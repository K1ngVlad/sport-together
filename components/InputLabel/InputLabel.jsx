'use client';

import s from './InputLabel.module.scss';

const InputLabel = (props) => {
  const { name, type, value, setValue, placeholder, style } = props;
  return (
    <label
      style={{
        height: style === '1/5' ? '12%' : '',
      }}
      className={s.inputLabel}
    >
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};

export { InputLabel };
