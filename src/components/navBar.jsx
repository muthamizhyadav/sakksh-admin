import React from 'react';
import {primaryColor} from '../utils/styles'

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="text-white p-4 shadow-md fixed top-0 left-0 right-0 h-16 z-20"  style={{ backgroundColor: primaryColor }}>
            <div className="flex justify-between items-center h-full">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    ☰
                </button>
                <div className="flex items-center space-x-4">
                    <span className="font-medium">Admin User</span>
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                        👤
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;