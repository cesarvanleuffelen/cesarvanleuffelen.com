"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { CiCirclePlus } from "react-icons/ci";

interface PortfolioCartProps {
  background: string;
  url: string;
}

export default function PortfolioCart({ background, url }: PortfolioCartProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full md:1/2 lg:w-1/4 min-h-[200px] h-[300px]">
      <a
        href={url}
        className="w-full h-[70%] rounded-xl relative flex items-center justify-center transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background image */}
        <img
          src={background}
          alt="Project Image"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        {/* Background layer with opacity */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundColor: isHovered ? "rgba(0, 0, 0, 0.6)" : "transparent",
          }}
        ></div>

        {/* Fully opaque text */}
        {isHovered && (
          <span className="absolute underline flex justify-center items-center text-white text-lg font-bold transition-opacity duration-300 z-10">
            <CiCirclePlus size={50} className=" text-customb" />
          </span>
        )}
      </a>
    </div>
  );
}
