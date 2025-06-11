import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarItem = ({ item, expanded, onToggle, isOpen }) => {
  const location = useLocation();
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isActive = hasSubItems
    ? item.subItems.some(subItem => location.pathname.startsWith(subItem.path))
    : false;

  return (
    <li className={`mb-1 ${hasSubItems ? 'has-children' : ''}`}>
      <div
        className="flex items-center"
        onClick={() => hasSubItems && onToggle(item.id)}
      >
        <div
          className={`flex items-center w-full p-3 rounded-md transition-colors 
            ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
        >
          <span className={`${isOpen ? 'mr-3' : 'mx-auto'}`}>{item.icon}</span>
          {isOpen && <span className="flex-1">{item.title}</span>}
          {hasSubItems && isOpen && (
            <span className="ml-2">
              {expanded ? '▼' : '►'}
            </span>
          )}
        </div>
      </div>

      {hasSubItems && expanded && isOpen && (
        <ul className="ml-6 mt-1">
          {item.subItems.map((subItem, index) => {
            const isSubItemActive = location.pathname === subItem.path ||
              location.pathname.startsWith(subItem.path);

            return (
              <li key={index} className="mb-1">
                <NavLink
                  to={subItem.path}
                  className={({ isActive }) =>
                    `block p-2 pl-4 rounded-md transition-colors 
                    ${isActive || isSubItemActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`
                  }
                  end
                >
                  {subItem.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;