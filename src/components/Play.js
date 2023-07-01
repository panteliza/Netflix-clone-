import React, { useState, useRef } from 'react';
import television from '../components/assets/tv-video.m4v';

export default function Play() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0">
      <video className="w-full h-full object-cover" ref={videoRef} autoPlay loop muted onClick={togglePlayPause}>
        <source src={television} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center pb-8">
        {isPlaying ? (
          <button
            className="bg-gray-800 px-4 py-2 text-white opacity-70"
            onClick={togglePlayPause}
          >
            Pause
          </button>
        ) : (
          <button
            className="bg-gray-800 px-4 py-2 text-white opacity-70"
            onClick={togglePlayPause}
          >
            Play
          </button>
        )}
      </div>
    </div>
  );
}
