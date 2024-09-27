"use client";
import React, { useState } from "react";
import Modal from './Modal'; // Import the Modal component

interface PortfolioCartBigProps {
  background?: string;
  url: string;
  content: React.ReactNode; // Add content prop for the modal content
}

export default function PortfolioCartBig({ background, url, content }: PortfolioCartBigProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a
        href={url}
        className={`${background} bg-customgray w-1/4 min-h-[200px] h-[300px] rounded-xl relative flex items-center justify-center transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        {/* Background layer with opacity */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{ backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'transparent' }}
        ></div>

        {/* Fully opaque text */}
        {isHovered && (
          <span className="absolute underline text-white text-lg font-bold transition-opacity duration-300 z-10">
            More Info
          </span>
        )}
      </a>

      {/* Modal triggered on click */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={content} />
    </>
  );
}
