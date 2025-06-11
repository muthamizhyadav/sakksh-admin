import React from 'react';
import { Select } from '@mantine/core';

const SharedSelect = ({
    label,
    placeholder,
    data,
    searchable = true,
    nothingFound = 'No options',
    className = '',
    onChange,
    value,
    error,
    ...rest
}) => {
    return (
        <div className={`w-full ${className}`}>
            <Select
                label={label}
                placeholder={placeholder}
                data={data}
                searchable={searchable}
                nothingFound={nothingFound}
                radius="md"
                size="md"
                value={value}
                onChange={onChange}
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

export default SharedSelect;
