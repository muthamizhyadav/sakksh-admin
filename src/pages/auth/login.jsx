import React, { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import SharedInput from "../../shared/input";
import SharedButton from "../../shared/button";
import { Loader } from "@mantine/core";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShow] = useState(false);
  const [fieldErr, setFieldErr] = useState({ email: null, password: null });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErr({ email: null, password: null });
    setIsLoading(true);

    const { ok, message, status } = await login({ email, password });

    if (ok) {
      navigate("/dashboard");
    } else {
      if (status) {
        if (status == 404) {
          setFieldErr((p) => ({ ...p, email: message }));
        } else if (status == 401) {
          setFieldErr((p) => ({ ...p, password: message }));
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert(message);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        <div className="mb-4">
          <SharedInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={setEmail}
            error={fieldErr.email}
            required
          />
        </div>

        <div className="mb-6">
          <SharedInput
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
            error={fieldErr.password}
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
          />
        </div>

        <SharedButton
          title={isLoading ? "Logging in…" : "Login"}
          disabled={isLoading}
          icon={isLoading && <Loader size="xs" color="white" />}
          iconPosition="right"
          className="w-full"
        />
        <p className="text-sm text-center mt-4 text-gray-700">
          Create new account!{" "}
          <Link to="/signup" className="text-black font-bold">
            {" "}
            Create Account{" "}
          </Link>
          {/* <a href="#" className="text-blue-600 font-medium hover:underline">
                    Log in
                  </a>{" "} */}
          instead.
        </p>
      </form>
    </div>
  );
};

export default Login;
