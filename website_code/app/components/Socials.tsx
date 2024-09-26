import React, { Component } from 'react'
import SocialsIcon from './SocialIcon'
import { TbWorld } from "react-icons/tb";
import { FaLinkedin, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";



export default function Socials() {
    return (
        <div className='h-full'>
            <h2 className='text-gray-400'>socials</h2>
            <div className='flex justify-around items-center h-full px-2'>
                <SocialsIcon url='#' icon={FaLinkedin} />
                <SocialsIcon url='#' icon={FaSquareXTwitter} />
                <SocialsIcon url='#' icon={FaInstagram} />
                <SocialsIcon url='#' icon={TbWorld }/>
            </div>
      </div>
  )
}