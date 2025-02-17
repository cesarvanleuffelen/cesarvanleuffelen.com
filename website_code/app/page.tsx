"use client";
import React, { useState } from "react";
import Box from "./components/Box";
import { kanit } from "./fonts/fonts";
import { IoMenu } from "react-icons/io5";
import Kpi from "./components/kpi";
import Info from "./components/Info";
import Socials from "./components/Socials";
import TextBlock from "./components/TextBlock";
import PortfolioCart from "./components/Portfolio_cart";
import SideNav from "./components/SideNav";

export default function Home() {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen p-4 gap-4 flex flex-col h-screen">
      {/* Top section */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-4 lg:h-2/3">
        {/* Top right (Navbar, Photo, and Info) */}
        <div className="lg:col-span-7 lg:grid lg:grid-rows-[auto_1fr] lg:gap-4 lg:h-full">
          {/* Navbar */}
          <div>
            <Box>
              <div className="flex justify-between items-center h-full px-2">
                <h1
                  className={
                    kanit.className + " text-xl font-bold text-gray-200"
                  }
                >
                  <span className="text-customb">César</span> Van Leuffelen
                </h1>
                <div className="cursor-pointer" onClick={toggleSidebar}>
                  <IoMenu size={35} />
                </div>
              </div>
            </Box>
          </div>

          {/* Photo and Info */}
          <div className="flex flex-col mt-3 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-4 lg:h-full">
            {/* Photo */}
            <div className="mb-3 lg:mb-0">
              <Box bgColor="bg-customb">
                <h2>Photo</h2>
              </Box>
            </div>

            {/* Name, Location, Age */}
            <div className="grid grid-rows-[auto_auto_5fr] gap-4 lg:h-full">
              {/* name */}
              <div>
                <Box>
                  <Info value="César Van Leuffelen" title="Name:" />
                </Box>
              </div>
              {/* age */}
              <div>
                <Box>
                  <Info value="20" title="Age:" />
                </Box>
              </div>
              {/* socials */}
              <div className="mb-3 lg:mb-0">
                <Box>
                  <Socials />
                </Box>
              </div>
            </div>
          </div>
        </div>

        {/* Top left (Quote and Metrics) */}
        <div
          id="container1"
          className="lg:col-span-5 lg:grid lg:grid-rows-[60%_auto] lg:gap-4 lg:h-full"
        >
          {/* Quote */}
          <div id="quote" className="mb-4 lg:mb-0">
            <div className="w-full h-full">
              <Box center={false}>
                <h2
                  className={
                    kanit.className + " text-5xl lg:text-[55px] mb-10 lg:mb-0"
                  }
                >
                  'You miss 100% of the shots you don't take'
                </h2>
                <h2 className="text-gray-500 text-xl">- Wayne Gretzky</h2>
                {/* let's talk button */}
                <a
                  href="/Contact"
                  className="bg-customb p-3 text-xl rounded-md absolute bottom-5 right-5 hover:scale-105 transition-transform active:scale-100"
                >
                  Let's talk 👋
                </a>
              </Box>
            </div>
          </div>
          {/* 3 Metrics */}
          <div
            id="container2"
            className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:h-full"
          >
            {/* green */}
            <div id="green">
              <Box effect="yes" bgColor="bg-customg">
                <Kpi big="3+" description="Years Experience" />
              </Box>
            </div>
            {/* yellow */}
            <div id="yellow">
              <Box effect="yes" bgColor="bg-customy">
                <Kpi big="8+" description="projects" />
              </Box>
            </div>
            {/* red */}
            <div id="red">
              <Box effect="yes" bgColor="bg-customr">
                <Kpi big="5+" description="clients" />
              </Box>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-4 lg:h-1/3">
        {/* Bottom right (About me) */}
        <div className=" flex flex-col lg:col-span-5 lg:h-full mb-4 lg:mb-0">
          <Box>
            <TextBlock title="About Me" more="Resume" url="#">
              <p className="text-gray-400">
                I'm a driven and disciplined individual with a passion for IT
                and entrepreneurship. I thrive on balancing a structured yet
                dynamic lifestyle, always seeking ways to push myself both
                mentally and physically. Currently, I'm developing an ERP system
                enhanced by AI agents to help small businesses with their
                administration, combining my technical skills with real-world
                problem-solving. My ultimate goal is to build innovative
                solutions that help advance our species—leveraging technology to
                create meaningful progress.
              </p>
            </TextBlock>
          </Box>
        </div>

        {/* Bottom left (Portfolio) */}
        <div className="flex flex-col lg:col-span-7 h-screen lg:h-full">
          <Box>
            <TextBlock title="Portfolio" more="See All" url="/Portfolio">
              <div className="flex flex-col lg:flex-row justify-around h-full">
                <PortfolioCart
                  background="/projects/labflow.png"
                  url="/Portfolio"
                />
                <PortfolioCart
                  background="/projects/revapp.png"
                  url="/Portfolio"
                />
                <PortfolioCart
                  background="/projects/signalguard.png"
                  url="/Portfolio"
                />
              </div>
            </TextBlock>
          </Box>
        </div>
      </div>

      {/* Sidebar Component */}
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
