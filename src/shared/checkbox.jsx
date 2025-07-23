import { Checkbox } from "@mantine/core";
import React from "react";

const SharedCheckbox = ({
  label = "",
  checked,
  onChange,
  value,
  disabled = false,
  size = "sm",
  color = "blue",
  className = "",
  ...rest
}) => {
  return (
    <div className={className}>
      <Checkbox
        label={label}
        checked={checked}
        onChange={onChange}
        value={value}
        disabled={disabled}
        size={size}
        color={color}
        {...rest}
      />
    </div>
  );
};

export default SharedCheckbox;
