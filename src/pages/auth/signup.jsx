import React from "react";
import SharedInput from "../../shared/input";
const Signup =()=>{
        return(
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
              <h1 className="text-2xl font-bold mb-1 text-gray-900">
                Create your free account
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                No credit card, no commitment, and cancel anytime.
              </p>
      
              <form className="space-y-4 ">
                <div>
                    <SharedInput label="Work Email" placeholder="Enter Your email" />
               
                </div>
      
                <div className="flex gap-4">
                  <div className="w-1/2">
                   <SharedInput label="First Name"  placeholder="Enter your first name"/>
               
                  </div>
                  <div className="w-1/2">
                   <SharedInput label="Last Name"  placeholder="Enter your last name"/>
             
                  </div>
                </div>
      
                <div>
                    <SharedInput label="Phone number"/>
                  <label className="block text-sm font-medium mb-1">
                    Phone number <span className="text-gray-400">(optional)</span>
                  </label>
                  <div className="flex items-center border rounded overflow-hidden">

                    <span className="bg-gray-100 px-3 py-2 border-r text-sm">🇮🇳 +91</span>
                    <input
                      type="tel"
                      className="flex-1 px-3 py-2 focus:outline-none"
                    />
                  </div>
                </div>
      
                <div>
                    
                  <label className="block text-sm font-medium mb-1">
                    Password <span className="text-gray-400">(min 8 characters)</span>
                  </label>
                  <div className="relative">
                    <input
                    //   type={showPassword ? "text" : "password"}
                      className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:border-blue-400"
                    />
                    <button
                      type="button"
                    //   onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      {/* {showPassword ? "🙈" : "👁️"} */}
                    </button>
                  </div>
                </div>
      
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-sm text-gray-600">
                    By checking this box, I agree to receive updates, insights and offers
                    from SafetyCulture and its affiliates by email and phone to the above
                    contact information. I understand I can withdraw my consent.
                  </p>
                </div>
      
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition"
                >
                  Create free account
                </button>
      
                <p className="text-xs text-center text-gray-500 mt-4">
                  By creating an account you agree to SafetyCulture’s{" "}
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
                  <a href="#" className="text-blue-600 font-medium hover:underline">
                    Log in
                  </a>{" "}
                  instead.
                </p>
              </form>
            </div>
          </div>
        )
}
export default Signup;