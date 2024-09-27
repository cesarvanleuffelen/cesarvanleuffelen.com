"use client"
import { title } from 'process';
import React, { useState } from 'react'

interface PortfolioCartProps {
    title: string,
    background: string,
    url: string,
}

export default function PortfolioCart({ background, url, title }: PortfolioCartProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
          href={ url }
      className={`${background} bg-slate-300 w-1/4 h-4/5 rounded-xl relative flex items-center justify-center transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer with opacity */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'transparent' }}
      ></div>

      {/* Fully opaque text */}
      {isHovered && (
        <span className="absolute text-customb text-md transition-opacity duration-300 z-10">
          <h3 className='text-center text-gray-200 text-lg font-bold'>{ title }</h3>
          More Info
        </span>
      )}
    </a>
  );
}
