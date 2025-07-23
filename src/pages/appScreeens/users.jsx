import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit,
  FiSearch,
  FiTrash2,
  FiUserPlus,
} from "react-icons/fi";
import SharedButton from "../../shared/button";
import { IoMdAdd } from "react-icons/io";
import SharedTable from "../../shared/Table";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRoute } from "react-icons/ci";
import { FaRoute } from "react-icons/fa";
import SharedModal from "../../shared/popup";
import { BsEye, BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import axiosInstance from "../../service/axiosInstance";
import { AuthContext } from "../../context/authContext";
import SharedRadio from "../../shared/radio";
import SharedTextArea from "../../shared/textarea";
import AddUserForm from "../../components/AdduserForm";
import {
  BiEdit,
  BiTrash,
  BiTrashAlt,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import Avatar from "react-avatar";
import { primaryColor } from "../../utils/styles";
import SharedCheckbox from "../../shared/checkbox";
import { CgAssign, CgEye, CgProfile } from "react-icons/cg";
import SharedMenuDropdown from "../../shared/menuDropdown";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FcSurvey } from "react-icons/fc";

const Users = () => {
  const { user } = useContext(AuthContext);
  const [opened, setOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [notificationPopup, setNotificationPopup] = useState(false);
  const [notifyValue, setNotifyValue] = useState("no");
  const [mailBody, setMailBody] = useState(
    "Please Connect To Admin for your Password"
  );
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberRegex = /^[0-9]{10}$/;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
    role: "",
  });
  const totalPages = 10;

  const columns = [
    "User Name",
    "Email Id",
    "Company",
    "Phone",
    "Status",
    "Action",
  ];

  const handleUserSelect = (e, userId) => {
    const isChecked = e.currentTarget.checked;

    setSelectedUsers((prev) => {
      if (isChecked) {
        return [...prev, userId]; // Add user ID
      } else {
        return prev.filter((id) => id !== userId); // Remove user ID
      }
    });
  };

  const dynamicItems = (userId) => [
    { label: "View Profile", onClick: () => alert("View"), icon: <CgProfile size={15} /> },
    {
      label: "Edit",
      onClick: () => alert(`Edit user ${userId}`),
      icon: <BiEdit size={15} />,
    },
    {
      label: "Assign Site",
      onClick: () => alert("Assign Sites"),
      icon: <MdOutlineAssignmentInd size={15} />,
    },
    {
      label: "Assign Survey",
      onClick: () => alert("Assign Survey"),
      icon: <FcSurvey size={15} />,
    },
    {
      label: "Delete",
      onClick: () => alert("Perform user Deletion"),
      icon: <FiTrash2 size={15} />,
    },
  ];

  const handleGroupClick =()=>{
    console.log(selectedUsers)
  }

  const values = [
    [
      <div className="flex space-x-2  justify-start items-center">
        <SharedCheckbox
          value="Alice Johnson"
          onChange={(e) => handleUserSelect(e, 1)}
        />
        <div className="flex items-center space-x-2 ">
          <Avatar name="Alice Johnson" size="30" round color={primaryColor} />
          <span>Alice Johnson</span>
        </div>
      </div>,

      "alice.j@example.com",
      "TechNova",
      "+1-555-0101",
      "Active",
      <div className="space-x-2">
        <SharedMenuDropdown items={dynamicItems(1)} />
      </div>,
    ],
    [
      <div className="flex space-x-2  justify-start items-center">
        <SharedCheckbox
          value="Bob Smith"
          onChange={(e) => handleUserSelect(e, 2)}
        />
        <div className="flex items-center space-x-2 ">
          <Avatar name="Bob Smith" size="30" round color={primaryColor} />
          <span>Bob Smith</span>
        </div>
      </div>,
      "bob.smith@example.com",
      "InnoWare",
      "+1-555-0102",
      "Inactive",
      <div className="">
        <SharedMenuDropdown items={dynamicItems(2)} />
      </div>,
    ],
  ];

  const handleChange = (key, value) => {
    // console.log(key, value);
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (key === "name" && value.trim() !== "") {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleContinue = async () => {
    try {
      console.log("Handling continue...");
      console.log("notifyValue:", notifyValue);
      console.log("mailBody:", mailBody);
      console.log("formData:", formData);

      setNotificationPopup(false); // close popup
      setOpened(false); // optional: close another modal

      if (notifyValue === "no")
        if (notifyValue === "yes")
          // then directly Store user Details
          // then Send mail to user what ever is inside the mail body
          // await axiosInstance.post("/your-endpoint", {
          //   ...formData,
          //   notifyValue,
          //   mailBody
          // });

          console.log("✅ Submitted user successfully");
    } catch (error) {
      console.error("❌ Error in handleContinue:", error);
    }
  };
  
  const handleSubmit = async () => {
    try {
      if (!formData.name.trim()) {
        setErrors({ name: "Name is required" });
        return;
      }
      if (!formData.email.trim()) {
        setErrors({ email: "Email is Required" });
        return;
      }
      if (formData.mobilenumber && !numberRegex.test(formData.mobilenumber)) {
        setErrors({ mobilenumber: "Invalid Number" });
        return;
      }
      if (!emailRegex.test(formData.email)) {
        setErrors({ email: "Invalid Email address" });
        return;
      }

      if (formData.password) {
        setNotificationPopup(true);
      } else {
        // submiting the Details and Sending the Mail to user for Password Creation
        const {status ,data} = await axiosInstance.post("/user/register")
        alert(formData.name, "user Has been saved ");
        console.log(formData, "handleSubmit in User");
        setOpened(false);
      }
    } catch (err) {
      console.error("error On Handle Submit ", err);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <FaUsers size={24} />
        Manage Users
      </h1>

      <div className="flex  flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="w-full sm:max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search User...."
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
            title="Add User"
            iconPosition="left"
            icon={<FiUserPlus size="18"/>}
            onClick={() => setOpened(true)}
          />
        </div>
      </div>
      <div>
        <SharedTable columns={columns} values={values} />
      </div>
      <SharedModal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add User"
        size="70%"
      >
        <AddUserForm
          userId={user.id}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          setOpened={setOpened}
          handleSubmit={handleSubmit}
          setNotificationPopup={setNotificationPopup}
        />
      </SharedModal>

      <SharedModal
        opened={notificationPopup}
        onClose={() => setNotificationPopup(false)}
        size="md"
        title="Notification Options"
      >
        <SharedRadio
          value={notifyValue}
          onChange={setNotifyValue}
          options={[
            { label: "Don't Notify User", value: "no" },
            { label: "Send Password Instruction  via Mail", value: "yes" },
          ]}
        />
        {notifyValue === "yes" && (
          <SharedTextArea
            className="mt-5"
            value={mailBody}
            onChange={(val) => setMailBody(val)}
          />
        )}
        <div className="flex justify-end">
          <SharedButton
            title="Continue"
            className="mt-2 items-end"
            onClick={handleContinue}
          />
        </div>
      </SharedModal>

      {selectedUsers.length !== 0 && (
        <div className="  w-[80%] h-14 absolute  bg-amber-200 bottom-0  rounded-lg ">
          <p>Perform Actions</p>
           <SharedButton title="Delete" onClick={handleGroupClick}/>
        </div>
      )}
    </div>
  );
};

export default Users;
