import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TfiDashboard } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineAudit } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";


const SidebarItem = ({ item, expanded, onToggle, isOpen }) => {
  const location = useLocation();
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isActive = hasSubItems
    ? item.subItems.some(subItem => location.pathname.startsWith(subItem.path))
    : false;


    const icon = (title, active) => {
  const color = active ? 'black' : 'white';

  switch (title) {
    case 'Dashboard':
      return <TfiDashboard size={25} color={color} />;
    case 'Setup':
      return <IoSettingsOutline size={25} color={color} />;
    case 'Audits':
      return <AiOutlineAudit size={25} color={color} />;
     case 'Customer survey':
      return <IoSettingsOutline size={25} color={color} />;
    case 'Reports':
      return <TbReportSearch size={25} color={color} />;
     case 'Contact Request':
      return <IoSettingsOutline size={25} color={color} />;
    case 'Settings':
      return <IoSettingsOutline size={25} color={color} />;
    case 'Lead Generation':
    return <IoSettingsOutline size={25} color={color} />;
             
    default:
      return <span style={{ color }}>{item.icon}</span>; // fallback
  }
};
  return (
    <li className={`mb-1 ${hasSubItems ? 'has-children' : ''}`}>
      <div
        className="flex items-center"
        onClick={() => hasSubItems && onToggle(item.id)}
      >
        <div
          className={`flex items-center w-full p-3 rounded-md transition-colors 
            ${isActive ? 'bg-white' : 'hover:bg-gray-700'}`}
        >
          <span className={`${isOpen ? 'mr-3' : 'mx-auto'}`}>{icon(item.title,isActive)}</span>
          {isOpen && <span className={`flex-1 h-fit  ${isActive ? 'text-black' : 'hover:bg-gray-700'}`}>{item.title}</span>}
          {hasSubItems && isOpen && (
            <span className="ml-2">
              {expanded ? <IoIosArrowDown color={isActive ? 'black' : 'white'}/> :<IoIosArrowForward color={isActive ? 'black' : 'white'}/> }
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
                    ${isActive || isSubItemActive ? 'bg-white text-black' : 'hover:bg-gray-700'}`
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