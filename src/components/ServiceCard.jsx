import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, imageUrl, path }) {
  return (
    <Link 
      to={path}
      className="block relative overflow-hidden rounded-xl bg-white shadow-xl soft-gradient-overlay"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 transition-opacity group-hover:opacity-30"
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      />
      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-semibold mb-4 card-title text-secondary">{title}</h3>
        <div className="card-divider mb-6 bg-gradient-to-r from-primary/30 to-transparent"></div>
        <p className="text-gray-800 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
