import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if the userEmail exists and the password matches
    const user = registeredUsers.find((user) => user.userEmail === userEmail);

    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "userEmail does not exist",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else if (user.password !== password) {
      Swal.fire({
        title: "Error!",
        text: "Incorrect password",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      // Set login
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setuserEmail("");
      setPassword("");
      Swal.fire({
        title: "Success!",
        text: "Login successful",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/");
      window.location.reload();
      
    }
  };

  return (
    <div className="bg-custom-bg bg-no-repeat bg-cover py-12 bg-opacity-30 text-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  dark:bg-gray-50 dark:text-gray-800 mt-20 border-2 border-slate-100 my-6 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">
            Login in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                onChange={(e) => setuserEmail(e.target.value)}
                type="email"
                placeholder="userEmail"
                className="w-full px-3 py-2 border rounded-md bg-transparent "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md bg-transparent"
              />
            </div>
            <button className="btn bg-green-500 text-white font-bold px-8 rounded-md border-none hover:bg-green-500 w-full">
              Login
            </button>
          </div>
        </form>
        <div className="space-y-2 mt-4">
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              to={"/registar/reg"}
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
