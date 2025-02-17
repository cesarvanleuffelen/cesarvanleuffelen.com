import React from "react";

interface ContactBoxProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  link?: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ icon, title, text, link }) => {
  return (
    <a
      href={link}
      className="w-full lg:w-1/4 h-[90%] rounded-2xl flex flex-col justify-around items-center border-2 border-customselectgray hover:bg-customselectgray transition-colors cursor-pointer p-10"
      target="_blank"
    >
      <div className="rounded-full w-24 lg:w-44 h-24 lg:h-44 bg-customb flex justify-center items-center">
        {icon}
      </div>
      <div className="text-center">
        <h1 className="font-bold text-3xl text-customb">{title}</h1>
        <p className="text-xl mt-3">{text}</p>
      </div>
    </a>
  );
};

export default ContactBox;
