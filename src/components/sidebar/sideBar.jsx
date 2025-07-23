import React, { useContext, useState } from "react";
import SidebarItem from "./sideBaritem";
import { primaryColor, secondaryColor } from "../../utils/styles";
import appLogo from "../../assets/images/png/sakkshLogo.png";
import { AuthContext } from "../../context/authContext";
import { BiLogOut } from "react-icons/bi";

const Sidebar = ({ isOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const { logout } = useContext(AuthContext);

  const toggleItem = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "setup",
      title: "Setup",
      subItems: [
        { title: "User Role", path: "/user/role" },
        { title: "Roles Access", path: "/role/access" },
        { title: "Sites", path: "/site" },
        { title: "Users", path: "/users" },
      ],
    },

    {
      id:   "audits",
      title: "Audits",
      subItems: [
        { title: "Audit Checklists", path: "/audits/auditchecklists" },
      ],
    },

    // {
    //   id: "customer survey",
    //   title: "Customer survey",
    //   subItems: [
    //     { title: "Question Master", path: "/customersurvey/questionmaster" },
    //     { title: "Create Site Areas", path: "/customersurvey/createsiteareas" },
    //     { title: "Generate QR", path: "/customersurvey/generateQR" },
    //   ],
    // },

    {
      id: "reports",
      title: "Reports",
      subItems: [{ title: "Site Report", path: "/reports/sitereport" }],
    },
    {
      id: "lead generation",
      title: "Lead Generation",
      path: "leadgeneration",
    },
    {
      id: "contact request",
      title: "Contact Request",
      subItems: [
        { title: "Demo Query", path: "/contactrequest/demoquery" },
        { title: "Sales Query", path: "/contactrequest/salesquery" },
      ],
    },
    {
      id: "settings",
      title: "Settings",
      subItems: [
        { title: "Module", path: "/settings/module" },
        { title: "General", path: "/settings/general" },
        { title: "Security", path: "/settings/security" },
      ],
    },
  ];

  return (
    <aside
      style={{ backgroundColor: primaryColor }}
      className={`text-white fixed top-16 left-0 h-[calc(100vh-4rem)] z-10 ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      <div className="p-4 border-b border-gray-700 m-auto text-center">
        <img src={appLogo} alt="" width="100" height="40" />
      </div>
      <nav className="p-2 h-[calc(100%-8rem)] overflow-y-auto">
        <ul>
          {menuItems.map((item) => (
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
      <div className="p-4 border-t relative bottom-0 border-gray-700 m-auto text-center">
        <button className="text-white flex items-center gap-3" onClick={logout}>
          {isOpen ? "Logout" : <BiLogOut size={24} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
