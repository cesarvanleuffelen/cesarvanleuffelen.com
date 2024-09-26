import React from 'react'
import { kanit } from '../fonts/fonts';

interface TextBlockProps{
    title: string,
    more: string,
    url: string,
    children?: React.ReactNode,
}

export default function TextBlock({title, more, url, children}: TextBlockProps) {
    return (
        <div className='h-full px-2'>
            {/* title and navigation */}
            <div className='flex justify-between'>
                <h2 className={kanit.className + " text-2xl font-bold"}>{title}</h2>
                <a href={url} className=' text-xl text-gray-400 underline'>{more}</a>
            </div>
            {/* contents of the info box */}
            <div className='mt-3 h-full'>
                {children}
            </div>
      </div>
  )
}