import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail, password);

    // Retrieve existing users from localStorage
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if the userEmail already exists
    const userExists = registeredUsers.some(
      (user) => user.userEmail === userEmail
    );
    if (userExists) {
      return Swal.fire({
        title: "Error!",
        text: "userEmail already exists",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }

    // Add new user to the array
    const newUser = { userEmail, password };
    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    localStorage.setItem("autuser", JSON.stringify(userEmail));

    Swal.fire({
      title: "Success!",
      text: "Registration successful!",
      icon: "success",
      confirmButtonText: "Cool",
    });
    setuserEmail("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="bg-regBg bg-no-repeat bg-cover py-12 bg-opacity-30 text-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  dark:bg-gray-50 dark:text-gray-800 mt-20 border-2 border-slate-100 my-6 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm dark:text-gray-600">Register your account</p>
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
            Already have an account ?
            <Link
              to={"/login"}
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
