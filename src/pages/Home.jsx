import React from "react";
import Navbar from "../components/Navbar";
import Jhin from "../assets/jhin.jpg";
import Logo from "../assets/Logo.png";
import Details from "../components/HomeComponents/Details";
import BackgroundSlider from "../components/HomeComponents/BackgroundSlider";

const Home = () => {
  const images = [
    { id: 1, url: Jhin },
    { id: 2, url: Logo },
  ];

  return (
    <div className="h-screen relative">
      <BackgroundSlider />
      <Details className="z-10" />
      <div className="fixed top-0 w-full pt-5 z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
