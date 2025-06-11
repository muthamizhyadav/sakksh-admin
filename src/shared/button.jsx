import React from 'react';

const SharedButton = ({
    title = '',
    icon = null,
    iconPosition = 'left', // 'left' | 'right' | 'only'
    onClick,
    className = '',
    style = {},
    disabled = false,
    textColor = 'text-white', // new prop with default
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
            className={`p-2 rounded bg-[#0052A8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${textColor} ${className}`}
            style={style}
        >
            {renderContent()}
        </button>
    );
};

export default SharedButton;
