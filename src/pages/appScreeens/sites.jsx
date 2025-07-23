import React, { useContext, useEffect, useState } from "react";
import SharedTable from "../../shared/Table";
import SharedButton from "../../shared/button";
import { BiEdit, BiStore, BiUser } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SharedDrawer from "../../shared/drawer";
import { AuthContext } from "../../context/authContext";
import LabelForm from "../../components/LabelForm";
import { CgAssign } from "react-icons/cg";
import SharedMenuDropdown from "../../shared/menuDropdown";
import SharedCheckbox from "../../shared/checkbox";

const Sites = () => {
  const { user } = useContext(AuthContext);
  const [opened, setOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const columns = ["Site Name", "Status", "Assignd Survey", "Action"];
  const navigate = useNavigate();

  const siteActions = (siteId) => [
    { label: "View Site", onClick: () => {}, icon: <BiStore size={18} /> },
    { label: "Edit Site", onClick: () => {}, icon: <BiEdit size={18} /> },
    {
      label: "Assign User",
      onClick: () => {},
      icon: <CgAssign size={18} />,
    },
    {
      label: "Assign Survey ",
      onClick: () => {},
      icon: <CgAssign size={18} />,
    },
  ];

  const values = [
    [
      <div className="flex space-x-2 justify-start items-center gap-2">
        <SharedCheckbox value="D Mart(DM2312)" />
        <p>D Mart(DM2312)</p>
      </div>,
      "Active",
      "Survey 1",
      <div className="space-x-2">
        <SharedMenuDropdown items={siteActions(1)} />
      </div>,
    ],
    [
      <div className="flex space-x-2 justify-start items-center gap-2">
        <SharedCheckbox value="D Mart(DM12)" />
        <p>D Mart(DM12)</p>
      </div>,
      "Active",
      "Survey 2",
      <div className="space-x-2">
        <SharedMenuDropdown items={siteActions(2)} />
      </div>,
    ],
  ];

  // const handleChange = () => {};
  const handleCheckNode = (val) => {
    setLabels(val);
  };

  const getAllSites = async () => {
    try {
    } catch (err) {
      console.log("error While Fetching all the Sites", err);
    }
  };

  useEffect(() => {
    getAllSites();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Sites</h1>
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
          {/* <SharedButton title="Label" onClick={()=> navigate('/labels')}/> */}
          <SharedButton title="Label" onClick={() => setDrawerOpened(true)} />
          <SharedButton
            title="Create Sites"
            iconPosition="left"
            icon={<IoMdAdd />}
            onClick={() => navigate("/createSite")}
            // onClick={() => setOpened(true)}
          />
        </div>
      </div>
      <div>
        <SharedTable columns={columns} values={values} />
      </div>
      <SharedDrawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Label"
        size="lg"
      >
        <LabelForm />
      </SharedDrawer>
    </div>
  );
};

export default Sites;
