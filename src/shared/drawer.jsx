import React from "react";
import { Drawer, ScrollArea } from "@mantine/core";

const SharedDrawer = ({
  opened,
  onClose,
  title = "Drawer",
  position = "right",
  size = "md",
  children,
  withCloseButton = true,
}) => {
  return (
    <Drawer
      offset={8}
      radius="md"
      transitionProps={{
        transition: "rotate-left",
        duration: 150,
        timingFunction: "linear",
      }}
      opened={opened}
      onClose={onClose}
      title={title}
      position={position}
      size={size}
      withCloseButton={withCloseButton}
      overlayProps={{ opacity: 0.55, blur: 4 }}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      {children}
    </Drawer>
  );
};

export default SharedDrawer;
