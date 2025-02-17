import React from "react";

interface BoxProps {
  children: React.ReactNode;
  effect?: string;
  bgColor?: string;
  center?: boolean;
}

function Box({
  children,
  effect,
  center = true,
  bgColor = "bg-custom-dark-gray",
}: BoxProps) {
  return (
    <div
      className={`${bgColor} flex flex-col relative rounded-3xl min-h-20 lg:h-full p-3 lg:w-full ${
        center ? "justify-center" : ""
      }   
    ${effect == "yes" ? " hover:-translate-y-1" : " "} 
    transition-transform`}
    >
      {children}
    </div>
  );
}

export default Box;
