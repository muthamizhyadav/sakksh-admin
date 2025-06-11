import React from 'react';
import { Modal } from '@mantine/core';

const SharedModal = ({
    opened,
    onClose,
    title,
    size = 'md',
    centered = true,
    children,
    className = '',
    overlayProps = {},
    ...rest
}) => {
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={title}
            size={size}
            centered={centered}
            overlayProps={{
                blur: 2,
                opacity: 0.55,
                ...overlayProps,
            }}
            classNames={{
                title: 'text-lg font-semibold text-gray-800',
                body: `p-4 ${className}`,
                content: 'rounded-lg',
            }}
            {...rest}
        >
            {children}
        </Modal>
    );
};

export default SharedModal;
