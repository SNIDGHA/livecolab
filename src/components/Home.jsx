import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-sans">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <h1 className="text-5xl font-bold">LiveCoLab</h1>
        </div>
        <div className="flex items-center space-x-8">
          <h3 className="text-xl hover:underline cursor-pointer">Home</h3>
          <h3 className="text-xl hover:underline cursor-pointer">About us</h3>
          <h3 className="text-xl hover:underline cursor-pointer">Contact us</h3>
          <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg hover:bg-blue-100 transition duration-300">
            Sign-in/Sign-up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
