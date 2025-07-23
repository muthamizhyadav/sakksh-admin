import React, { useCallback, useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";

import SharedInput from "../shared/input";
import SharedSelect from "../shared/select";
import SharedButton from "../shared/button";
import axiosInstance from "../service/axiosInstance";

const AddUserForm = ({
  userId,
  formData,
  errors,
  setOpened,
  handleSubmit,
  handleChange,
}) => {
  const [roles, setRoles] = useState([]);
  const getRoles = useCallback(async () => {
    const { status, data } = await axiosInstance.get(
      `/user/get/roles/${userId}`
    );

    console.log(status , data)
    if (status === 200) {
      const formatted = data.map((role) => ({
        id: role.id,
        label: role.role_name,
        value: String(role.id),
      }));
      // console.log(formatted)
      setRoles(formatted);
    }
  }, [userId]);


  useEffect(() => {
    getRoles();
  }, [getRoles]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SharedInput
          label="Full Name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={(val) => handleChange("name", val)}
          error={errors.name}
          required
        />
        <SharedInput
          label="Email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(val) => handleChange("email", val)}
          error={errors.email}
          required
        />
        <SharedInput
          label="Password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(val) => handleChange("password", val)}
          error={errors.password}
        />
        <SharedInput
          label="Mobile Number"
          placeholder="Enter Mobile Number"
          value={formData.mobilenumber}
          onChange={(val) => handleChange("mobilenumber", val)}
          error={errors.mobilenumber}
        />
        <SharedSelect
          label="Role"
          placeholder="Select"
          data={roles}
          value={formData.role}
          onChange={(val) => handleChange("role", val)}
          error={errors.role}
        />
      </div>
      <div className="flex mt-4 justify-end gap-2">
        <SharedButton
          title="Cancel"
          onClick={() => setOpened(false)}
          className="bg-white border border-red-600 "
          textColor="text-red-600"
        />
        <SharedButton
          icon={<BiSave size={20} />}
          title="Add User"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default AddUserForm;
