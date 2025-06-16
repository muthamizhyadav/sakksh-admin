import React, { useState } from "react";
import SharedInput from "../../shared/input";
import { Link } from "react-router-dom";
import axiosInstance from "../../service/axiosInstance";
import axios from "axios";
const Signup = () => {
  const [register, setRegister] = useState({
    email: "",
    name: "",
    mob_num: "",
    password: "",
    user_role: 3,
  });
  const handleChange = (key, value) => {
    setRegister((prev) => ({ ...prev, [key]: value }));
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();

    console.log(register)
    try {
      const registerRes = await axios.post("http://localhost:3000/user/register", {
        email: register.email,
        name: register.name,
        pass: register.password,
        mob_num: register.mob_num,
        user_role: register.user_role,
      }
    )

      alert(registerRes)
      console.log(registerRes)
    } catch (error) {
      console.log("error While register");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-1 text-gray-900">
          Create your free account
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          No credit card, no commitment, and cancel anytime.
        </p>

        <form className="space-y-4 " onSubmit={handleUserRegister}>
          <div>
            <SharedInput
              label="Work Email"
              placeholder="Enter Your email"
              value={register.email}
              onChange={(val) => handleChange("email", val)}
            />
          </div>

          <div className="">
            {/* <div className="w-1/2"> */}
            <SharedInput
              label="Name"
              placeholder="Enter your name"
              value={register.name}
              onChange={(val) => handleChange("name", val)}
            />
            {/* </div> */}
            <div className="w-1/2 hidden">
              <SharedInput
                label="Last Name"

                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <SharedInput
              label="Phone number"
              value={register.mob_num}
              onChange={(val) => handleChange("mob_num", val)}
              placeholder="Enter Your Mobile number"
            />
          </div>

          <div>
            <SharedInput
              label="Password"
              value={register.password}
              placeholder="**********"
              onChange={(val) => handleChange("password", val)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition"
          >
            Create free account
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By creating an account you agree to{" "}
            <span className=" font-bold text-blue-700 "> Sakksh</span>{" "}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>

          <p className="text-sm text-center mt-4 text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-bold">
              {" "}
              Login{" "}
            </Link>
            {/* <a href="#" className="text-blue-600 font-medium hover:underline">
                    Log in
                  </a>{" "} */}
            instead.
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
