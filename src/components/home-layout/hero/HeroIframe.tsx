'use client';

import React, { useState } from 'react';
import { Play } from '../../icons/Play';

const HeroIframe: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/AGddeDjad-4'; // replace

  return (
    <div
      className="
        relative w-full max-w-[1000px] h-64 md:h-120 mt-10
        bg-white/10 backdrop-blur-md
        rounded-xl overflow-hidden shadow-2xl
      "
    >
      {/* top window bar */}
      <div className="absolute top-2 left-4 flex space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center py-3 absolute w-full z-[-1] border-[3px] border-white/10 rounded-xl">
        {' '}
        <p className="md:text-2xl text-xl text-white/70 font-bold hidden md:block">
          Create Viral and Precise Content
        </p>
        <p className="text-center text-sm max-w-[600px] md:text-white/50 text-white/10">
          Jot down your raw idea, no grammar or format needed. Select LinkedIn,
          Twitter, Instagram, or Threads and a tone, then hit “Polish.”
          ContentFix’s AI will turn it into a polished, ready-to-post update.
        </p>
      </div>

      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src={`${videoUrl}?autoplay=1`}
          title="Hero Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            className="
              w-16 h-16 md:w-20 md:h-20
              md:bg-white/20 md:backdrop-blur-md
              rounded-full flex items-center justify-center
              cursor-pointer border-purple-500/20 border-[10px]
            "
          >
            <Play />
          </button>
          <p>Watch Demo</p>
        </div>
      )}
    </div>
  );
};

export default HeroIframe;
