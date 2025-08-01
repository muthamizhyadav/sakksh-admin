import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import SharedModal from "../../shared/popup";
import SharedInput from "../../shared/input";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  // if (user.user_role === 3) {
  //   return (
  //     <SharedModal opened={true} >
  //       <div className="">
  //         <SharedInput label="Company Name" placeholder="Enter Your company name"/>
  //         <SharedInput label="Industry" placeholder="Enter Your Industry"/>
  //         <SharedInput label="Job Title" placeholder="Enter Job Title "/>
  //         <p>
  //           fill the company  first
  //         </p>
  //       </div>
  //     </SharedModal>
  //   );
  // }

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

      <div className="bg-white p-6 rounded-lg shadow mt-6">
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

export default Dashboard;
