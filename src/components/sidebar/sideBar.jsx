import React, { useState } from 'react';
import SidebarItem from './sideBaritem';
import { primaryColor } from '../../utils/styles';

const Sidebar = ({ isOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: '📊',
      path: '/dashboard'
    },
    {
      id: 'setup',
      title: 'Setup',
      icon: '⚙️',
      subItems: [
        { title: 'User Role', path: '/user/role' },
        { title: 'Roles Access', path: '/role/access' },
        { title: 'Sites', path: '/site' },
        { title: 'Users', path: '/users' }
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: '⚙️',
      subItems: [
        { title: 'General', path: '/settings/general' },
        { title: 'Security', path: '/settings/security' }
      ]
    }
  ];

  return (
    <aside style={{ backgroundColor: primaryColor }} className={`text-white fixed top-16 left-0 h-[calc(100vh-4rem)] z-10 ${
      isOpen ? 'w-64' : 'w-20'
    } transition-all duration-300`}>
      <div className="p-4 border-b border-gray-700">
        <h3 className={`font-semibold ${isOpen ? 'text-xl' : 'text-center'}`}>
          {isOpen ? 'Admin Panel' : 'AP'}
        </h3>
      </div>
      <nav className="p-2 h-[calc(100%-4rem)] overflow-y-auto">
        <ul>
          {menuItems.map(item => (
            <SidebarItem
              key={item.id}
              item={item}
              expanded={expandedItems[item.id]}
              onToggle={toggleItem}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;