import React from 'react';
import { IoIosClose } from "react-icons/io";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

export default function Modal({ isOpen, onClose, content }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Background */}
      <div
        className="fixed inset-0"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div
        className="relative w-[60%] max-w-3xl h-[80vh] bg-customgray rounded-lg shadow-lg p-6 transition-transform transform 
        duration-500 ease-out"
        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(100vh)' }}
      >
        <button className="absolute text-lg top-4 right-4 text-white hover:text-gray-400" onClick={onClose}>
           <IoIosClose size={30}/>{/* Close Button */}
        </button>
        {content}
      </div>
    </div>
  );
}
