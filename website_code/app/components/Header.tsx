"use client"
import React, { useState } from 'react'
import Box from './Box'
import { kanit } from '../fonts/fonts'
import { IoMenu } from 'react-icons/io5'
import SideNav from './SideNav'

export default function Header() {
    // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
    <Box>
        <div>
            <div className="flex justify-between items-center h-12 px-2">
                <h1 className={kanit.className + " text-2xl font-bold text-gray-200"}>
                    <span className="text-customb">César</span> Van Leuffelen
                </h1>
                <div className="cursor-pointer" onClick={toggleSidebar}>
                    <IoMenu size={35} />
                </div>
            </div>
        </div>
    </Box>
    {/* Sidebar Component */}
    <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
</div>
  )
}
