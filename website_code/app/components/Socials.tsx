import React, { Component } from "react";
import SocialsIcon from "./SocialIcon";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { CgPexels } from "react-icons/cg";

export default function Socials() {
  return (
    <div className="h-full">
      <h2 className="text-gray-400">socials</h2>
      <div className="flex justify-around items-center h-full px-2 my-6 lg:my-0">
        <SocialsIcon
          url="https://www.linkedin.com/in/cesarvanleuffelen/"
          icon={FaLinkedin}
        />
        <SocialsIcon
          url="https://x.com/VanLeuffelenC"
          icon={FaSquareXTwitter}
        />
        <SocialsIcon
          url="https://www.instagram.com/cesarvanleuffelen4/"
          icon={FaInstagram}
        />
        <SocialsIcon
          url="https://www.pexels.com/@cesar-van-leuffelen-326719936/"
          icon={CgPexels}
        />
      </div>
    </div>
  );
}
