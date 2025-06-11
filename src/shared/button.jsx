import React from 'react';

const SharedButton = ({
    title = '',
    icon = null,
    iconPosition = 'left', // 'left' | 'right' | 'only'
    onClick,
    className = '',
    style = {},
    disabled = false,
}) => {
    const renderContent = () => {
        if (iconPosition === 'only') {
            return icon;
        }

        return (
            <div className="flex items-center justify-center gap-2">
                {iconPosition === 'left' && icon}
                {title && <span>{title}</span>}
                {iconPosition === 'right' && icon}
            </div>
        );
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`p-2 rounded text-white bg-[#0052A8]  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            style={style}
        >
            {renderContent()}
        </button>
    );
};

export default SharedButton;
