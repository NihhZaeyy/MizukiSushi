import React from "react";
import Navbar from "../components/Home/Navbar";
import HomePage from "../components/Home/HomePage";
import NavBot from "../components/NavBot/NavBot";

const Home = () => {
  return (
    <>
      <div className="bg-darkgray h-screen w-screen relative overflow-hidden">
        <Navbar />
        <HomePage />
        <NavBot />
      </div>
    </>
  );
};

export default Home;
