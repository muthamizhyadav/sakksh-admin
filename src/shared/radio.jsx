import React from 'react';
import { Radio } from '@mantine/core';

const SharedRadio = ({
  label,
  name = 'yes-no',
  value,
  onChange,
  error,
  options=[],
  required = false,
  className = '',
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Radio.Group
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        required={required}
        {...rest}
      >
       
        <div className="flex  gap-4 mt-2 flex-col">
          {options.map((opt) => (
            <Radio key={opt.value} value={opt.value} label={opt.label} />
          ))}
        </div>
      </Radio.Group>
    </div>
  );
};

export default SharedRadio;
