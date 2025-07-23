import React from "react";
import { Menu, Button, Text } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";

const SharedMenuDropdown = ({ label = "Add site", items }) => {
  console.log( typeof items)
  return (
    <Menu
      trigger="hover"
      shadow="md"
      width={200}
      withinPortal={false}
      position="left-start"
      offset={4}
    >
      <Menu.Target>
        <Button variant="light" radius="" size="xs">
          <BsThreeDotsVertical size={18} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>{label}</Menu.Label> */}
        {items?.map((item, index) => (
          <Menu.Item
            leftSection={item.icon}
            key={index}
            onClick={item.disabled ? undefined : item.onClick}
            disabled={item.disabled}
          >
            <Text size="sm">{item.label}</Text>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default SharedMenuDropdown;
