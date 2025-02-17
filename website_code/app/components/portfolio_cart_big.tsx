"use client";
import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import { CiCirclePlus } from "react-icons/ci";

interface PortfolioCartBigProps {
  background?: string;
  url: string;
  content: React.ReactNode; // Add content prop for the modal content
  title: string; // Add title prop
  tags: string[]; // Add tags prop
}

export default function PortfolioCartBig({
  background,
  url,
  content,
  title, // Destructure title
  tags, // Destructure tags
}: PortfolioCartBigProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full md:1/2 lg:w-1/4 min-h-[200px] h-[300px]">
      {" "}
      {/* Add a parent div with flex-col */}
      <a
        href={"#"}
        className="w-full h-[70%] rounded-xl relative flex items-center justify-center transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        {/* Background image */}
        <img
          src={background}
          alt={title}
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
      {/* Title and tags */}
      <div className="mt-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap mt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-customb text-white text-sm font-medium mx-1 mb-2 px-2.5 py-0.5 rounded cursor-default hover:scale-105 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Modal triggered on click */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <img
              src={background}
              alt={title}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <div className="prose prose-lg">{content}</div>
          </div>
        }
      />
    </div>
  );
}
