import React from 'react';

interface PageBoxProps {
  children: React.ReactNode;
  effect?: string;
  bgColor?: string; // Optional background color prop
}

function PageBox({ children, effect, bgColor = 'bg-custom-dark-gray' }: PageBoxProps) {
  return (
    <div
      className={`${bgColor} relative rounded-3xl min-h-20 h-full p-3
      ${effect === 'yes' ? 'hover:-translate-y-1' : ''} transition-transform`}
    >
      {children}
    </div>
  );
}

export default PageBox;