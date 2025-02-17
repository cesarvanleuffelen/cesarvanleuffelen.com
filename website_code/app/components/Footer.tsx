import React from "react";
import { TbWorld } from "react-icons/tb";
import { CgPexels } from "react-icons/cg";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex justify-between items-center mx-6 text-gray-400 py-4">
      <div>
        <p>
          All rights reserved{" "}
          <a
            className="text-customb hover:underline"
            href="https://www.netbrew.be/"
          >
            &copy; NETbrew
          </a>
        </p>
      </div>
      <div className="flex mt-4">
        <p className="px-1 hover:text-white transition hover:-translate-y-1">
          <a href="https://www.linkedin.com/in/cesarvanleuffelen/">
            <FaLinkedin size={30} />
          </a>
        </p>
        <p className="px-1 hover:text-white transition hover:-translate-y-1">
          <a href="https://x.com/VanLeuffelenC">
            <FaSquareXTwitter size={30} />
          </a>
        </p>
        <p className="px-1 hover:text-white transition hover:-translate-y-1">
          <a href="https://www.pexels.com/@cesar-van-leuffelen-326719936/">
            <CgPexels size={30} />
          </a>
        </p>
      </div>
    </div>
  );
}
