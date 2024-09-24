import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  bgColor?: string; // Optional background color prop
}

function Box({ children, bgColor = 'bg-custom-dark-gray' }: BoxProps) {
  return (
    <div className={`${bgColor} rounded-3xl min-h-20 h-full p-3`}>
      {children}
    </div>
  );
}

export default Box;