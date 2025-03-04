import React from 'react'

export default function PageHero({ title, backgroundImage }) {
  return (
    <div 
      className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
      }}
    >
      <h1 className="text-4xl font-bold text-white text-center">{title}</h1>
    </div>
  )
}
