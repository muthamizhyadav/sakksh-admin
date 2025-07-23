import React, { useContext, useState } from "react";
import SharedInput from "../../shared/input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [registerData, setRegister] = useState({
    email: "",
    name: "",
    mob_num: "",
    password: "",
    companyName: "",
    user_role: 3,
  });
  const [showPassword, setShow] = useState(false);
  const [fieldErr, setFieldErr] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const handleChange = (key, value) => {
    setRegister((prev) => ({ ...prev, [key]: value }));
  };

  const { register, loading } = useContext(AuthContext);

  const handleUserRegister = async (e) => {
    e.preventDefault();
    setFieldErr({ email: null, password: null });
    // setIsloading(true);

    const { ok, message, status } = await register(
    register
    );

    if (ok) {
      navigate("/login");
    } else {
      if (status) {
        if (status == 400) {
          setFieldErr((p) => ({ ...p, password: message }));
        } else if (status == 409) {
          setFieldErr((p) => ({ ...p, email: message }));
        } else {
          alert("error while registeration");
        }
      } else {
        alert(message);
      }
    }

    console.log("result", message, status);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-1 text-gray-900">
          Create your free account on{" "}
          <span className=" font-serif text-2xl text-blue-800">Sakksh</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          No credit card, no commitment, and cancel anytime.
        </p>

        <form className="space-y-4 " onSubmit={handleUserRegister}>
          <div>
            <SharedInput
              label="Work Email"
              placeholder="Enter Your email"
              value={registerData.email}
              error={fieldErr.email}
              required
              onChange={(val) => handleChange("email", val)}
            />
          </div>
          <div className="">
            <SharedInput
              label="Company"
              value={register.companyName}
              onChange={(val) => handleChange("companyName", val)}
              placeholder="Enter Your Company Name"
              required
            />
          </div>

          <div className="">
            {/* <div className="w-1/2"> */}
            <SharedInput
              label="Name"
              placeholder="Enter your name"
              value={registerData.name}
              required
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
              // description="Optional"
              value={registerData.mob_num}
              onChange={(val) => handleChange("mob_num", val)}
              placeholder="Enter Your Mobile number"
            />
          </div>

          <div>
            <SharedInput
              label="Password"
              value={registerData.password}
              placeholder="**********"
              error={fieldErr.password}
              type={showPassword ? "text" : "password"}
              required
              rightSection={
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              }
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
