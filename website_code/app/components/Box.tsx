import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  effect?: string,
  bgColor?: string; // Optional background color prop
}

function Box({ children, effect, bgColor = 'bg-custom-dark-gray' }: BoxProps) {
  return (
    <div className={`${bgColor} relative rounded-3xl min-h-20 h-full p-3 
    ${effect == 'yes' ? " hover:-translate-y-1" : " "} 
    transition-transform`}>
      {children}
    </div>
  );
}

export default Box;