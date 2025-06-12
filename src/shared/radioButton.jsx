import React from 'react';
import { Radio } from '@mantine/core';

const SharedYesNoRadio = ({
  label = 'Select an option',
  name = 'yes-no',
  value,
  onChange,
  error,
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
        <div className="flex gap-4 mt-2">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </div>
      </Radio.Group>
    </div>
  );
};

export default SharedYesNoRadio;
