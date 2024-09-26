import React from 'react'

interface KpiProps {
    big: string,
    description: string,
}

export default function Kpi({ big, description }: KpiProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-6xl mb-3">{ big }</h2>
          <p>{ description }</p>
    </div>
  )
}
