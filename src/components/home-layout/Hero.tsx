import React from 'react';
import { StarsC } from '../icons/Stars';
import Button from '../buttons/Button';
import { Play } from '../icons/Play';
import { GraphArrowIncrease } from '../icons/GraphArrow';
import { Thunderbolt } from '../icons/Thunderbolt';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 default-margin relative">
      <div className="absolute top-2 right-0">
        <div className="relative w-40 h-40">
          {/* <div
            className="absolute inset-0 rounded-full
           bg-[rgba(245,66,215,0.4)]
           filter blur-3xl"
          ></div>... */}

          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(190,46,147,0.4)]
           filter blur-xl"
          ></div>
        </div>
      </div>

      <p className="border-white/20 border-[1px] rounded-3xl py-2 px-4 flex gap-3 bg-white/10">
        <StarsC />
        AI-Powered Text Refinement
        <StarsC />
      </p>
      <h1 className="text-[64px] lg:text-[90px] text-center font-inter font-extrabold flex flex-col xl:flex-row justify-center items-center">
        <span className="gradient1">Polish Text,</span>
        <span className="gradient1 relative">
          {' '}
          Effortlessly{' '}
          <span className="absolute">
            <Thunderbolt />
          </span>
        </span>
      </h1>
      <p className="max-w-[550px] text-center font-[300] text-sm md:text-md">
        Transform your text into polished social posts in minutes. Our AI
        tailors your content into ready-to-post updates for LinkedIn, Twitter,
        Instagram, Threads, and official use.
      </p>
      <div className="flex gap-6 mt-10">
        <Button
          text="Get Started Free"
          className="py-3 md:px-6 px-4 gradientBgBtn
             shadow-[0_0_10px_4px_rgba(139,92,246,0.1),0_0_20px_8px_rgba(139,92,246,0.2)]"
          icon={<GraphArrowIncrease />}
        />

        <Button
          text="Watch Demo"
          className="border-white/20 bg-white/10 border-[2px]  py-3 md:px-6 px-4 shadow-lg"
          icon={<Play />}
          left
        />
      </div>
      <ul className="flex flex-col md:flex-row gap-3 mt-10 text-sm">
        <li className="flex justify-center items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>No credit
          card required
        </li>
        <li className="flex justify-center items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#60A5FA]"></span> 100 free
          credits
        </li>
        <li className="flex justify-center items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C084FC]"></span>Setup in 2
          minutes
        </li>
      </ul>
    </div>
  );
};

export default Hero;
