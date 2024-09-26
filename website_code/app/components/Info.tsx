import React from 'react'
import { kanit } from '../fonts/fonts';

interface InfoProps{
    value: string,
    title: string,
    extra?: string,
}

export default function Info({value, title, extra}: InfoProps) {
    return (
      <div className='h-full'>
            <div className='flex justify-between items-center h-full px-2'>
                <h2 className='text-gray-400'>{ title }</h2>
                <p className={kanit.className + " text-2xl font-bold"}>{value}</p>
            </div>
      </div>
  )
}