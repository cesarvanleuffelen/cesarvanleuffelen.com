import React from "react";
import { IoClose } from "react-icons/io5"; // Icon for the close button
import { usePathname } from "next/navigation";

interface SideNavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function SideNav({ isOpen, toggleSidebar }: SideNavProps) {
    const pathname = usePathname();

    const getLinkClass = (path: string) => {
    return pathname === path ? "bg-customb text-white" : "hover:bg-customselectgray";
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#262427] text-white z-40 transform transition-transform duration-300 ease-in-out w-4/5 md:w-2/5 lg:w-1/5 rounded-l-xl 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
        <div className="h-full flex flex-col p-4">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleSidebar}>
              <IoClose size={35} />
            </button>
          </div>

          {/* Sidebar Content (Navigation Items) */}
          <nav className="mt-8">
            <div className="flex flex-col space-y-4">
                <a href="/" className={`text-xl p-2 rounded-lg transition ${getLinkClass("/")}`}>Home</a>
                <a href="/About" className={`text-xl p-2 rounded-lg transition ${getLinkClass("/About")}`}>About me</a>
                <a href="/Internship" className={`text-xl p-2 rounded-lg transition ${getLinkClass("/Internship")}`}>Internship</a>
                <a href="/Portfolio" className={`text-xl p-2 rounded-lg transition ${getLinkClass("/Portfolio")}`}>Portfolio</a>
                <a href="/Contact" className={`text-xl p-2 rounded-lg transition ${getLinkClass("/Contact")}`}>Contact</a>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
