import React from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-5 py-5">

      {/* Spotify Logo */}
      <SiSpotify className="text-white text-3xl mb-5" />

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-12">
        Welcome back
      </h1>


      <div className="w-full max-w-[350px]">

        {/* Email */}
        <label className="block text-sm font-bold mb-3">
          Email
        </label>

        <input
          type="email"
          className="
          w-full h-13 bg-transparent 
          border border-gray-500 rounded-md
          px-4 outline-none
          focus:border-white
          "
        />


        {/* Continue Button */}
        <button
          className="
          mt-5 w-full h-13 rounded-full
          bg-[#1ed760]
          text-black font-bold text-md
          hover:bg-[#1fdf64]
          transition
          "
        >
          Continue
        </button>


        {/* OR */}
        <div className="text-center my-4 text-lg">
          or
        </div>


        {/* Social Buttons */}

        <button className="
          w-full h-12 rounded-full
          border border-gray-600
          flex items-center justify-center gap-10
          font-bold text-md
          mb-3
        ">
          <FaGoogle className="text-xl"/>
          Continue with Google
        </button>


        <button className="
          w-full h-12 rounded-full
          border border-gray-600
          flex items-center justify-center gap-10
          font-bold text-md
          mb-3
        ">
          <FaFacebook className="text-blue-500 text-xl"/>
          Continue with Facebook
        </button>


        <button className="
          w-full h-12 rounded-full
          border border-gray-600
          flex items-center justify-center gap-10
          font-bold text-md
        ">
          <FaApple className="text-xl"/>
          Continue with Apple
        </button>

      </div>

    </div>
  );
};

export default Login;