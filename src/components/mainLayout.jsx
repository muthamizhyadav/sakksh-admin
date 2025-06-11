import React, { useState } from 'react';
import Navbar from './navBar';
import Sidebar from './sidebar/sideBar';
import { Outlet } from 'react-router-dom'; // import Outlet

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex flex-1 overflow-hidden pt-16">
                <Sidebar isOpen={sidebarOpen} />
                <main className={`flex-1 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'
                    }`}>
                    <div className="p-6">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
