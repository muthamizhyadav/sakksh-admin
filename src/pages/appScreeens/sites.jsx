import React, { useState } from "react";
import SharedTable from "../../shared/Table";
import SharedButton from "../../shared/button";
import { BiEdit, BiUser } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import SharedModal from "../../shared/popup";
import { useNavigate } from "react-router-dom";

const Sites = () => {
  const [opened, setOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const columns = ["Site Name", "Status", "Assignd Survey", "Action"];
    const navigate = useNavigate()

  const values = [
    [
      "D Mart(DM2312)",
      "Active",
      "Survey 1",
      <div className="space-x-2">
        <SharedButton title="Assign User" icon={<BiUser />} />
        <SharedButton icon={<BiEdit />} />
        <SharedButton title="Add Site Roles" />
      </div>,
    ],
    ["D Mart(DM12)", "Active", "Survey 2", <div className="space-x-2"></div>],
  ];

  const createSitesForm = ()=>{
        const [siteFormData , setSiteFormData] = useState({
            siteName:'',
            siteCode:'',
            siteType:'',
            siteStatus:'',
            fullAddress:'',
            areaName:'',
            country:'',
            state:'',
            city:'',
            logo:'',
            latitude:'',
            longitude:'',
            secretKey:'',
            sizeInFt:'',
            noOfEmployees:'',
            monthlyRent:'',
            contorllerId:'',
        })
        cosnt [errors, setErrors]= useState({siteName:''})
  }


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Active Sessions</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold mt-2 text-purple-600">$12,345</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="w-full sm:max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search roles..."
              type="search"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-normal">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <button
              className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <span className="px-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
          <SharedButton
            title="Create Sites"
            iconPosition="left"
            icon={<IoMdAdd />}
            onClick={()=>navigate('/createSite')}
            // onClick={() => setOpened(true)}
          />
        </div>
      </div>
      <div>
        <SharedTable columns={columns} values={values} />
      </div>
      <SharedModal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create Sites"
                size='xl'
            >
                {/* <AddUserForm /> */}
            </SharedModal>
      <div className="bg-white p-6 rounded-lg hidden shadow mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="border-b pb-4 last:border-b-0">
            <p className="text-gray-600">New user registered</p>
            <p className="text-sm text-gray-400">2 minutes ago</p>
          </div>
          <div className="border-b pb-4 last:border-b-0">
            <p className="text-gray-600">Settings updated</p>
            <p className="text-sm text-gray-400">15 minutes ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sites;
