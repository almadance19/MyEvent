// components/Hero.js
import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative h-screen">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover object-center w-full h-5/6"
        poster="/assets/images/hero.png" 
      >
        <source src="/assets/images/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image fallback for browsers that don't support video */}
      {/* <img
        src="/assets/images/hero.png"
        alt="Hero Image"
        className="object-cover object-center w-full h-full"
      /> */}

      {/* Content overlay (add your content here) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">My Ticket</h1>
          <p className="text-lg">Find Tickets for the hootest dancing events around</p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;