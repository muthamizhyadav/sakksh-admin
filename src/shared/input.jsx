import React from 'react';
import { TextInput } from '@mantine/core';

const SharedInput = ({
    label,
    placeholder,
    icon,
    rightSection,
    className = '',
    onChange,
    value,
    error,
    ...rest
}) => {
    return (
        <div className={`w-full ${className}`}>
            <TextInput
                label={label}
                placeholder={placeholder}
                icon={icon}
                rightSection={rightSection}
                radius="md"
                size="md"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                error={error}
                classNames={{
                    input: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md',
                    label: 'text-sm font-medium text-gray-700 mb-1',
                }}
                {...rest}
            />
        </div>
    );
};

export default SharedInput;
