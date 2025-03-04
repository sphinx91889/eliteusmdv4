import React, { useState, useEffect } from 'react'

const videos = [
  'https://videos.pexels.com/video-files/4487124/4487124-uhd_2560_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/4352136/4352136-hd_1920_1080_25fps.mp4',
  'https://videos.pexels.com/video-files/4487122/4487122-uhd_2560_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/5406018/5406018-uhd_2560_1440_25fps.mp4'
]

export default function VideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
        setNextVideoIndex((prev) => (prev + 1) % videos.length)
        setIsTransitioning(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
      <video
        key={videos[currentVideoIndex]}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
      <video
        key={videos[nextVideoIndex]}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videos[nextVideoIndex]} type="video/mp4" />
      </video>
    </div>
  )
}
