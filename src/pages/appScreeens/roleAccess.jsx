import React, { useState } from "react";
import SharedSelect from "../../shared/select";
import SharedButton from "../../shared/button";
import SharedMultiSelect from "../../shared/multiSelect";
import SharedInput from "../../shared/input";
import SharedTable from "../../shared/Table";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const RoleAccess = () => {
  const columns = ["S.NO#", "Module", "Access Type", "Action"];
  const [selectedRoles, setSelectedRoles] = useState(["admin", "auditor"]);
  const [opened, setOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const [pageSize, setPageSize] = useState("10");
  const data = [
    { label: "Sakksh", value: "sakksh" },
    { label: "Auditor", value: "auditor" },
    { label: "Admin", value: "admin" },
    { label: "Site", value: "site" },
    { label: "Manager", value: "manager" },
    { label: "Supervisor", value: "supervisor" },
    { label: "Analyst", value: "analyst" },
    { label: "Coordinator", value: "coordinator" },
    { label: "Technician", value: "technician" },
    { label: "Inspector", value: "inspector" },
  ];

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "staff", label: "Staff" },
  ];

  const values = [
    [
      "1",
      "None",
      "Global",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "2",
      "Admin",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "3",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "3",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "4",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "5",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "6",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "7",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "8",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
    [
      "7",
      "Manager",
      "India",
      <div className="space-x-2">
        <SharedButton
          icon={<RiDeleteBin6Line size={15} color="red" />}
          onClick={() => alert("Remove!")}
          className="bg-white border  border-red-600"
          title="Remove"
          textColor="text-red-600"
        />
      </div>,
    ],
  ];

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">

          <FaSitemap size={24} />
          Role Management
        </h1>

        <div className="flex gap-5 items-center h-full">
            <div className="w-2/4">
          <SharedSelect
            className="w-2/6"
            placeholder="Select user type"
            data={data}
          />
          </div>
          <div className="w-2/6">
          <SharedMultiSelect
            isMulti={true}
            placeholder="Select roles"
            data={[
              { label: "Admin", value: "admin" },
              { label: "Auditor", value: "auditor" },
              { label: "Site", value: "site" },
            ]}
            value={selectedRoles} // Should be an array
            onChange={(values) => setSelectedRoles(values)}
            className="w-1/3"
          />
          </div>

          <SharedButton title="Add Access" />

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
             <div className="flex gap-2 items-center h-full w-fit">
            <span className="w-22 ">
              <SharedSelect
                value={pageSize}
                onChange={setPageSize}
                data={[
                  { label: "10", value: "10" },
                  { label: "25", value: "25" },
                  { label: "50", value: "50" },
                  { label: "100", value: "100" },
                ]}
              />
            </span>
            <span>Entries</span>
          </div>

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
          </div>
        </div>
      </div>

      <SharedTable columns={columns} values={values} />
    </>
  );
};

export default RoleAccess;
