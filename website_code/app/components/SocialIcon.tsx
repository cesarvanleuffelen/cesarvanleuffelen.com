import React, { Component } from 'react'
import { IconType } from 'react-icons'

interface SocialIconProps {
    icon: IconType,
    url: string,
}

export default function SocialsIcon({ icon: Icon, url }: SocialIconProps) {
    
    return (
        <a href={url} target='_blank'>
            <div className='cursor-pointer p-4 rounded-full bg-customgray hover:bg-customb transition'>
                <Icon className="text-white" size={30} />
            </div>
        </a>
  )
}