import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let result = await fetch(`https://dummyjson.com/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
        expiresInMins: 30,
      }),
    }).then((res) => res.json());

    console.log(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r  flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full">
        <h1 className="text-3xl text-teal-600  font-bold mb-6 text-center ">
          Welcome Back
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Your Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="text"
              type="text"
              required
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-gray-900 select-none"
            >
              Remember me
            </label>
          </div>

          <button className="bg-teal-600  w-full py-3  hover:bg-teal-700 text-white font-semibold rounded-md transition-colors duration-300">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
