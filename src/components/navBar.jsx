import React, { useContext } from "react";
import { primaryColor } from "../utils/styles";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header
      className="text-white p-4 shadow-md fixed top-0 left-0 right-0 h-16 z-20"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="flex justify-between items-center h-full">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          ☰
        </button>
        <div className="flex items-center space-x-4">
          <div className=" flex flex-col justify-center items-center">
            <span className="font-medium">{user.name} </span>
            <span className="font-medium text-gray-200 text-sm mt-0 pt-0">
              {user?.companyName || "Company Name"}
            </span>
          </div>
          <Link to={`/profile/${user.id}`}>
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
              👤
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
