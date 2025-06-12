import React from "react";
import { Textarea } from "@mantine/core";

const SharedTextArea = ({
  label,
  placeholder,
  icon,
  rightSection,
  className = "",
  onChange,
  value,
  error,
  minRows,
  maxRows,
  autosize,
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Textarea
        label={label}
        placeholder={placeholder}
        icon={icon}
        rightSection={rightSection}
        radius="md"
        size="md"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        error={error}
        autosize={autosize}
        maxRows={maxRows}
        minRows={minRows}
        classNames={{
          input:
            "border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md",
          label: "text-sm font-medium text-gray-700 mb-1",
        }}
        {...rest}
      />
    </div>
  );
};

export default SharedTextArea;
